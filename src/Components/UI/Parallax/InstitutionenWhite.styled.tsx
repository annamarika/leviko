// InstitutionenWhite.styled.ts
import styled from "styled-components";

// Interface für die Dark Mode Props
interface DarkModeProps {
  $isDarkModeOn: boolean;
}

// Interface für die StyledImage Props zur Steuerung der Bildposition
interface StyledImageProps {
  $objectPosition?: string;
}

// Interface für die StyledLogo Props zur Steuerung der Sichtbarkeit und Höhe des Logos
interface StyledLogoProps {
  $hide?: boolean;
  $logoHeight?: string;
}

// Wrapper für den gesamten Parallax-Abschnitt mit Dark Mode Unterstützung
export const ParalaxWrapper = styled.div<DarkModeProps>`
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};
  transition: background-color 0.8s ease, color 0.3s ease;

  @media (max-width: 430px) {
    height: 100vh; // Vollbildhöhe auf kleinen Bildschirmen
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

// Container für den Parallax-Content (Text + Bild), Dark Mode abhängig
export const ParalaxContainer = styled.div<DarkModeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;

  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"};

  transition: background-color 0.8s ease, color 0.3s ease;

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
    flex-direction: column; // Für kleine Bildschirme vertikal ausrichten
    align-items: start;
    gap: 0;
    padding: 0;
  }
`;

// Container für die Überschrift und den Textbereich
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 38px;
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

// Container für den Text (Überschrift und Beschreibung)
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
  }
`;

// Container für den Button und die Logos
export const ButtonLogoContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 430px) {
    flex-direction: column-reverse;
    gap: 32px;
    align-items: flex-start;
  }
`;

// Container für die Logos (zwei Logos nebeneinander)
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 430px) {
    justify-content: start;
    gap: 15px;
  }
`;

// Stil für die Logos mit dynamischer Höhe und optionaler Sichtbarkeit
export const StyledLogo = styled.img<StyledLogoProps>`
  width: auto;
  height: ${({ $logoHeight }) => $logoHeight}; // Höhe über die Prop steuerbar
  ${({ $hide }) => $hide && "display: none;"}

  @media (max-width: 1024px) {
    height: ${({ $logoHeight }) =>
      `calc(${$logoHeight} * 0.75)`}; // Höhe für mittlere Bildschirme anpassen
  }

  @media (max-width: 430px) {
    height: ${({ $logoHeight }) =>
      `calc(${$logoHeight} * 0.5)`}; // Höhe für kleine Bildschirme anpassen
  }
`;

// Container für das Bild
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 250px;
  height: auto;
  aspect-ratio: 1;

  @media (max-width: 430px) {
    width: 100%; // Volle Breite auf kleinen Bildschirmen
    max-width: 100%;
  }
`;

// Stil für das Bild mit dynamischer Positionierung
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover; // Bild skalieren, um den Container auszufüllen
  object-position: ${({ $objectPosition }) =>
    $objectPosition || "center"}; // Dynamische Bildposition
`;
