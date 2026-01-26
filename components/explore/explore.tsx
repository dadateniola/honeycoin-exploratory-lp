"use client";

import { useRef } from "react";

// Images
import { ExploreCurve } from "../svg/svg";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import CTA from "../cta/cta";
import Marquee from "./marquee";
import { chunk } from "@/utils/chunk";
import { EXPLORE_DATA } from "./data";
import { useGSAP } from "@gsap/react";
import { CONTENT_CLASS } from "../global/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../global/components";
import RiveCardController from "../rive-card-controller/rive-card-controller";

const Explore = () => {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const header = headerRef.current;
      const featuresSection = document.getElementById("features");
      const overlay = overlayRef.current;

      const enterTL = gsap.timeline();
      enterTL
        .set(header, { autoAlpha: 0, scale: 0.8 })
        .to("[data-marquee]", { autoAlpha: 1 })
        .to(header, { autoAlpha: 1, scale: 1 });

      const exitTL = gsap.timeline();
      exitTL
        .set(featuresSection, { autoAlpha: 0 })
        .set(overlay, { xPercent: 100 })
        .to(overlay, { xPercent: 0 })
        .to(featuresSection, { autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        animation: enterTL,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "bottom center",
        end: `+=${window.innerHeight}`,
        animation: exitTL,
        scrub: true,
        pin: true,
      });
    },
    {
      scope: sectionRef,
      dependencies: [],
    },
  );

  // Render
  const dataPairs = chunk(EXPLORE_DATA, 2);

  return (
    <section id="explore" ref={sectionRef}>
      <div className="relative custom-flex-col bg-background">
        {/* Marquee */}
        <div className="absolute top-0 left-0 right-0 h-10 flex">
          <div className="px-3 flex items-center bg-primary">
            <p className="text-sm -tracking-[0.14px]">TRUSTED BY</p>
          </div>

          <div className="flex-1 min-w-0 bg-marquee">
            <Marquee />
          </div>
        </div>

        {/* Content */}
        <div className={CONTENT_CLASS}>
          <div className="flex justify-center">
            <div
              ref={headerRef}
              className={clsx(
                "w-full max-w-[720px] custom-flex-col gap-4",
                "opacity-0 invisible", // Initial state
              )}
            >
              <SectionHeading
                title="Move at the speed of global markets"
                subtitle="Access USD, EUR, KES, NGN, ZAR with real-time execution and competitive FX rates powered by deep liquidity pools. No delays. No hidden spreads. Just frictionless currency access."
              />

              <div className="flex justify-center">
                <CTA href="">Explore FX & Liquidity</CTA>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[1340px] custom-flex-col gap-6 xl:gap-10">
              {dataPairs.map((pair, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-6 xl:gap-10"
                >
                  {pair.map((item, idx) => (
                    <RiveCardController key={idx} type="explore" data={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-[calc(100%-100px)] left-0 right-0 h-[calc(50vh+100px)] overflow-hidden">
          <div ref={overlayRef} className="size-full custom-flex-col">
            <ExploreCurve className="w-full h-[100px] translate-y-px" />
            <div className="flex-1 min-h-0 bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
