"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div
        style={{
          height: "150vh",
        }}
      />

      <motion.div
        className="h-[100vh] bg-orange-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div
        ref={ref}
        className="h-[100vh]"
        style={{
          transition: "3s background",
          background: isInView ? "teal" : "black",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
