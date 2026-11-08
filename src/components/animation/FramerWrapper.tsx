"use client";
import React from "react";
import { motion } from "framer-motion";

type FramerMotionProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  scale?: number;
};

function FramerWrapper({
  children,
  delay = 0,
  y = 8,
  x = 0,
  duration = 0.22,
  scale = 0,
  className,
}: FramerMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale: scale > 0 ? scale : 1 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FramerWrapper;