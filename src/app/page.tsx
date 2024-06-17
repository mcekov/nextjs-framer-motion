"use client";

import Card from "@/components/Card";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function Home() {
  const images = [
    {
      id: "qwe12341234123",
      imgSrc: "/img/image-1.jpg",
      alt: "Image 1",
    },
    {
      id: "qwe134454553423",
      imgSrc: "/img/image-2.jpg",
      alt: "Image 2",
    },
    {
      id: "qwe123345345345789123",
      imgSrc: "/img/image-3.jpg",
      alt: "Image 3",
    },
    {
      id: "qwe12334rwer5345345789123",
      imgSrc: "/img/image-4.jpg",
      alt: "Image 4",
    },
    {
      id: "qwe12334534534345345tdfgd5789123",
      imgSrc: "/img/image-5.jpg",
      alt: "Image 5",
    },
    {
      id: "qwe123345345345789345123",
      imgSrc: "/img/image-6.jpg",
      alt: "Image 6",
    },
    {
      id: "qwe12334rwer5345345787545679123",
      imgSrc: "/img/image-7.jpg",
      alt: "Image 7",
    },
    {
      id: "qwe12334534534345345tdfgd57896643677123",
      imgSrc: "/img/image-8.jpg",
      alt: "Image 8",
    },
  ];

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
    <main className="py-8 ">
      <motion.div
        className="flex gap-4 absolute left-0 "
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
        {[...images, ...images].map((image) => (
          <Card key={image.id} item={image} />
        ))}
      </motion.div>
    </main>
  );
}
