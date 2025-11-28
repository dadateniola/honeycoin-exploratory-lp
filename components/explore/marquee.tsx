"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Imports
import { MARQUEE_LOGOS } from "./data";
import { debounce } from "@/utils/debounce";

// Constants
const GAP = 24;
const ITEM_WIDTH = 100;

const Marquee = () => {
  // States
  const [itemsInView, setItemsInView] = useState(0);

  // Refs
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Memos
  const duration = useMemo(() => {
    // Calculate duration based on number of items in view
    return (itemsInView * (ITEM_WIDTH + GAP)) / 30;
  }, [itemsInView]);

  // Effects
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleResize = debounce(([entry]: ResizeObserverEntry[]) => {
      const { width } = entry.contentRect;
      const itemsInView = Math.max(
        Math.ceil(width / (ITEM_WIDTH + GAP)),
        MARQUEE_LOGOS.length
      );
      setItemsInView(itemsInView);
    }, 200);

    const observer = new ResizeObserver(handleResize);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="size-full overflow-hidden">
      <div
        className="w-max h-full flex"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center"
            style={{ gap: GAP, paddingLeft: GAP }}
          >
            {Array.from({ length: itemsInView }).map((_, idx) => {
              const Logo = MARQUEE_LOGOS[idx % MARQUEE_LOGOS.length];

              return (
                <div
                  key={idx}
                  className="custom-flex-center"
                  style={{ width: ITEM_WIDTH }}
                >
                  {<Logo />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
