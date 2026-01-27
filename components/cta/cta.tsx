"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef } from "react";

// Types
import type { CTAProps } from "./types";

// Images
import { ArrowRightIcon } from "../svg/svg";

// Imports
import gsap from "gsap";
import clsx from "clsx";
import { isExternalLink } from "@/utils/isExternalLink";

const CTA: React.FC<CTAProps> = ({
  action,
  color = "#134E64",
  variant = "default",
  children,
}) => {
  // Variables
  const textColor = useMemo(
    () => ({
      default: variant === "default" ? color : "white",
      hovered: variant === "default" ? "white" : color,
    }),
    [color, variant],
  );

  // Refs
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  // Effects
  useEffect(() => {
    const bg = bgRef.current;
    const content = contentRef.current;
    const trigger = triggerRef.current;

    if (!bg || !content || !trigger) return;

    // Initial state
    gsap.set(bg, { skewX: 45, scaleX: 0, autoAlpha: 1 });

    let current: "idle" | "enter" | "leave" = "idle";
    let pending: "idle" | "enter" | "leave" = "idle";

    const runAnimation = (type: "enter" | "leave") => {
      current = type;

      const isEnter = type === "enter";
      const tl = gsap.timeline({ defaults: { duration: 0.3 } });

      tl.set(bg, { transformOrigin: isEnter ? "right" : "left" })
        .to(bg, {
          skewX: 45,
          scaleX: isEnter ? 1 : 0,
        })
        .to(
          content,
          { color: isEnter ? textColor.hovered : textColor.default },
          "<",
        );

      tl.call(() => {
        current = "idle";

        if (pending !== "idle") {
          const next = pending;
          pending = "idle";
          runAnimation(next);
        }
      });
    };

    const requestAnimation = (type: "enter" | "leave") => {
      if (current === "idle" && pending === "idle") runAnimation(type);
      else pending = type;
    };

    const onMouseEnter = () => requestAnimation("enter");
    const onMouseLeave = () => requestAnimation("leave");

    trigger.addEventListener("mouseenter", onMouseEnter);
    trigger.addEventListener("mouseleave", onMouseLeave);

    return () => {
      trigger.removeEventListener("mouseenter", onMouseEnter);
      trigger.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color, textColor]);

  // Render
  const isLink = "href" in action;
  const href = isLink ? action.href : "#";
  const external = isLink ? isExternalLink(href) : false;

  const sharedProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: triggerRef as any,
    className:
      "relative h-[52px] pl-5 pr-4 flex items-center rounded-lg overflow-hidden",
    ...(variant === "default"
      ? {
          style: {
            clipPath:
              "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)",
          },
        }
      : {}),
  };

  const content = (
    <>
      {/* Background */}
      <div
        className={clsx(
          "absolute inset-0 origin-center scale-140 pointer-events-none",
          {
            "bg-foreground": variant === "default",
            "bg-white/10": variant === "secondary",
          },
        )}
      >
        <div
          ref={bgRef}
          className={clsx(
            "size-full",
            "opacity-0 invisible", // Initial state
          )}
          style={{ backgroundColor: variant === "default" ? color : "white" }}
        ></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{ color: textColor.default }}
        className="w-full relative flex items-center justify-between gap-3"
      >
        <p
          className={clsx(
            "text-sm xs:text-base font-semibold -tracking-[0.16px] uppercase whitespace-nowrap",
            variant === "secondary" && "underline",
          )}
        >
          {children}
        </p>

        <ArrowRightIcon />
      </div>
    </>
  );

  // Return
  if (isLink) {
    if (external) {
      return (
        <a
          {...sharedProps}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...sharedProps} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button
      {...sharedProps}
      type={action.type ?? "button"}
      onClick={action.onClick}
    >
      {content}
    </button>
  );
};

export default CTA;
