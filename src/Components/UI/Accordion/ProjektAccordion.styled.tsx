// ProjektAccordion.styled.ts
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ArrowSVG from "../../UI/Buttons/ArrowSVG.tsx";

// Interface für die Props des ArrowContainer, um die Rotation des Pfeils zu steuern
interface StyledArrowProps {
  $rotate?: boolean;
}

// Wrapper für das gesamte Akkordeon
export const AccordionWrapper = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 160px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 430px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

// Container für jedes einzelne Akkordeon-Element
export const AccordionContainer = styled(AccordionItem)<{
  $alternate: boolean;
  $isDarkModeOn: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 65px;
  border: solid 4px;
  border-color: var(--leviko-blue);
  background-color: ${({ $alternate, $isDarkModeOn }) =>
    $isDarkModeOn && $alternate
      ? "black"
      : $alternate
      ? "var(--leviko-white)"
      : "var(--leviko-blue)"};
  transition: background-color 0.8s ease, color 0.3s ease;
  color: ${({ $alternate, $isDarkModeOn }) =>
    $alternate && !$isDarkModeOn
      ? "var(--leviko-black)"
      : "var(--leviko-white)"};
  width: 100%;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 40px 24px;
  }
  @media (max-width: 430px) {
    gap: 32px;
    padding: 32px 24px;
  }
`;

// Stil für die Überschrift eines Akkordeon-Elements
export const AccordionHeading = styled(AccordionItemHeading)`
  font-size: 43px;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

// Button, der den Inhalt des Akkordeon-Elements öffnet oder schließt
export const AccordionButton = styled(AccordionItemButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Stil für das Pfeil-Icon in der Akkordeon-Überschrift
export const StyledArrowSVG = styled(ArrowSVG)`
  &:hover {
    color: var(--leviko-black);
  }
`;

// Container für das Pfeil-Icon, welches sich bei der Öffnung dreht
export const ArrowContainer = styled.div<StyledArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  transform: ${({ $rotate }) => ($rotate ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

// Container für den Inhalt des Akkordeon-Elements
export const AccordionPanel = styled(AccordionItemPanel)``;
