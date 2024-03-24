'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  src: string;
  width: number;
  height: number;
  index: number;
};

const SkillData = ({ src, width, height, index }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const imageVariants = {
    hidden: { x: -50, y: -70, opacity: 0, scale: 0.1 },
    visible: { x: 0, y: 0, opacity: 1, scale: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * animationDelay }}
      custom={index}
    >
      <Image src={src} alt="skill image" width={width} height={height} />
    </motion.div>
  );
};

export default SkillData;
