import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";
import {
  ParalaxWrapper,
  ParalaxContainer,
  HeadlineContainer,
  ImageContainer,
  StyledImage,
  TextButtonContainer,
  ImageTextContainer,
} from "../UI/Parallax/ProjektInfoParallax.styled.tsx";

// Interface für die Props der ProjektInfoParallax-Komponente
interface ProjektInfoParallaxProps {
  headline: string; // Überschrift des Parallax-Bereichs
  imgSrc: string; // Quelle des Bildes
  imgAlt: string; // Alternativtext für das Bild
  $objectPosition?: string; // Positionierung des Bildes
  linkTo: string; // Ziel-Link des Buttons
  button: string; // Text des Buttons
  $buttonVariant?: "secondary"; // Button-Stil
  description: JSX.Element | string; // Beschreibungstext oder JSX
}

// Funktionale Komponente für den Parallax-Bereich
const ProjektInfoParallax: React.FC<ProjektInfoParallaxProps> = ({
  headline,
  imgSrc,
  imgAlt,
  $objectPosition = "center", // Standardposition des Bildes
  linkTo,
  button,
  $buttonVariant,
  description,
}) => {
  return (
    <ParalaxWrapper>
      {/* Container für den gesamten Inhalt */}
      <ParalaxContainer>
        {/* Überschrift */}
        <HeadlineContainer>{headline}</HeadlineContainer>

        {/* Container für Bild und Text */}
        <ImageTextContainer>
          {/* Bild */}
          <ImageContainer>
            <StyledImage
              src={imgSrc}
              alt={imgAlt}
              $objectPosition={$objectPosition}
            />
          </ImageContainer>

          {/* Text und Button */}
          <TextButtonContainer>
            <div>{description}</div>
            <Button as={Link} to={linkTo} $buttonVariant={$buttonVariant}>
              {button}
            </Button>
          </TextButtonContainer>
        </ImageTextContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default ProjektInfoParallax;
