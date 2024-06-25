"use client";

import {
  animate,
  useMotionValue,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { MdOutlineArrowOutward } from "react-icons/md";

import { images } from "@/constants";
import Image from "next/image";

const page = () => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <main className="overflow-hidden">
      <motion.div
        className="flex gap-4 absolute top-96"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images, ...images].map((image) => (
          <Card key={image.id} item={image} />
        ))}
      </motion.div>
    </main>
  );
};

export default page;

const Card = ({ item }) => {
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
              {/*  <Arrow className="w-4 h-4" /> */}
              <MdOutlineArrowOutward />
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
