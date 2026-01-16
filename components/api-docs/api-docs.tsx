"use client";

import { useRef } from "react";

// Imports
import gsap from "gsap";
import CTA from "../cta/cta";
import { useGSAP } from "@gsap/react";
import { API_DOCS_DATA } from "./data";
import { ApiDocsCard } from "./components";
import { CONTENT_CLASS } from "../global/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../global/components";

const ApiDocs = () => {
  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const header = headerRef.current;
      const apiDocsCards = gsap.utils.toArray("[data-api-docs-card]");
      const apiDocsCardContents = gsap.utils.toArray(
        "[data-api-docs-card-content]"
      );

      const enterTL = gsap.timeline();
      enterTL
        .set(header, { autoAlpha: 0, scale: 0.8 })
        .to(header, { autoAlpha: 1, scale: 1 })
        .to(apiDocsCards, { autoAlpha: 1 })
        .to(apiDocsCardContents, { autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        animation: enterTL,
      });
    },
    {
      scope: sectionRef,
      dependencies: [],
    }
  );

  return (
    <section id="api-docs" ref={sectionRef}>
      <div className={CONTENT_CLASS}>
        <div className="flex justify-center">
          <div
            ref={headerRef}
            className="w-full max-w-[700px] custom-flex-col gap-4"
          >
            <SectionHeading
              title="Built for scale, designed for speed"
              subtitle="Seamlessly integrate HoneyCoin's financial infrastructure into your workflow with battle-tested APIs that are as fluid as honey."
            />

            <div className="flex justify-center">
              <CTA href="">
                View API Docs
              </CTA>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[1050px] flex gap-2.5">
            {API_DOCS_DATA.map((doc, index) => (
              <ApiDocsCard key={index} {...doc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;
