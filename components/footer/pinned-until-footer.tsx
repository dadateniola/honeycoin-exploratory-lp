"use client";

import { useRef } from "react";

// Types
import type { PinnedUntilFooterProps } from "./types";

// Imports
import gsap from "gsap";
import Footer from "./footer";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PinnedUntilFooter: React.FC<PinnedUntilFooterProps> = ({ children }) => {
  // Refs
  const footerRef = useRef<HTMLElement>(null);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: pinnedSectionRef.current,
      start: "bottom bottom",
      endTrigger: footerRef.current,
      end: "top top",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <>
      <div ref={pinnedSectionRef}>{children}</div>
      <Footer ref={footerRef} />
    </>
  );
};

export default PinnedUntilFooter;
