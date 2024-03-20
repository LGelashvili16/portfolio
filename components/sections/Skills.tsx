import { BACKEND_SKILLS, FRONTEND_SKILLS, SOFTWARE_TOOLS } from '@/constants';
import React from 'react';
import SkillData from '../sections-content/SkillData';
import SkillText from '../sections-content/SkillText';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-auto py-20"
      // style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      <div className="flex justify-center items-center flex-wrap mt-4 gap-5 ">
        {FRONTEND_SKILLS.map((image, index) => (
          <SkillData
            key={image.skill_name}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex justify-center flex-wrap mt-4 gap-5 items-center">
        {BACKEND_SKILLS.map((image, index) => (
          <SkillData
            key={image.skill_name}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex justify-center flex-wrap mt-4 gap-5 items-center">
        {SOFTWARE_TOOLS.map((image, index) => (
          <SkillData
            key={image.skill_name}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover}">
          <video
            className="h-full w-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
