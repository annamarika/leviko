import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero: React.FC = () => {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const lines = useRef(null);
  const musicnotes = useRef(null);
  const greenFront = useRef(null);
  const greenMiddle = useRef(null);
  const greenBack = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: '5000 bottom',
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        greenMiddle.current,
        {
          y: '+=80',
        },
        0
      );
      tl.to(
        lines.current,
        {
          y: '-=80',
        },
        0
      );
      tl.to(
        musicnotes.current,
        {
          y: '-=80',
        },
        0
      );
      tl.to(
        greenFront.current,
        {
          y: '+=50',
        },
        0
      );
      tl.to(
        text.current,
        {
          y: '-=50',
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <ParallaxOuter>
      <Parallax
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54)`,
        }}
      >
        <Copy ref={text}>
          <h1>LEVIKO</h1>
        </Copy>
        <Mountain ref={greenBack} className="greenBack" src="/svg/levikosvgfive.svg" />
        <Mountain ref={greenMiddle} className="greenMiddle" src="/svg/levikosvgfour.svg" />
        <Mountain ref={lines} className="lines" src="/svg/levikosvgthree.svg" />
        <Mountain ref={musicnotes} className="musicnotes" src="/svg/levikosvgtwo.svg" />
        <Mountain ref={greenFront} className="greenFront" src="/svg/levikosvgone.svg" />
        
      </Parallax>
    </ParallaxOuter>
  );
};

export default ParallaxHero;

// Styled Components
const ParallaxOuter = styled.div`
  overflow: hidden;
`;

const Parallax = styled.div`
  height: 100vh;
  position: relative;
  z-index: 50;
`;

const Mountain = styled.img`
  position: absolute;
  z-index: 3;
  width: 100%;
  
  &.greenBack {
    top: -30px;
  }
  &.greenMiddle {
    bottom: -30px;
  }
  &.lines {
    bottom: -10px;
    left:20px;
  }
  &.musicnotes {
    bottom: 0px;
    left:10px;
  }
  &.greenFront {
    bottom: 10px;
  }

`;

const Copy = styled.div`
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;

  h1 {
    font-size: 4rem;
  }
`;
