"use client";

import React, { useEffect, useRef } from "react";

// Types
import type { ExploreData } from "./explore/types";

// Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExploreCard } from "./explore/components";

import {
  Fit,
  Layout,
  useRive,
  Alignment,
  useViewModel,
  useViewModelInstance,
  useViewModelInstanceBoolean,
} from "@rive-app/react-canvas";

const CardControl: React.FC<ExploreData> = (data) => {
  // Hooks
  const { rive, RiveComponent } = useRive({
    src: "/rive/honeycoin.riv",
    artboard: data.artboard,
    stateMachines: "State Machine 1",
    autoplay: false,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.BottomCenter,
    }),
  });

  const viewModel = useViewModel(rive, { name: "View Model 1" });
  const vmi = useViewModelInstance(viewModel, { rive });
  const vmib = useViewModelInstanceBoolean("isHovered", vmi);

  // Refs
  const cardRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      if (!rive) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      tl.to(cardRef.current, { autoAlpha: 1 })
        .to("[data-explore-card-content]", { autoAlpha: 1 })
        .call(() => {
          console.log("Playing artboard ", data.artboard);
          rive?.play();
        });
    },
    {
      scope: cardRef,
      dependencies: [rive],
    },
  );

  // Effects
  useEffect(() => {
    if (!rive || !vmib) return;

    const handleMouseEnter = () => {
      vmib.setValue(true);
    };
    const handleMouseLeave = () => {
      vmib.setValue(false);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [rive, vmib]);

  return (
    <ExploreCard ref={cardRef} {...data}>
      <RiveComponent />
    </ExploreCard>
  );
};

export default CardControl;
