"use client";

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Start
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="h-[150px] w-[150px] bg-black"
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BasicOfMotion;
