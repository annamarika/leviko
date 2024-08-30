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
  const greenFrontDark = useRef(null); // New ref for dark mode SVG

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

      // entweder y und x Werte mit += / -= anpassen
      // oder bestimmte css attribute auf einen bestimmten Wert setzen
      // wie zb bei text.current ... top: 50px , opacity: 1 ... 
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
        greenFrontDark.current,
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
        
        <AudioTrack ref={greenBack} className="greenBack" src="/svg/TonspurBack.svg" />
        {/* <AudioTrack ref={greenMiddle} className="greenMiddle" src="/svg/levikosvgfour.svg" /> */}
        {/* <AudioTrack ref={lines} className="lines" src="/svg/levikosvgthree.svg" /> */}
        <AudioTrack ref={musicnotes} className="musicnotes" src="/svg/musicNotes.svg" />
        <VRHead ref={text}>
          <img src="/svg/vrHead.svg" alt="LEVIKO Logo" />
        </VRHead>
        
        {/* 
        je nachdem ob DarkMode an oder aus ist muss TonspurFront oder TonspurFrontDarkMode SVG angezeigt 
        -> erster Ansatz war: 
        <AudioTrack ref={greenFront} className="greenFront" src={isDarkModeOn ? "/svg/TonspurFrontDarkMode.svg" : "/svg/TonspurFront.svg"} /> 
        aber da zwischen dem Wechseln des DarkModes eine Transition der background-color ist (in GlobalStyle.tsx), 
        müsste auch das Wechseln zwischen diesen beiden svgs smoother sein.
        Mit diesem Ansatz habe ich es getestet, da dann der Opacity Wert mit transition smooth gemacht werden kann (klappt noch nicht so richtig)
        */}
        <AudioTrack
          ref={greenFront}
          className={`greenFront ${isDarkModeOn ? 'hidden' : ''}`}
          src="/svg/TonspurFront.svg"
        />
        <AudioTrack
          ref={greenFrontDark}
          className={`greenFront ${isDarkModeOn ? '' : 'hidden'}`}
          src="/svg/TonspurFrontDarkMode.svg"
        />       
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

const AudioTrack = styled.img`
  position: absolute;
  width: 100vw;
  transition: opacity 0.8s ease-in-out; 

  // Anfangswerte der SVGs (nach Klassen)
  &.greenBack {
    top: -30px;
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
    position: absolute;
    bottom: -250px;
  }

  &.hidden {
    opacity: 0;
    pointer-events: none; /* Prevent interaction when hidden */
  }

`;

// Anfangswerte des Kopfes mit VRBrille
const VRHead = styled.div`
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
