"use client";

import { useRef } from "react";

// Images
import { ShootingStarIcon } from "../svg/svg";

// Imports
import gsap from "gsap";
import clsx from "clsx";
import CTA from "../cta/cta";
import AltCTA from "../cta/alt-cta";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../global/components";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const Hero = () => {
  // Hooks
  const { rive, RiveComponent } = useRive({
    src: "/rive/honeycoin.riv",
    artboard: "Hero",
    stateMachines: "State Machine 1",
    autoplay: false,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.BottomCenter,
    }),
  });

  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      if (!rive) return;

      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const wrapper = wrapperRef.current;
      const header = headerRef.current;
      const exploreSection = document.getElementById("explore");

      const revealTL = gsap.timeline();

      revealTL
        .set(header, { autoAlpha: 0, yPercent: 20 })
        .to(wrapper, { backgroundColor: "#8066cc", delay: 0.5 })
        .to(
          header,
          {
            autoAlpha: 1,
            yPercent: 0,
          },
          "<",
        )
        .call(() => rive.play());

      const scrollTL = gsap.timeline();

      scrollTL
        .set(exploreSection, { autoAlpha: 0 })
        .to(
          "[data-hero-bg-left]",
          { clipPath: "ellipse(0% 100% at 0% 100%)" },
          0,
        )
        .to(
          "[data-hero-bg-right]",
          { clipPath: "ellipse(0% 100% at 100% 100%)" },
          0,
        )
        .to(exploreSection, { autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        animation: scrollTL,
        scrub: true,
      });
    },
    {
      dependencies: [rive],
    },
  );

  return (
    <section id="hero" ref={sectionRef}>
      <div
        ref={wrapperRef}
        className="relative w-full h-[max(100vh,1000px)] bg-primary"
      >
        {/* Background */}
        <div className="fixed inset-0 overflow-hidden">
          <div
            data-hero-bg-left
            className="absolute top-1/2 left-0 -translate-y-1/2 w-full lg:w-1/2 h-[110%] bg-primary"
            style={{ clipPath: "ellipse(80% 100% at 0% 100%)" }}
          ></div>
          <div
            data-hero-bg-right
            className={clsx(
              "absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[105%] bg-primary",
              "max-lg:hidden",
            )}
            style={{ clipPath: "ellipse(80% 100% at 100% 100%)" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative size-full pt-[calc(50px+var(--spacing-navbar-height))] lg:pt-navbar-height flex justify-center">
          <div className="absolute bottom-0 left-0 w-full h-screen overflow-hidden">
            <RiveComponent />
          </div>

          <div
            ref={headerRef}
            className={clsx(
              "relative w-[95%] max-w-[470px] custom-flex-col gap-5",
              "opacity-0 invisible", // Initial state
            )}
          >
            <div className="custom-flex-col gap-4 text-center">
              {/* Badge */}
              <div className="flex justify-center">
                <div className="p-1 pr-5 flex items-center gap-2 bg-white/15 rounded-full">
                  <div className="py-1.5 px-2 flex items-center gap-1 bg-foreground rounded-full">
                    <ShootingStarIcon />
                    <p className="text-background text-sm leading-0">NEW</p>
                  </div>
                  <p className="text-secondary text-sm">
                    We&apos;ve closed a 9M Funding Round
                  </p>
                </div>
              </div>

              <SectionHeading
                title="Global money, made liquid"
                subtitle="Manage, swap, and grow with deep liquidity pools, multi-currency wallets, and effortless payouts — all in one place."
              />
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-5">
              <CTA action={{ href: "" }}>GET STARTED</CTA>

              <AltCTA href="/about">ABOUT US</AltCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
