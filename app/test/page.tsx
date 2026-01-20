"use client";

import { useRef } from "react";

// Imports
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useViewModel,
  useViewModelInstance,
  useViewModelInstanceBoolean,
} from "@rive-app/react-canvas";

const Test = () => {
  // Hooks
  const { rive, RiveComponent } = useRive({
    // src: "/rive/test.riv",
    src: "/rive/honeycoin.riv",
    artboard: "Bento 3",
    stateMachines: "State Machine 1",
    autoplay: false,
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

  return (
    <div className="w-full h-screen custom-flex-center gap-10">
      <div
        ref={riveCanvasRef}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        className="h-full max-w-[80vw] max-h-[80vh] aspect-[0.7] bg-black/10 rounded-lg overflow-hidden"
      >
        <RiveComponent />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5">
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
