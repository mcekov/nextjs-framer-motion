"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-content-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        Parallax
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/img/parallax/image-full.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url('/assets/img/parallax/image-bottom.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
    </div>
  );
};

export default MultiLayerParallax;
