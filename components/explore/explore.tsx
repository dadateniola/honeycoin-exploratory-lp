"use client";

import { useRef } from "react";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import CTA from "../cta/cta";
import Marquee from "./marquee";
import { chunk } from "@/utils/chunk";
import { EXPLORE_DATA } from "./data";
import { useGSAP } from "@gsap/react";
import { ExploreCard } from "./components";
import { CONTENT_CLASS } from "../global/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../global/components";

const Explore = () => {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const header = headerRef.current;
      const exploreCards = gsap.utils.toArray("[data-explore-card]");
      const exploreCardContents = gsap.utils.toArray(
        "[data-explore-card-content]"
      );

      const tl = gsap.timeline();

      tl.to("[data-marquee]", { autoAlpha: 1 })
        .to(header, { autoAlpha: 1 })
        .to(exploreCards, { autoAlpha: 1 })
        .to(exploreCardContents, { autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        animation: tl,
      });
    },
    {
      scope: sectionRef,
      dependencies: [],
    }
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
                "opacity-0 invisible" // Initial state
              )}
            >
              <SectionHeading
                title="Move at the speed of global markets"
                subtitle="Access USD, EUR, KES, NGN, ZAR with real-time execution and competitive FX rates powered by deep liquidity pools. No delays. No hidden spreads. Just frictionless currency access."
              />

              <div className="flex justify-center">
                <CTA href="" color="#8066CC">
                  Explore FX & Liquidity
                </CTA>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[1340px] custom-flex-col gap-10">
              {dataPairs.map((pair, index) => (
                <div key={index} className="flex gap-10">
                  {pair.map((item, idx) => (
                    <ExploreCard key={idx} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TODO: Come back to this */}
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-primary overflow-hidden">
          <div
            className="absolute inset-0 bg-background"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 40px, 70% 40px, 60% 100%, 0 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
