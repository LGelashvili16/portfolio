import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const navLinkStyles =
    'text-xs md:text-base px-4 py-0.5 cursor-pointer transition-all hover:bg-[#6e39ff69] hover:rounded-2xl hover:text-white hover:scale-90';

  return (
    <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between  m-auto px-[10px]">
        <a href="#about-me" className="h-full w-auto flex items-center gap-4">
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
        </a>

        <div className="flex md:gap-10">
          {/* <div className="h-full flex items-center justify-between mr-20 md:mr-0  justify-self-start"> */}
          <div className="max-h-12 flex items-center gap-5 border border-[#7042f861] bg-[#0300145e] mr-[15px] md:mr-0 px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className={navLinkStyles}>
              About me
            </a>
            <a href="#skills" className={navLinkStyles}>
              Skills
            </a>
            <a href="#projects" className={navLinkStyles}>
              Projects
            </a>
          </div>
          {/* </div> */}

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
    </header>
  );
};

export default Navbar;
