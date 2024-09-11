import styled from "styled-components"; // Styled-components für CSS-in-JS

// Definiert die Props für das StyledImage (speziell für das Bild-Layout)
interface StyledImageProps {
  $objectPosition?: string; // Optional: Bildposition
}

// Container für die gesamte Hero-Komponente
export const HeroStartseiteContainer = styled.div`
  margin-top: 98px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding-top: 100px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-top: 80px;
    margin-right: 24px;
    margin-left: 24px;
    padding-top: 80px;
    gap: 24px;
  }
  @media (max-width: 430px) {
    margin-top: 84px;
    padding-top: 56px;
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
`;

// Container für die Überschrift und Beschreibung
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 50%;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

// Container für das Bild
export const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 430px) {
    width: 100%;
    height: 511px;
  }
`;

// Styling für das Bild selbst, inklusive der Positionierung
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
