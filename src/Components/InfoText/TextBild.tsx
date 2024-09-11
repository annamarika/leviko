import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";
import {
  BildTextContainer,
  HeadlineContainer,
  PContainer,
  ImageContainer,
  StyledImage,
} from "../UI/InfoText/TextBild.styled.tsx";

// Interface für die Props der TextBild-Komponente
// Hier werden die notwendigen Eigenschaften definiert, wie das Bild, die Überschrift, die Beschreibung und der Button-Text
interface TextBildProps {
  imgSrc: string; // Quelle des Bildes
  imgAlt: string; // Alternativer Text für das Bild
  headline: string; // Überschrift für den Text
  description: string; // Beschreibungstext
  linkTo: string; // Ziel-Link, zu dem der Button führt
  button: string; // Text auf dem Button
  $objectPosition?: string; // Optionale Prop für die Position des Bildes
}

// Funktionale Komponente, die ein Bild, eine Überschrift, eine Beschreibung und einen Button anzeigt
const TextBild: React.FC<TextBildProps> = ({
  imgSrc,
  imgAlt,
  headline,
  description,
  linkTo,
  button,
  $objectPosition = "center", // Standardposition des Bildes ist "center"
}) => {
  return (
    <BildTextContainer>
      {/* Textbereich mit Überschrift, Beschreibung und Button */}
      <HeadlineContainer>
        <h3>{headline}</h3> {/* Überschrift */}
        <PContainer>{description}</PContainer> {/* Beschreibungstext */}
        <Button as={Link} to={linkTo}>
          {" "}
          {/* Button mit Link */}
          {button}
        </Button>
      </HeadlineContainer>

      {/* Bildbereich */}
      <ImageContainer>
        <StyledImage
          src={imgSrc} // Bildquelle
          alt={imgAlt} // Alternativtext
          $objectPosition={$objectPosition} // Position des Bildes
        />
      </ImageContainer>
    </BildTextContainer>
  );
};

export default TextBild;
