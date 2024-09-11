import React from "react";
import {
  ParalaxWrapper,
  ParalaxContainer,
  HeadlineContainer,
  TextContainer,
} from "../UI/Parallax/ForschungsfragenWhite.styled.tsx";
import useDarkModeStore from "../stores/useDarkModeStore";

// Interface für die Props der Forschungsfragen-Komponente
interface ForschungsfragenProps {
  headline: JSX.Element | string; // Überschrift, die als JSX oder String übergeben werden kann
}

// Funktionale Komponente für den Forschungsfragen-Bereich mit Unterstützung für Dark Mode
const Forschungsfragen: React.FC<ForschungsfragenProps> = ({ headline }) => {
  const { isDarkModeOn } = useDarkModeStore(); // Zustand für Dark Mode abrufen

  return (
    <ParalaxWrapper $isDarkModeOn={isDarkModeOn}>
      <ParalaxContainer $isDarkModeOn={isDarkModeOn}>
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
