"use client";
import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css";

// Feeling enum alternative for JavaScript
const Feeling = {
  Sad: 1,
  Neutral: 2,
  Happy: 3,
};

const feelingColorMap = {
  [Feeling.Sad]: ["#394e7a", "#8e9ac7", "#4ee"],
  [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
  [Feeling.Happy]: ["#39f", "#f4e54d", "#fa3"],
};

const feelingLabelMap = {
  [Feeling.Sad]: "Could be better",
  [Feeling.Neutral]: "Okay",
  [Feeling.Happy]: "Happy",
};

function GradientBackground() {
  const wrapperRef = useRef(null); // Ref for the wrapper div
  const [feeling, setFeeling] = useState(Feeling.Neutral); // Initial feeling state

  useEffect(() => {
    if (!wrapperRef.current) return;

    const [a, b, c] = feelingColorMap[feeling];

    // Apply the new background directly using the colors from the color map
    wrapperRef.current.style.backgroundImage = `linear-gradient(to bottom right, ${a}, ${b}, ${c})`;
  }, [feeling]);

  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center">
      <div
        ref={wrapperRef}
        className="relative mx-auto aspect-[9/16] w-[360px] max-w-full overflow-hidden rounded-2xl p-8 text-white duration-500 ease-in"
      >
        <div className="relative z-10">
          <h1 className="mb-12 text-5xl font-medium leading-tight">
            How are you feeling today?
          </h1>

          <h2 className="mb-4 text-center text-2xl font-medium">
            {feelingLabelMap[feeling]}
          </h2>

          <input
            className="range"
            onChange={(ev) => setFeeling(Number(ev.target.value))}
            type="range"
            min={1}
            value={feeling}
            max={3}
            step={1}
          />
        </div>
      </div>
    </main>
  );
}

export default GradientBackground;
