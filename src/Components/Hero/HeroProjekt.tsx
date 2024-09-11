import React from "react";
import useDarkModeStore from "../stores/useDarkModeStore.tsx";
import { ImageContainer, Headline } from "../UI/Hero/HeroProjekt.styled.tsx";

// Interface für die Props der HeroProjekt-Komponente
interface HeroProjektProps {
  $imgSrc?: string;
  imgAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
  $objectPosition?: string;
}

// Funktionale Komponente für den Hero-Bereich
const HeroProjekt: React.FC<HeroProjektProps> = ({
  $imgSrc,
  imgAlt,
  headline,
  $objectPosition = "center",
}) => {
  const { isDarkModeOn } = useDarkModeStore();

  return (
    <>
      {/* Hintergrundbild-Container */}
      <ImageContainer
        $imgSrc={$imgSrc}
        $objectPosition={$objectPosition}
        aria-label={imgAlt}
        $isDarkModeOn={isDarkModeOn}
      >
        {/* Überschrift im Hero-Bereich */}
        <Headline $isDarkModeOn={isDarkModeOn}>{headline}</Headline>
      </ImageContainer>
    </>
  );
};

export default HeroProjekt;
