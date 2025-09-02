"use client";

import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ src, title, description, link }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clickHandler = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          y: 100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.2, duration: 0.7, type: "spring", bounce: 0.6 }}
      className="project-card h-min max-w-lg "
    >
      <div className="absolute inset-0 left-0 rounded-lg bg-black"></div>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={165}
        className="relative w-full h-[175px] rounded-tl-lg rounded-tr-lg"
      />
      <div className="relative p-4 transition-all duration-500">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="cutoff-text mt-2 text-gray-300 transition-all duration-500">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <input className="expand-btn" type="checkbox" />
          <button
            onClick={clickHandler}
            className="py-1 px-2 mt-4 h-full border rounded-md border-indigo-700 hover:bg-indigo-700"
          >
            Open Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
