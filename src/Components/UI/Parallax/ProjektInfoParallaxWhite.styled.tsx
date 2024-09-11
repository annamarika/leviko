// ProjektInfoParallaxWhite.styled.ts
import styled from "styled-components";

// Interface für die Dark Mode-Props, um dynamische Farben zu steuern
interface DarkModeProps {
  $isDarkModeOn: boolean;
}

// Interface für die dynamische Bildpositionierung
interface StyledImageProps {
  $objectPosition?: string;
}

// Wrapper für den gesamten Parallax-Bereich mit Dark Mode Unterstützung
export const ParalaxWrapper = styled.div<DarkModeProps>`
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};

  transition: background-color 0.8s ease, color 0.3s ease;

  @media (max-width: 430px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

// Container für den gesamten Inhalt des Parallax-Bereichs
export const ParalaxContainer = styled.div<DarkModeProps>`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 160px;
  padding: 100px 0;
  gap: 80px;
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};
  transition: background-color 0.8s ease, color 0.3s ease;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"};

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    padding: 80px 0;
    gap: 80px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    gap: 32px;
    padding: 0 0;
  }
`;

// Container für die Überschrift im Parallax-Bereich
export const HeadlineContainer = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 50%;

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

// Container für das Bild im Parallax-Bereich
export const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  display: block;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

// Stil für das Bild mit dynamischer Positionierung
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 350px;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.$objectPosition || "30%"};
`;

// Container für den Text und den Button im Parallax-Bereich
export const TextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    width: 100%;
  }
`;

// Container, der das Bild und den Text-Button-Bereich zusammenhält
export const ImageTextContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 20px;
  }
`;
