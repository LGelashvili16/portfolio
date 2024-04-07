'use client';

import { Socials } from '@/constants';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import GsapMagnetic from '../sections-content/GsapMagnetic';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const MotionLink = motion(Link);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    {
      path: '/#about-me',
      name: 'About me',
    },
    {
      path: '/#skills',
      name: 'Skills',
    },
    {
      path: '/#projects',
      name: 'Projects',
    },
  ];

  const navLinkStyles =
    'text-xs md:text-base px-4 py-0.5 cursor-pointer transition-all hover:bg-[#6e39ff69] hover:rounded-2xl hover:text-white hover:scale-90';

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={!hidden ? 'visible' : 'hidden'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"
    >
      <div className="w-11/12 h-full flex items-center justify-between  m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-full w-auto flex items-center gap-4"
        >
          <Image
            src="/NavLogo.svg"
            alt="logo"
            width={70}
            height={70}
            className="h-11 w-auto cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold hidden md:block text-gray-300">
            LGelashvili
          </span>
        </Link>

        <div className=" h-full flex md:gap-10">
          <nav>
            <motion.ul className="flex items-center gap-8 h-full">
              {links.map((link) => {
                return (
                  <GsapMagnetic key={link.path}>
                    <div>
                      <MotionLink
                        href={link.path}
                        className="inline-block font-medium px-4 py-2 rounded-lg transition-bg duration-200 hover:bg-[#7042f861]"
                      >
                        {link.name}
                      </MotionLink>
                    </div>
                  </GsapMagnetic>
                );
              })}
            </motion.ul>
          </nav>

          <div className="flex items-center gap-5">
            {Socials.map((social) => (
              <a href={social.link} key={social.name} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={25}
                  height={25}
                  className="hover:shadow-rose-500"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
