// ProjektInfoParallax.styled.ts
import styled from "styled-components";

// Wrapper für den gesamten Parallax-Bereich
export const ParalaxWrapper = styled.div`
  background-color: var(--leviko-blue);

  @media (max-width: 430px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

// Container für den Inhalt des Parallax-Bereichs (Bild und Text)
export const ParalaxContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 160px;
  padding: 100px 0;
  gap: 80px;
  background-color: var(--leviko-blue);
  color: var(--leviko-white);

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
  height: 25%;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

// Stil für das Bild mit dynamischer Positionierung
interface StyledImageProps {
  $objectPosition?: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 430px) {
    object-position: ${(props) => props.$objectPosition || "30%"};
  }
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
