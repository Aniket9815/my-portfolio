"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useScroll, motion, useTransform } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function ScrollProgress() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  // Find the server-rendered element by ID
  useEffect(() => {
    const element = document.getElementById("scroll-target");
    setTargetElement(element);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetElement ? { current: targetElement } : undefined, // Pass element as the target
  });
  // Use `useTransform` to map `scrollYProgress` to `strokeDashoffset`
  const circumference = 125.6; // 2 * PI * radius (20)
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );
  // Monitor scrollYProgress and update visibility
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      setIsVisible(progress > 0 && progress < 1); // Visible if progress is between 0 and 1
    });

    return () => unsubscribe(); // Cleanup listener
  }, [scrollYProgress]);
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      onClick={() => router.back()}
      className="fixed bottom-14 bg-white flex items-center justify-center rounded-full z-30"
    >
      <IoClose className="absolute" />
      <svg
        width="50" // Increased the width and height
        height="50"
        viewBox="0 0 50 50"
        className="rotate-[-90deg]"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#D9D9D9"
          strokeWidth="6"
          fill="none"
        />
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          stroke="#000000" // Change to preferred color
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
    </motion.button>
  );
}
