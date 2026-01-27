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
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  // Hooks
  const { rive, RiveComponent } = useRive({
    src: "/rive/honeycoin.riv",
    artboard: "Footer",
    stateMachines: "State Machine 1",
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.BottomCenter,
    }),
  });

  // States
  const [startWarpAnimation, setStartWarpAnimation] = useState(false);

  // Refs
  const contentRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      if (!rive) return;

      gsap.registerPlugin(ScrollTrigger);

      const footerRef = ref as React.RefObject<HTMLElement>;
      if (!footerRef.current) return;

      const content = contentRef.current;

      const enterTL = gsap.timeline();

      enterTL
        .set(content, { autoAlpha: 0, scale: 0.9 })
        .to(content, { autoAlpha: 1, scale: 1, duration: 1 })
        .call(() => {
          setStartWarpAnimation(true);
          rive.play();
        });

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top center",
        animation: enterTL,
      });
    },
    {
      dependencies: [rive],
    },
  );

  return (
    <section id="footer" ref={ref}>
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <WarpBG startAnimation={startWarpAnimation} />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <RiveComponent />
        </div>

        <div className="relative min-h-[1000px] p-6 md:p-10 custom-flex-col">
          <div className="flex-1 min-h-0 custom-flex-col justify-between gap-20">
            <div className="custom-flex-col gap-20">
              <div></div>
              <div
                ref={contentRef}
                className={clsx(
                  "flex flex-col xl:flex-row gap-10",
                  "opacity-0 invisible", // Initial state
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
                    <CTA action={{ href: "" }}>PROJECT DETAILS</CTA>
                  </div>
                </div>

                {/* Links */}
                <div className="flex-1 min-w-0 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-3">
                  {FOOTER_DATA.map((data, index) => (
                    <FooterCard key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "flex justify-between gap-10",
                "font-medium -tracking-[0.16px] leading-[135%]",
              )}
            >
              <p>© Rvysion. 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Footer.displayName = "Footer";

export default Footer;
