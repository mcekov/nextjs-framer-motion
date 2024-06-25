"use client";

import React from "react";
import { motion } from "framer-motion";

const WhileInView = () => {
  return (
    <div className="relative mx-auto grid h-32 w-96 place-content-center">
      <h1 className="relative z-0 text-3xl font-black uppercase">
        Show me on scroll
      </h1>

      <motion.div
        className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ margin: "200px" }}
      />
    </div>
  );
};

export default WhileInView;
