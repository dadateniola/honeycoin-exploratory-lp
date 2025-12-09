"use client";

import { useEffect, useMemo, useRef } from "react";

// Types
import type { WarpBGItem, WarpBGProps } from "./types";

// Imports
import gsap from "gsap";
import clsx from "clsx";
import { createWarpNode, shuffleArray } from "./data";

// Constants
const SIDE_POSITIONS = [
  // Arranges in clockwise order: TOP, RIGHT, BOTTOM, LEFT
  "top-0 w-[100cqi] origin-top", // TOP
  "top-0 right-0 w-[100cqh] -rotate-90 origin-top-right", // RIGHT
  "top-full w-[100cqi] origin-top", // BOTTOM
  "top-0 left-0 w-[100cqh] rotate-90 origin-top-left", // LEFT
];
const ITEMS_PER_SIDE = 10;
const MAX_CONCURRENT_ANIMATIONS = 20;

const WarpBG: React.FC<WarpBGProps> = ({ startAnimation = true }) => {
  // Refs
  const isMountedRef = useRef(true);
  const availableItemsRef = useRef<WarpBGItem[]>([]);
  const activeIdsRef = useRef<Set<string>>(new Set());
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);
  const sideContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Memos
  const allItems = useMemo(() => {
    return SIDE_POSITIONS.flatMap((_, sideIndex) =>
      Array.from({ length: ITEMS_PER_SIDE }).map(
        (_, itemIndex) =>
          ({
            id: `side-${sideIndex}-item-${itemIndex}`,
            side: sideIndex,
            className: "absolute top-0 h-full",
            style: {
              width: `${100 / ITEMS_PER_SIDE}%`,
              left: `${(itemIndex * 100) / ITEMS_PER_SIDE}%`,
              background: "linear-gradient(#006F87, transparent)",
            },
          } as WarpBGItem)
      )
    );
  }, []);

  // Functions
  const scheduleAnimation = () => {
    // Refill available pool if empty (excluding currently active ids)
    if (availableItemsRef.current.length === 0) {
      const refill = allItems.filter((it) => !activeIdsRef.current.has(it.id));
      availableItemsRef.current = shuffleArray(refill);
      if (availableItemsRef.current.length === 0) return;
    }

    const item = availableItemsRef.current.shift()!;
    activeIdsRef.current.add(item.id);

    const sideEl = sideContainersRef.current[item.side];
    if (!sideEl) {
      // If the DOM container isn't mounted, return the item to the pool
      activeIdsRef.current.delete(item.id);
      availableItemsRef.current.push(item);
      return;
    }

    const node = createWarpNode(item);

    gsap.set(node, { autoAlpha: 0, yPercent: 100 });

    sideEl.appendChild(node);

    const duration = gsap.utils.random(3, 5);
    const delay = gsap.utils.random(0, 1);

    const tl = gsap.timeline({
      onComplete: () => {
        node.remove();
        activeIdsRef.current.delete(item.id);
        availableItemsRef.current.push(item);
        timelinesRef.current = timelinesRef.current.filter((t) => t !== tl);
        if (isMountedRef.current) scheduleAnimation();
      },
    });

    timelinesRef.current.push(tl);

    tl.to(node, {
      autoAlpha: 1,
      yPercent: -100,
      duration,
      delay,
    });
  };

  // Animations
  useEffect(() => {
    if (!startAnimation) return;

    isMountedRef.current = true;

    // Initialize available pool as a shuffled copy of the master item list
    availableItemsRef.current = shuffleArray(allItems);

    // Start the initial batch of concurrent animations
    for (let i = 0; i < MAX_CONCURRENT_ANIMATIONS; i++) scheduleAnimation();

    // Capture current refs to avoid closure issues in cleanup
    const timelinesCopy = timelinesRef.current.slice();
    const sideContainersCopy = sideContainersRef.current.slice();

    return () => {
      isMountedRef.current = false;
      // Kill timelines that were active at time of cleanup
      timelinesCopy.forEach((t) => void t.kill());

      // Remove any DOM children left inside each side container
      sideContainersCopy.forEach((el) => {
        if (!el) return;
        while (el.firstChild) el.removeChild(el.firstChild);
      });

      // Reset the refs to empty states
      timelinesRef.current = [];
      availableItemsRef.current = [];
      activeIdsRef.current = new Set();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation]);

  return (
    <div
      style={{ containerType: "size" }}
      className="relative size-full perspective-[150px] transform-3d pointer-events-none"
    >
      {SIDE_POSITIONS.map((side, sideIndex) => (
        <div
          key={`side-${sideIndex}`}
          ref={(el) => void (sideContainersRef.current[sideIndex] = el)}
          className={clsx(
            "absolute h-[100cqmax] -rotate-x-90 pointer-events-none",
            side
          )}
        ></div>
      ))}
    </div>
  );
};

export default WarpBG;
