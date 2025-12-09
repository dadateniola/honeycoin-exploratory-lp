"use client";

import { forwardRef, useRef, useState } from "react";

// Images
import { RvysionLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import CTA from "../cta/cta";
import WarpBG from "./warp-bg";
import { FOOTER_DATA } from "./data";
import { useGSAP } from "@gsap/react";
import { FooterCard } from "./components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION_HEADING_CLASS } from "../global/data";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  // States
  const [startWarpAnimation, setStartWarpAnimation] = useState(false);

  // Refs
  const contentRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footerRef = ref as React.RefObject<HTMLElement>;
    if (!footerRef.current) return;

    const content = contentRef.current;

    const enterTL = gsap.timeline();

    enterTL
      .set(content, { autoAlpha: 0, scale: 0.9 })
      .to(content, { autoAlpha: 1, scale: 1, duration: 1 })
      .call(() => setStartWarpAnimation(true));

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top center",
      animation: enterTL,
    });
  }, []);

  return (
    <section id="footer" ref={ref}>
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <WarpBG startAnimation={startWarpAnimation} />
        </div>

        <div className="relative h-[1300px] p-10">
          <div className="size-full custom-flex-col justify-between gap-20">
            <div className="custom-flex-col gap-20">
              <div></div>
              <div
                ref={contentRef}
                className={clsx(
                  "flex gap-10",
                  "opacity-0 invisible" // Initial state
                )}
              >
                {/* Content */}
                <div className="flex-1 min-w-0 custom-flex-col gap-6">
                  <div className="custom-flex-col gap-4">
                    <div className="flex">
                      <RvysionLogo />
                    </div>
                    <h3 className={SECTION_HEADING_CLASS}>
                      Everything works better when money flows.
                    </h3>
                  </div>

                  <p className="-tracking-[0.16px] leading-[135%]">
                    We help you make that flow simple, stable, and beautifully
                    obvious.
                  </p>

                  <div className="flex">
                    <CTA href="" color="#134E64">
                      PROJECT DETAILS
                    </CTA>
                  </div>
                </div>

                {/* Links */}
                <div className="flex-1 min-w-0 grid grid-cols-2 gap-3">
                  {FOOTER_DATA.map((data, index) => (
                    <FooterCard key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "flex justify-between gap-10",
                "font-medium -tracking-[0.16px] leading-[135%]"
              )}
            >
              <p>© Rvysion. 2025. All rights reserved.</p>
              <p>Privacy Policy • Terms of Service • Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Footer.displayName = "Footer";

export default Footer;
