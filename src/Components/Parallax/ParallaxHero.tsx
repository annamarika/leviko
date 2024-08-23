import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import LogoSVG from "../../assets/logo.svg";

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
        defaults: { duration: 1, ease:"power1.out" },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top 20%',
          end: '5000 bottom',
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        greenBack.current,
        {
          y: '+=200',
        },
        0
      );
      tl.to(
        greenMiddle.current,
        {
          y: '+=100',
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
          y: '+=80',
        },
        0
      );
      tl.to(
        text.current,
        {
          y: '-=250',
          opacity: 1,
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <ParallaxOuter style={{ background: `var(--leviko-blue)`,}}>
      <Parallax ref={parallaxRef}>
        
        <Mountain ref={greenBack} className="greenBack" src="/svg/levikosvgfive.svg" />
        <Copy ref={text}>
          <img src={LogoSVG} alt="LEVIKO Logo" />
        </Copy>
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
  position: relative;
  z-index: 90;
  width: 100vw;
`;

const Parallax = styled.div`
  height: 100vh;
  position: relative;
`;

const Mountain = styled.img`
  position: absolute;
  width: 100vw;
  
  &.greenBack {
    top: -75px;
  }
  &.greenMiddle {
    top: 150px;
  }
  &.lines {
    bottom: -40px;
    left:20px;
  }
  &.musicnotes {
    bottom: -170px;
    left:10px;
  }
  &.greenFront {
    bottom: -5px;
    opacity: 0.9;
    }

`;

const Copy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:150px;
  left:3%;
  width: 100%; 
  opacity: 0;

  img {
    width: 350px;
    height: 350px;
  }
`;
