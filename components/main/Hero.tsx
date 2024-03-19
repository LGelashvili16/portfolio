import React from 'react';
import HeroContent from '../sub/HeroContent';
import BlackHole from '../sub/BlackHole';

const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      <BlackHole />
      <HeroContent />
    </div>
  );
};

export default Hero;
