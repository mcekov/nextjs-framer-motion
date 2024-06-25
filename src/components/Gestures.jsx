"use client";

import React from "react";
import { MotionConfig, motion } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1, rotate: "2.5deg" }}
          className="example-button"
        >
          Click me
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1, rotate: "2.5deg" }}
          className="bg-lime-600 text-white rounded-md py-1 text-pretty text-[1.8rem]"
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
