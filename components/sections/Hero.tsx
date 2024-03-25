import React from 'react';
import HeroContent from '../sections-content/HeroContent';
import BlackHole from '../sections-content/BlackHole';

const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      {/* <BlackHole /> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
