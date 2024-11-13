"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import React from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Use `useTransform` to map `scrollYProgress` to `strokeDashoffset`
  const circumference = 125.6; // 2 * PI * radius (20)
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );
  return (
    <div className="fixed bottom-14 right-[50%] translate-x-[-50%] z-30">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="rotate-[-90deg]"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="lightgray"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          stroke="blue" // Change to preferred color
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
}
