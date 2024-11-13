"use client";

import { motion, type Variants } from "framer-motion";

export function AnimationExample({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const motionVariants: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "tween" } },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={motionVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionChild() {
  const container: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="grid grid-cols-2 gap-5"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="w-10 h-10 bg-red-500"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="w-10 h-10 bg-red-500"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="w-10 h-10 bg-red-500"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="w-10 h-10 bg-red-500"
      ></motion.div>
    </motion.div>
  );
}
