// ForschungNav.styled.ts
import styled from "styled-components";
import ArrowSVG from "../../UI/Buttons/ArrowSVG.tsx";

// Interface für Dark Mode, um die Farben dynamisch zu steuern
interface DarkModeProps {
  $isDarkModeOn: boolean;
}

// Container für die gesamte Navigation der Forschungsseite
export const ForschungNavContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  margin-bottom: 100px;
  gap: 32px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 32px;
    margin-bottom: 80px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    gap: 32px;
    margin-bottom: 56px;
  }
`;

// Container für den Navigationsbereich (Überschrift und Links)
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: calc(33.33%);

  @media (max-width: 430px) {
    width: 100%;
  }
`;

// Überschrift für den Navigationsbereich
export const NavHeadline = styled.h3`
  @media (max-width: 430px) {
    font-size: 32px;
  }
`;

// Wrapper für die Navigationslinks
export const NavPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

// Container für einzelne Navigationspunkte (Link + Pfeil)
export const NavPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: calc(70%);
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

// Stil für den Text der Navigationspunkte mit Dark Mode Unterstützung
export const NavP = styled.p<DarkModeProps>`
  font-size: 24px;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  text-decoration: none;

  &:hover {
    color: ${({ $isDarkModeOn }) =>
      $isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"};
  }

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

// Teaser-Text für Publikationen
export const PublikationsTeaser = styled.p`
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

// Stil für den Pfeil-Icon bei den Navigationspunkten
export const StyledArrowSVG = styled(ArrowSVG)`
  &:hover {
    fill: var(--leviko-black);
  }
`;

// Container für den Pfeil-Icon in den Navigationspunkten
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 430px) {
    width: 26px;
    height: 26px;
  }
`;

// Container für den gedrehten Pfeil-Icon bei Publikationen
export const ArrowContainerPublikationen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  transform: rotate(270deg);

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 430px) {
    width: 26px;
    height: 26px;
  }
`;

// Container für den Beschreibungstext auf der rechten Seite
export const TextContainer = styled.h3`
  width: calc(66.66%);

  @media (max-width: 430px) {
    width: 100%;
  }
`;
