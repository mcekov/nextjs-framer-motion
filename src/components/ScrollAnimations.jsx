"use client";

import { useScroll, useSpring } from "framer-motion";
import React from "react";

import { motion } from "framer-motion";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 900, damping: 20 });

  return (
    <div>
      <motion.div
        className="bg-rose-500 w-full h-1 sticky top-0 origin-left"
        style={{ scaleX: scaleX }}
      />
      <div className="max-w-[700px] m-auto p-7">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          voluptates, perferendis sunt autem, sequi accusantium hic, blanditiis
          consequuntur aperiam iste in ut sapiente consequatur modi error fugiat
          enim repellendus vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati ducimus repellat assumenda hic aut ipsa,
          distinctio perferendis excepturi culpa doloribus harum quod odit,
          tenetur temporibus neque mollitia consequatur inventore. Iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem
          incidunt repellat ut reiciendis quaerat assumenda est doloremque at
          culpa facilis laudantium ullam, quam accusamus, iusto voluptate sit.
          Reiciendis, mollitia.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
