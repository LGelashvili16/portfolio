'use client';
import { slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <div className="flex relative items-center justify-center min-h-screen w-full">
      <div className="absolute top-0 z-[5]">
        <motion.p
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Security
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '}
            &{' '}
          </span>
          Performance
        </motion.p>
      </div>

      <div className="absolute flex flex-col items-center justify-center translate-y-[-50px] z-[20]">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-[10]"
          />
        </div>

        <div className="welcome-box my-[20px] px-[15px] py-[10px] z-[20] border border-[#7042f88b] opacity-[0.9]">
          <h2 className="welcome-text text-[12px]">Encryption</h2>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <p className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </p>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full -z-10"
          src="/encryption.webm"
        ></video>
      </div>
    </div>
  );
};

export default Encryption;
