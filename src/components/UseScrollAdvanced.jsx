"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const UseScrollAdvanced = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    targegt: targetRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <motion.div
      className="mx-auto size-48 bg-indigo-500"
      style={{ rotate }}
      ref={targetRef}
    >
      <Image
        src="/assets/img/hero-bg.avif"
        alt="hero"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};

export default UseScrollAdvanced;
