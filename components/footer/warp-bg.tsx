"use client";

import { useEffect, useRef } from "react";

// Imports
import gsap from "gsap";

// Constants
const COUNT = 10;
const SIDES = [
  "absolute top-0 w-[100cqi] h-[100cqmax] gap-1 -rotate-x-90 origin-top",
  "absolute top-full w-[100cqi] h-[100cqmax] -rotate-x-90 origin-top",
  "absolute top-0 left-0 w-[100cqh] h-[100cqmax] rotate-90 -rotate-x-90 origin-top-left",
  "absolute top-0 right-0 w-[100cqh] h-[100cqmax] -rotate-90 -rotate-x-90 origin-top-right",
];

const WarpBG = () => {
  // Refs
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animations
  useEffect(() => {
    const bars = barsRef.current.filter((el) => el !== null);
    if (bars.length === 0) return;
  }, []);

  return (
    <div
      style={{ containerType: "size" }}
      className="relative size-full perspective-[150px] transform-3d"
    >
      {SIDES.map((side, sideIndex) => (
        <div key={`side-${sideIndex}`} className={side}>
          {Array.from({ length: COUNT }).map((_, index) => {
            const idx = sideIndex * COUNT + index;
            return (
              <div
                key={`item-${idx}`}
                ref={(el) => void (barsRef.current[idx] = el)}
                className="absolute top-0"
                style={{
                  left: `${(index * 100) / COUNT}%`,
                  width: `${100 / COUNT}%`,
                  height: "100%",
                  //   aspectRatio: "1/4",
                  background: "linear-gradient(#006F87, transparent)",
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WarpBG;
