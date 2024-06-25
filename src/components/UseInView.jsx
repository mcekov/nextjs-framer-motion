"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const UseInView = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      console.log("In view");
    } else {
      console.log("Out of view");
    }
  }, [isInView]);

  return (
    <div
      className="relative mx-auto grid h-32 w-96 place-content-center"
      ref={ref}
    >
      <h1 className="relative z-0 text-3xl font-black uppercase">
        Show me on scroll
      </h1>
      <motion.div
        className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
        animate={{ y: isInView ? "-100%" : "0%" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
        animate={{ y: isInView ? "100%" : "0%" }}
      />
      <motion.div
        className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
        animate={{ y: isInView ? "-100%" : "0%" }}
      />
    </div>
  );
};

export default UseInView;
