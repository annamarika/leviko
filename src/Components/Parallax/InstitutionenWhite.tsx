import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";
import useDarkModeStore from "../stores/useDarkModeStore";
import {
  ParalaxWrapper,
  ParalaxContainer,
  HeadlineContainer,
  TextContainer,
  ButtonLogoContainer,
  LogoContainer,
  StyledLogo,
  ImageContainer,
  StyledImage,
} from "../UI/Parallax/InstitutionenWhite.styled.tsx";

// Interface für die Props der InstitutionenWhite-Komponente
interface InstitutionenProps {
  imgSrc: string; // Quelle des Hauptbildes
  imgAlt: string; // Alternativer Text für das Hauptbild
  logoOneSrc: string; // Quelle des ersten Logos
  logoOneAlt: string; // Alternativer Text für das erste Logo
  logoTwoSrc: string; // Quelle des zweiten Logos
  logoTwoAlt: string; // Alternativer Text für das zweite Logo
  headline: JSX.Element | string; // Überschrift (kann ein JSX-Element oder Text sein)
  description: string; // Beschreibungstext
  linkTo: string; // Ziel-Link, zu dem der Button führt
  button: string; // Text auf dem Button
  $objectPosition?: string; // Optionale Prop für die Position des Hauptbildes
  $logoHeight?: string; // Optionale Prop für die Höhe der Logos
  $buttonVariant?: "secondary"; // Optionale Prop für den Button-Stil
}

// Funktionale Komponente, die das Bild, die Überschrift, die Beschreibung, Logos und einen Button anzeigt
const InstitutionenWhite: React.FC<InstitutionenProps> = ({
  imgSrc,
  imgAlt,
  logoOneSrc,
  logoOneAlt,
  logoTwoSrc,
  logoTwoAlt,
  headline,
  description,
  linkTo,
  button,
  $objectPosition = "center", // Standardposition des Bildes
  $buttonVariant,
  $logoHeight = "40px", // Standardhöhe der Logos
}) => {
  const { isDarkModeOn } = useDarkModeStore(); // Zustand für Dark Mode abrufen

  return (
    <ParalaxWrapper $isDarkModeOn={isDarkModeOn}>
      <ParalaxContainer $isDarkModeOn={isDarkModeOn}>
        {/* Textbereich mit Überschrift, Beschreibung, Button und Logos */}
        <HeadlineContainer>
          <TextContainer>
            <h3>{headline}</h3> {/* Überschrift */}
            <p>{description}</p> {/* Beschreibung */}
          </TextContainer>
          <ButtonLogoContainer>
            <Button as={Link} to={linkTo} $buttonVariant={$buttonVariant}>
              {button}
            </Button>
            <LogoContainer>
              <StyledLogo
                src={logoOneSrc}
                alt={logoOneAlt}
                $logoHeight={$logoHeight} // Höhe des ersten Logos
              />
              <StyledLogo
                $hide={logoTwoSrc === ""} // Verstecke zweites Logo, wenn die Quelle leer ist
                src={logoTwoSrc}
                alt={logoTwoAlt}
                $logoHeight={$logoHeight} // Höhe des zweiten Logos
              />
            </LogoContainer>
          </ButtonLogoContainer>
        </HeadlineContainer>

        {/* Bildbereich */}
        <ImageContainer>
          <StyledImage
            src={imgSrc}
            alt={imgAlt}
            $objectPosition={$objectPosition} // Dynamische Bildposition
          />
        </ImageContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default InstitutionenWhite;
