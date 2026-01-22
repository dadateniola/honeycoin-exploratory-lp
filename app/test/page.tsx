"use client";

import { useRef } from "react";
import { useSearchParams } from "next/navigation";

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

import { EXPLORE_DATA } from "@/components/explore/data";
import { API_DOCS_DATA } from "@/components/api-docs/data";
import { FEATURES_DATA } from "@/components/features/data";

const Test = () => {
  // Variables
  const artboards = [EXPLORE_DATA, FEATURES_DATA, API_DOCS_DATA].flatMap(
    (section) => section.map((item) => item.artboard),
  );
  // Hooks
  const searchParams = useSearchParams();
  const selectedArtboard = searchParams.get("artboard") || artboards[0];

  const { rive, RiveComponent } = useRive({
    src: "/rive/honeycoin.riv",
    artboard: selectedArtboard,
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.BottomCenter,
    }),
  });

  const viewModel = useViewModel(rive, { name: "View Model 1" });
  const vmi = useViewModelInstance(viewModel, { rive });
  const { value, setValue } = useViewModelInstanceBoolean("isHovered", vmi);

  // Refs
  const riveCanvasRef = useRef<HTMLDivElement>(null);

  // Functions
  const changeArtboard = (artboard: string) => {
    window.location.href = `/test?artboard=${encodeURIComponent(artboard)}`;
  };

  return (
    <div className="w-full h-screen custom-flex-center gap-10">
      <div
        ref={riveCanvasRef}
        className="h-full max-w-[80vw] max-h-[80vh] aspect-square bg-black/10 rounded-lg overflow-hidden"
      >
        <RiveComponent />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5">
        <select
          value={selectedArtboard}
          onChange={(e) => changeArtboard(e.target.value)}
          className="text-black"
        >
          <option value="Hero">Hero</option>
          {artboards.map((artboard) => (
            <option key={artboard} value={artboard}>
              {artboard}
            </option>
          ))}
          <option value="Footer">Footer</option>
        </select>

        <button
          onClick={() => {
            rive?.play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            rive?.pause();
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setValue(!value);
          }}
        >
          {value ? "Set isHovered: false" : "Set isHovered: true"}
        </button>
      </div>
    </div>
  );
};

export default Test;
