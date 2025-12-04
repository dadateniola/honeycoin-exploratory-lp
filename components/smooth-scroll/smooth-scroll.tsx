"use client";

import { useEffect, useRef } from "react";

// Imports
import gsap from "gsap";
import ReactLenis, { LenisRef } from "lenis/react";

const SmoothScroll = () => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if (!lenisRef.current?.lenis) return;
    const lenis = lenisRef.current.lenis;

    function update(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return <ReactLenis root ref={lenisRef} />;
};

export default SmoothScroll;
