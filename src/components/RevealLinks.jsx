"use client";

import React from "react";
import { motion } from "framer-motion";

const DURRATION = 0.25;
const STAGGER = 0.025;

const RevealLinks = () => {
  return (
    <section className="grid place-content-center h-screen bg-green-300 px-8 text-zinc-800 gap-2">
      <FlipLink href="#">home</FlipLink>
      <FlipLink href="#">blog</FlipLink>
      <FlipLink href="#">contacts</FlipLink>
      <FlipLink href="#">about</FlipLink>
      <FlipLink href="#">services</FlipLink>
    </section>
  );
};

export default RevealLinks;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURRATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block text-blue-500"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURRATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};
