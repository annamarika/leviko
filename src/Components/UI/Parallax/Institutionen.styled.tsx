// Institutionen.styled.ts
import styled from "styled-components";

// Wrapper für den gesamten Parallax-Abschnitt
export const ParalaxWrapper = styled.div`
  background-color: var(--leviko-blue); // Hintergrundfarbe

  @media (max-width: 430px) {
    height: 100vh; // Füllt die gesamte Höhe des Bildschirms auf kleinen Geräten
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

// Container für den Inhalt des Parallax-Bereichs (Text- und Bildcontainer)
export const ParalaxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;
  background-color: var(--leviko-blue);
  color: var(--leviko-white); // Textfarbe

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
    flex-direction: column; // Auf kleinen Bildschirmen wird der Inhalt gestapelt
    align-items: start;
    padding: 0;
    gap: 0;
  }
`;

// Container für die Überschrift und den Beschreibungstext
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px; // Abstand zwischen den Elementen

  @media (max-width: 1024px) {
    gap: 38px;
  }

  @media (max-width: 430px) {
    width: 100%; // Volle Breite auf kleinen Geräten
    gap: 20px;
    margin-bottom: 32px;
  }
`;

// Container für den Textbereich (Überschrift und Beschreibung)
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
  gap: 32px; // Abstand zwischen Button und Logos
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 430px) {
    flex-direction: column-reverse; // Auf kleinen Bildschirmen wird der Button unter die Logos gesetzt
    gap: 32px;
    align-items: flex-start;
  }
`;

// Container für die Logos
export const LogoContainer = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 430px) {
    align-content: center;
    justify-content: start;
    gap: 15px;
  }
`;

interface StyledLogoProps {
  $hide?: boolean;
  $logoHeight?: string;
}

// Stil für die Logos mit optionaler Sichtbarkeit und Höhenanpassung
export const StyledLogo = styled.img<StyledLogoProps>`
  width: auto;
  height: ${({ $logoHeight }) => $logoHeight}; // Höhe wird über Prop gesteuert
  ${({ $hide }) =>
    $hide && "display: none;"} // Versteckt das Logo, wenn $hide true ist

  @media (max-width: 1024px) {
    height: ${({ $logoHeight }) =>
      `calc(${$logoHeight} * 0.75)`}; // Logo wird für mittlere Bildschirme verkleinert
  }

  @media (max-width: 430px) {
    height: ${({ $logoHeight }) =>
      `calc(${$logoHeight} * 0.5)`}; // Logo wird auf kleinen Bildschirmen weiter verkleinert
  }
`;

// Container für das Bild
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 250px; // Maximale Breite des Bildes
  height: auto;
  aspect-ratio: 1; // Seitenverhältnis 1:1

  @media (max-width: 430px) {
    width: 100%; // Volle Breite auf kleinen Geräten
    max-width: 100%;
  }
`;

interface StyledImageProps {
  $objectPosition?: string;
}

// Stil für das Bild mit dynamischer Positionierung
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover; // Skaliert das Bild, um den Container auszufüllen
  object-position: ${({ $objectPosition }) =>
    $objectPosition || "center"}; // Dynamische Position des Bildes
`;
