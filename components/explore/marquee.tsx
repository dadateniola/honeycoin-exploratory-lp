"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Imports
import clsx from "clsx";
import { debounce } from "@/utils/debounce";
import { MARQUEE_LOGO_CLASS } from "./data";
import { BRAND_LOGOS, BRAND_LOGOS_MAP } from "../global/data";

// Constants
const GAP = 24;
const ITEM_WIDTH = 100;
const BRAND_LOGOS_COUNT = BRAND_LOGOS.length;

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
        BRAND_LOGOS_COUNT
      );
      setItemsInView(itemsInView);
    }, 200);

    const observer = new ResizeObserver(handleResize);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-marquee
      className={clsx(
        "size-full overflow-hidden",
        "opacity-0 invisible" // Initial State
      )}
    >
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
              const brand = BRAND_LOGOS[idx % BRAND_LOGOS_COUNT];
              const Logo = BRAND_LOGOS_MAP[brand];

              return (
                <div
                  key={idx}
                  className="custom-flex-center"
                  style={{ width: ITEM_WIDTH }}
                >
                  {<Logo className={MARQUEE_LOGO_CLASS[brand]} />}
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
