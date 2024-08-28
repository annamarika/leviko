import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import LogoSVG from "../../assets/logo.svg";
import useDarkModeStore from "../stores/useDarkModeStore";

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero: React.FC = () => {
  const [background, setBackground] = useState(20);

  const { isDarkModeOn } = useDarkModeStore();

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
        defaults: { duration: 1, ease:"power1.inOut" },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top 20%',
          end: 'bottom -10%',
          scrub: true,
          pin: true,
          markers: false,
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
          y: '-=50',
        },
        0
      );
      tl.to(
        greenFront.current,
        {
          y: '-=140',
        },
        0
      );
      tl.to(
        text.current,
        {
          top: '50px',
        },
        0
      );
      tl.to(
        text.current,
        {
          opacity: 1,
          duration: 1,

        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <ParallaxOuter >
      <Parallax ref={parallaxRef}>
        
        <Mountain ref={greenBack} className="greenBack" src="/svg/levikosvgfive.svg" />
        {/* <Mountain ref={greenMiddle} className="greenMiddle" src="/svg/levikosvgfour.svg" /> */}
        {/* <Mountain ref={lines} className="lines" src="/svg/levikosvgthree.svg" /> */}
        <Mountain ref={musicnotes} className="musicnotes" src="/svg/levikosvgtwo.svg" />
        <Copy ref={text}>
          <img src="/svg/vrHead.svg" alt="LEVIKO Logo" />
        </Copy>
        <Mountain ref={greenFront} className="greenFront" src={isDarkModeOn ? "/svg/levikoSVGOneBlack.svg" : "/svg/levikosvgone.svg"} />
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
  // background-color: var(--leviko-blue)
  // background: linear-gradient(
  //   to bottom right, /* Direction of the gradient */
  //   var(--leviko-blue),        /* Start color (dark blue) */
  //   var(--leviko-blue),        /* Middle color (red) */
  //   var(--leviko-white)         /* End color (yellow) */
  // );
`;

const Parallax = styled.div`
  height: 100vh;
  position: relative;
`;

const Mountain = styled.img`
  position: absolute;
  width: 100vw;
  
  &.greenBack {
    top: -65px;
  }
  &.greenMiddle {
    top: 150px;
  }
  &.lines {
    bottom: 30px;
    left:20px;
  }
  &.musicnotes {
    bottom: -270px;
    left:10px;
  }
  &.greenFront {
    bottom: -250px;
    }

`;

const Copy = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  position: absolute;
  top:450px;
  left:0%;
  width: 100%; 
  opacity: 0;

  img {
    width: 550px;
    height: 550px;
  }
`;
