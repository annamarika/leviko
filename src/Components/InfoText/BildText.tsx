import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";
import {
  BildTextContainer,
  ImageContainer,
  StyledImage,
  HeadlineContainer,
  PContainer,
} from "../UI/InfoText/BildText.styled.tsx";

// Interface für die Props der BildText-Komponente
// Hier definieren wir die Eigenschaften, die die Komponente benötigt, z.B. das Bild, den Text, den Link und den Button-Text
interface BildTextProps {
  imgSrc: string; // Bildquelle
  imgAlt: string; // Alternativer Text für das Bild
  headline: string; // Überschrift für den Text
  description: string; // Beschreibungstext unter der Überschrift
  linkTo: string; // Ziel-Link, zu dem der Button führt
  button: string; // Text auf dem Button
  $objectPosition?: string; // Optionale Prop für die Bild-Position (z.B. 'center', 'top', etc.)
}

// Die BildText-Komponente nimmt die übergebenen Props und zeigt ein Bild, eine Überschrift, eine Beschreibung und einen Button an
const BildText: React.FC<BildTextProps> = ({
  imgSrc,
  imgAlt,
  headline,
  description,
  linkTo,
  button,
  $objectPosition = "center", // Standardposition des Bildes ist "center", falls keine andere Position übergeben wird
}) => {
  return (
    <BildTextContainer>
      {/* Bildbereich */}
      <ImageContainer>
        <StyledImage
          src={imgSrc} // Quelle des Bildes
          alt={imgAlt} // Alternativer Text für das Bild
          $objectPosition={$objectPosition} // Position des Bildes (zentriert oder wie angegeben)
        />
      </ImageContainer>

      {/* Textbereich mit Überschrift, Beschreibung und Button */}
      <HeadlineContainer>
        <h3>{headline}</h3> {/* Überschrift */}
        <PContainer>{description}</PContainer> {/* Beschreibungstext */}
        <Button as={Link} to={linkTo}>
          {/* Link-Button mit Ziel-URL */}
          {button}
        </Button>
      </HeadlineContainer>
    </BildTextContainer>
  );
};

export default BildText;
