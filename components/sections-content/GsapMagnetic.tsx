'use client';

import gsap from 'gsap';
import React, { useEffect, useRef, MouseEvent } from 'react';

const GsapMagnetic = ({ children }: { children: React.ReactNode }) => {
  const magnetic = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const mouseMove = (event: MouseEvent<HTMLLIElement>) => {
      if (magnetic.current) {
        const { clientX, clientY } = event;

        const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);

        const y = clientY - (top + height / 2);

        xTo(x);

        yTo(y);
      }
    };

    const mouseLeave = (event: MouseEvent<HTMLLIElement>) => {
      gsap.to(magnetic.current, { x: 0, duration: 1 });

      gsap.to(magnetic.current, { y: 0, duration: 1 });

      xTo(0);

      yTo(0);
    };

    if (magnetic.current) {
      magnetic.current.addEventListener('mousemove', mouseMove as any);

      magnetic.current.addEventListener('mouseleave', mouseLeave as any);
    }

    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener('mousemove', mouseMove as any);

        magnetic.current.removeEventListener('mouseleave', mouseLeave as any);
      }
    };
  }, []);
  //   return React.cloneElement(children, { ref: magnetic });
  return <li ref={magnetic}>{children}</li>;
};

export default GsapMagnetic;
