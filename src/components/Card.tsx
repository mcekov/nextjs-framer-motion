"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Arrow from "../../public/arrow.svg";

type Props = {
  item: { imgSrc: string; alt: string; id: string };
};

const Card = ({ item }: Props) => {
  const [showOverlay, setShowOverlay] = useState(true);

  const Overlay = () => {
    return (
      <motion.div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer">
        <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
        <h1 className="bg-white text-slate-900 font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75">
          <span>Explore now</span>
          <Arrow className="w-4 h-4" />
        </h1>
      </motion.div>
    );
  };

  return (
    <div className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center">
      {showOverlay ? <Overlay /> : null}
      <Image
        sizes="100%"
        src={item.imgSrc}
        alt={item.alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Card;
