'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import GlowingButton from '../ui/GlowingButton';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center px-20 mt-10 w-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-start m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[10px] px-[15px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">This is my Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              Lado
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-2xl text-gray-300 my-1 max-w-[300px]"
        >
          I develop user interfaces and web applications.
        </motion.p>
        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 my-5 max-w-[500px]"
        >
          I&apos;m keen on mastering the skills required for full-stack web
          development. Check out my projects and skills.
        </motion.p>

        <GlowingButton />
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-end items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={550}
          width={550}
          className="drag-none mt-10"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
