"use client";

import React, { useEffect, useRef } from "react";

// Types
import type { RiveCardControllerProps } from "./types";

// Imports
import {
  Fit,
  Layout,
  useRive,
  Alignment,
  useViewModel,
  useViewModelInstance,
  useViewModelInstanceBoolean,
} from "@rive-app/react-canvas";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExploreCard } from "../explore/components";
import { ApiDocsCard } from "../api-docs/components";
import { FeaturesCard } from "../features/components";

const RiveCardController: React.FC<RiveCardControllerProps> = ({
  type,
  data,
}) => {
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
        .to(`[data-${type}-card-content]`, { autoAlpha: 1 })
        .call(() => rive.play());
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

  // Render
  switch (type) {
    case "explore":
      return (
        <ExploreCard ref={cardRef} {...data}>
          <RiveComponent />
        </ExploreCard>
      );
    case "features":
      return (
        <FeaturesCard ref={cardRef} {...data}>
          <RiveComponent />
        </FeaturesCard>
      );
    case "api-docs":
      return (
        <ApiDocsCard ref={cardRef} {...data}>
          <RiveComponent />
        </ApiDocsCard>
      );
    default:
      return null;
  }
};

export default RiveCardController;
