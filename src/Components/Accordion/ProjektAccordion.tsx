import React from "react";
import {
  AccordionWrapper,
  AccordionContainer,
  AccordionHeading,
  AccordionButton,
  StyledArrowSVG,
  ArrowContainer,
  AccordionPanel,
} from "../UI/Accordion/ProjektAccordion.styled.tsx";
import useAccordionStore from "../stores/useAccordionStore.tsx";
import useDarkModeStore from "../stores/useDarkModeStore.tsx";

// Interface für die Props der ProjektAccordion-Komponente
interface ProjektAccordionProps {
  items: Array<{
    id: string; // Eindeutige ID für jedes Akkordeon-Element
    title: string; // Titel des Akkordeon-Elements
    content: JSX.Element | string; // Inhalt des Akkordeon-Elements
  }>;
}

// Funktionale Komponente für das Projekt-Akkordeon
const ProjektAccordion: React.FC<ProjektAccordionProps> = ({ items }) => {
  const { expanded, setExpanded } = useAccordionStore(); // Akkordeon-Zustand verwalten
  const { isDarkModeOn } = useDarkModeStore(); // Dark Mode Zustand abrufen

  // Funktion, die den Zustand des Akkordeons verwaltet
  const handleAccordionChange = (keys: string[]) => {
    const isExpanded = keys.length > 0 ? keys[0] : null;
    setExpanded(isExpanded);
  };

  return (
    <AccordionWrapper allowZeroExpanded onChange={handleAccordionChange}>
      {items.map((item, index) => (
        <AccordionContainer
          key={item.id}
          uuid={item.id}
          $alternate={index % 2 !== 0} // Jedes zweite Element erhält einen alternativen Stil
          $isDarkModeOn={isDarkModeOn}
        >
          {/* Überschrift des Akkordeon-Elements */}
          <AccordionHeading>
            <AccordionButton>
              {item.title}
              <ArrowContainer $rotate={expanded === item.id}>
                <StyledArrowSVG
                  color={
                    index % 2 !== 0 && !isDarkModeOn
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </ArrowContainer>
            </AccordionButton>
          </AccordionHeading>

          {/* Inhalt des Akkordeon-Elements */}
          <AccordionPanel>{item.content}</AccordionPanel>
        </AccordionContainer>
      ))}
    </AccordionWrapper>
  );
};

export default ProjektAccordion;
