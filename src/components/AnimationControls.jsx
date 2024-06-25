"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const flipControls = useAnimationControls();

  const handleClick = () => {
    flipControls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button className="example-button" onClick={handleClick}>
        Flip it
      </button>
      <motion.div
        className="h-[150px] w-[150px] bg-black"
        variants={{
          initial: { rotate: "0deg" },
          flip: { rotate: "360deg" },
          flip: { rotate: "180deg" },
        }}
        initial="initial"
        animate={flipControls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
