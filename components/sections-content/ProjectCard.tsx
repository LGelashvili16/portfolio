'use client';

import Image from 'next/image';

type Props = {
  src: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ src, title, description, link }: Props) => {
  const clickHandler = () => {
    window.open(link, '_blank');
  };

  return (
    <div onClick={clickHandler} className="project-card">
      {/* <div className="absolute inset-0 bg-[#3b2f7493] backdrop-blur-sm z-[-10]"></div> */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain rounded-tl-lg rounded-tr-lg"
      />
      <div className="relative p-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
    // <div
    //   onClick={clickHandler}
    //   className="relative overflow-hidden rounded-lg shadow-2xl border border-[#2A0E61] hover:scale-110 transition-transform cursor-pointer "
    // >
    //   <div className="absolute inset-0 bg-[#3b2f7493] backdrop-blur-sm z-[-10]"></div>
    //   <Image
    //     src={src}
    //     alt={title}
    //     width={1000}
    //     height={1000}
    //     className="w-full object-contain"
    //   />
    //   <div className="relative p-4">
    //     <h2 className="text-2xl font-semibold text-white">{title}</h2>
    //     <p className="mt-2 text-gray-300">{description}</p>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
