import React from "react";
import {
  MethodenIntroContainer,
  Description,
} from "../UI/Diagramme/DiagrammeIntroText.styled.tsx";

// Interface für die Props der DiagrammIntroText-Komponente
interface MethodenIntroProps {
  headline: JSX.Element | string; // Überschrift, die als JSX oder String übergeben werden kann
  description: JSX.Element | string; // Beschreibungstext, der als JSX oder String übergeben werden kann
}

// Funktionale Komponente für das Methoden-Intro
const DiagrammIntroText: React.FC<MethodenIntroProps> = ({
  headline,
  description,
}) => {
  return (
    <MethodenIntroContainer>
      <h3>{headline}</h3>
      <Description>{description}</Description>
    </MethodenIntroContainer>
  );
};

export default DiagrammIntroText;
