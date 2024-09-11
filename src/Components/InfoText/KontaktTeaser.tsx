import React from "react";
import { Link } from "react-router-dom";
import useDarkModeStore from "../stores/useDarkModeStore";
import {
  KontaktTeaserWrapper,
  KontaktTeaserContainer,
  HeadlineContainer,
  Button,
  DescriptionContainer,
} from "../UI/InfoText/KontaktTeaser.styled.tsx";

// Interface für die Props der KontaktTeaser-Komponente
interface KontaktTeaserProps {
  headline: string; // Überschrift
  descriptionOne: string; // Erster Beschreibungstext
  descriptionTwo: string; // Zweiter Beschreibungstext
  linkTo: string; // Link für den Button
  button: string; // Button-Text
  $buttonVariant?: "tertiary"; // Optionaler Stil für den Button
}

// Funktionale Komponente für den KontaktTeaser
const KontaktTeaser: React.FC<KontaktTeaserProps> = ({
  headline,
  descriptionOne,
  descriptionTwo,
  linkTo,
  button,
  $buttonVariant,
}) => {
  const { isDarkModeOn } = useDarkModeStore(); // Dark Mode Zustand abrufen

  return (
    <KontaktTeaserWrapper $isDarkModeOn={isDarkModeOn}>
      <KontaktTeaserContainer>
        {/* Überschrift */}
        <HeadlineContainer>{headline}</HeadlineContainer>

        {/* Beschreibungstexte */}
        <DescriptionContainer>
          <p>{descriptionOne}</p>
          <p>{descriptionTwo}</p>
        </DescriptionContainer>

        {/* Button mit Link */}
        <Button as={Link} to={linkTo} $buttonVariant={$buttonVariant}>
          {button}
        </Button>
      </KontaktTeaserContainer>
    </KontaktTeaserWrapper>
  );
};

export default KontaktTeaser;
