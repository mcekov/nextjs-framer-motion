"use client";

import React from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const UseScrollBasic = () => {
  const { scrollYProgress } = useScroll();

  useMotionValue(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const bg = useTransform(scrollYProgress, [0, 1], ["#ff008c", "#7928ca"]);

  return (
    <motion.div
      className="fixed left-1/2 top-1/2 h-screen w-screen bg-green-500 origin-left"
      style={{
        scaleX: scrollYProgress,
        x: "-50%",
        y: "-50%",
        background: bg,
      }}
    />
  );
};

export default UseScrollBasic;
