"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

// Types
import type { CTAProps } from "./types";

// Images
import { ArrowRightIcon } from "../svg/svg";

// Imports
import gsap from "gsap";
import clsx from "clsx";
import { isExternalLink } from "@/utils/isExternalLink";

const CTA: React.FC<CTAProps> = ({ href, color = "black", children }) => {
  // Refs
  const bgRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    const bg = bgRef.current;
    const link = linkRef.current;
    const content = contentRef.current;

    if (!bg || !link || !content) return;

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
        .to(content, { color: isEnter ? "#ffffff" : color }, "<");

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

    link.addEventListener("mouseenter", onMouseEnter);
    link.addEventListener("mouseleave", onMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", onMouseEnter);
      link.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color]);

  // Render
  const external = isExternalLink(href);
  const Anchor = external ? "a" : Link;

  return (
    <Anchor
      href={href}
      ref={linkRef}
      className="relative h-[52px] pl-5 pr-4 flex items-center rounded-lg overflow-hidden"
      style={{
        clipPath:
          "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)",
      }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-foreground origin-center scale-125 pointer-events-none">
        <div
          ref={bgRef}
          className={clsx(
            "size-full",
            "opacity-0 invisible" // Initial state
          )}
          style={{ backgroundColor: color }}
        ></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{ color }}
        className="relative flex items-center gap-3"
      >
        <p className="font-semibold -tracking-[0.16px] uppercase whitespace-nowrap">
          {children}
        </p>

        <ArrowRightIcon />
      </div>
    </Anchor>
  );
};

export default CTA;
