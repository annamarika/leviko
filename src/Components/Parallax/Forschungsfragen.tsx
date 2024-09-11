import React from "react";
import {
  ParalaxWrapper,
  ParalaxContainer,
  HeadlineContainer,
  TextContainer,
} from "../UI/Parallax/Forschungsfragen.styled.tsx";

// Interface für die Props der Forschungsfragen-Komponente
interface ForschungsfragenProps {
  headline: JSX.Element | string; // Überschrift, die als JSX oder String übergeben werden kann
}

// Funktionale Komponente für den Forschungsfragen-Bereich
const Forschungsfragen: React.FC<ForschungsfragenProps> = ({ headline }) => {
  return (
    <ParalaxWrapper>
      <ParalaxContainer>
        {/* Überschrift im Parallax-Bereich */}
        <HeadlineContainer>
          <TextContainer>
            <h3>{headline}</h3>
          </TextContainer>
        </HeadlineContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default Forschungsfragen;
