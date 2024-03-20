'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type Props = {
  src: string;
  width: number;
  height: number;
  index: number;
};

const SkillData = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
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
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * animationDelay }}
      custom={index}
    >
      <Image src={src} alt="skill image" width={width} height={height} />
    </motion.div>
  );
};

export default SkillData;
