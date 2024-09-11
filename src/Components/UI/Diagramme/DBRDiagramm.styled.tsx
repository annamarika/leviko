// DBRDiagramm.styled.ts
import styled from "styled-components";
import MiniArrowSVG from "../../UI/Buttons/MiniArrowSVG.tsx";

// Interface für Dark Mode, um dynamische Farben zu steuern
interface DarkModeProps {
  $isDarkModeOn: boolean;
}

// Wrapper für das gesamte Diagramm
export const DiagrammWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-right: 160px;
  margin-left: 160px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
  }

  @media (max-width: 430px) {
    padding: 0;
    align-items: start;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

// Wrapper für den Informationstext und das Diagramm
export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

// Container für den Informationstext
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Wrapper für den Informationstext mit dynamischer Dark Mode Unterstützung
export const InfoTextWrapper = styled.div<DarkModeProps>`
  display: flex;
  align-items: start;
  background-color: var(--leviko-green);
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-black)"};
`;

// Container für den Inhalt des Informationstexts
export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 40px 64px;
  gap: 28px;

  @media (max-width: 1330px) {
    padding: 24px 20px 24px 64px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px 20px 10px;
  }
`;

// Stil für den vertikalen Text
export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  @media (max-width: 430px) {
    padding: 10px 10px;
  }
`;

// Container für das Diagramm
export const DiagrammContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    padding: 10px 10px;
    flex-direction: column;
    gap: 32px;
  }
`;

// Wrapper für den Call-to-Action (CTA)-Text und das SVG
export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--leviko-green);
  height: fit-content;
  padding: 20px;
  flex-shrink: 0;
  gap: 10px;
  width: 352px;
  height: auto;
  margin-left: auto;

  @media (max-width: 1330px) {
    padding: 24px 20px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px;
    gap: 20px;
    width: fit-content;
    align-self: flex-end;
    margin-right: -24px;
  }
`;

// Wrapper für das SVG-Icon
export const SVGWrapper = styled.div``;

// Container für das SVG-Icon
export const SVGContainer = styled.div`
  position: relative;
`;

// Wrapper für den Mini-Arrow SVG
export const MiniArrowSVGWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// Stil für das Mini-Arrow SVG
export const StyledMiniArrowSVG = styled(MiniArrowSVG)`
  width: 31px;
  height: 34px;

  @media (max-width: 430px) {
    width: 20px;
    height: 21px;
  }
`;

// Stil für den Kreis, der das Mini-Arrow SVG umgibt
export const SVGCircle = styled.div`
  background-color: var(--leviko-black);
  height: 40px;
  width: 40px;
  border-radius: 50%;

  @media (max-width: 430px) {
    height: 25px;
    width: 25px;
  }
`;

// CTA-Text für die Interaktion mit dem Diagramm
export const CTAText = styled.p<DarkModeProps>`
  font-size: 16px;
  color: var(--leviko-black);

  @media (max-width: 430px) {
    width: 210px;
  }
`;

// Container für die Kreise in der mobilen Ansicht
export const CircleContainer = styled.div`
  display: none;

  @media (max-width: 430px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

// Stil für die Kreise, die im Diagramm verwendet werden
export const Circle = styled.div<{ $isSelected: boolean; $isLast?: boolean }>`
  background-color: ${({ $isSelected, $isLast }) =>
    $isLast && $isSelected
      ? "#AAFE83" // Grün, wenn der letzte Kreis ausgewählt ist
      : $isLast
      ? "#B4CEE6" // Standardfarbe für den letzten Kreis
      : $isSelected
      ? "#AAFE83" // Grün für andere ausgewählte Kreise
      : "#182EC0"}; // Standardfarbe für andere Kreise
  color: ${({ $isSelected, $isLast }) =>
    $isLast && $isSelected
      ? "var(--leviko-black)"
      : $isLast
      ? "var(--leviko-black)"
      : $isSelected
      ? "#0D0D0D"
      : "#F2F2F2"};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Blatant, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

// Stil für das Rechteck im Diagramm
export const Rectangle = styled.div<{ $isSelected: boolean }>`
  background: ${({ $isSelected }) =>
    $isSelected
      ? "#AAFE83"
      : "linear-gradient(90deg, #182EC0 0%, #B4CEE6 100%)"};
  color: ${({ $isSelected }) => ($isSelected ? "#0D0D0D" : "#F2F2F2")};
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Blatant, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;
