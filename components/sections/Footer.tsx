import Image from 'next/image';
import { FOOTER_ABOUT, FOOTER_CONTACT, FOOTER_SOCIALS } from '@/constants';
import BlackHole from '../sections-content/BlackHole';

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden w-full h-full  bg-transparent text-gray-200 shadow-lg shadow-lg shadow-[#2A0E61]/50  border-t border-[#2A0E61]">
      <div className="bg-[#03001417] backdrop-blur-3xl pt-8">
        <div className="w-full h-full flex gap-16 items-start justify-around flex-wrap">
          <ul className="h-auto min-w-40 flex flex-col justify-start gap-4">
            <div className="font-bold text-base mb-4">Contact</div>
            {FOOTER_CONTACT.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  className="flex gap-2 items-center cursor-pointer hover:scale-125 hover:translate-x-4 transition-transform"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="h-auto min-w-40 flex flex-col justify-start gap-4">
            <div className="font-bold text-base mb-4">Social Media</div>
            {FOOTER_SOCIALS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  className="flex gap-2 items-center cursor-pointer hover:scale-125 hover:translate-x-4 transition-transform"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="h-auto min-w-40 flex flex-col gap-4">
            <div className="font-bold text-base mb-4">About</div>
            {FOOTER_ABOUT.map((item) => (
              <li key={item.title}>
                <a
                  href={item.to}
                  className="flex gap-2 items-center cursor-pointer hover:scale-125 hover:translate-x-4 transition-transform"
                >
                  <span className="text-sm">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-8 text-base text-center">
          &copy; {getYear} Inc. All rights reserved
        </div>
      </div>

      <BlackHole insert="footer" />
    </footer>
  );
};

export default Footer;
