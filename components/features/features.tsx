"use client";

import { useRef } from "react";

// Imports
import gsap from "gsap";
import CTA from "../cta/cta";
import { useGSAP } from "@gsap/react";
import { FEATURES_DATA } from "./data";
import { CONTENT_CLASS } from "../global/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../global/components";
import RiveCardController from "../rive-card-controller/rive-card-controller";

const Features = () => {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stickyBGRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const header = headerRef.current;
      const stickyBG = stickyBGRef.current;
      const apiDocsSection = document.getElementById("api-docs");

      const enterTL = gsap.timeline();
      enterTL
        .set(header, { autoAlpha: 0, scale: 0.8 })
        .to(header, { autoAlpha: 1, scale: 1 });

      const exitTL = gsap.timeline();
      exitTL
        .set(apiDocsSection, { autoAlpha: 0 })
        .to(stickyBG, { backgroundColor: "#8066cc" })
        .to(apiDocsSection, { autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        animation: enterTL,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        animation: exitTL,
        scrub: true,
      });
    },
    {
      scope: sectionRef,
      dependencies: [],
    },
  );

  return (
    <>
      <div className="sticky top-0 w-full h-0">
        <div
          ref={stickyBGRef}
          className="absolute top-0 left-0 right-0 w-full h-screen bg-primary"
        ></div>
      </div>

      <section id="features" ref={sectionRef}>
        <div className={CONTENT_CLASS}>
          <div className="flex justify-center">
            <div
              ref={headerRef}
              className="w-full max-w-[720px] custom-flex-col gap-4"
            >
              <SectionHeading title="Everything your business needs, in one platform" />

              <div className="flex justify-center">
                <CTA action={{ href: "" }}>See All Features</CTA>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[1020px] custom-flex-col gap-10">
              {FEATURES_DATA.map((feature, index) => (
                <RiveCardController
                  key={index}
                  type="features"
                  data={feature}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-screen"></div>
      </section>
    </>
  );
};

export default Features;
