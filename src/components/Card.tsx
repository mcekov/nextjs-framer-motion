"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Arrow from "../../public/arrow.svg";

type Props = {
  item: { imgSrc: string; alt: string; id: string };
};

const Card = ({ item }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay ? (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white text-slate-900 font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore now</span>
              <Arrow className="w-4 h-4" />
            </motion.h1>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Image
        sizes="100%"
        src={item.imgSrc}
        alt={item.alt}
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
};

export default Card;
