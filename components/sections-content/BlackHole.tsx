import React from 'react';

const BlackHole = ({ insert }: { insert?: string }) => {
  const classes =
    'absolute left-0 rotate-180 top-[-260px]  z-[-25] w-full h-full object-cover';

  const footerClasses = `absolute left-0 bottom-[-470px] z-[-20] w-full h-[400%] hole-animation`;

  return (
    <video
      autoPlay
      muted
      loop
      className={insert === 'footer' ? footerClasses : classes}
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
  );
};

export default BlackHole;
