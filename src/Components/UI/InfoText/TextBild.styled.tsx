// TextBild.styled.ts
import styled from "styled-components";

// Interface für die StyledImage-Props, damit die Bildposition dynamisch angepasst werden kann
interface StyledImageProps {
  $objectPosition?: string;
}

// Container für die gesamte Komponente (Textbereich + Bild)
export const BildTextContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  margin-bottom: 100px;
  gap: 33px;

  // Media Queries für verschiedene Bildschirmgrößen
  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
    margin-bottom: 80px;
  }

  @media (max-width: 430px) {
    flex-direction: column; // Bei kleinen Bildschirmen wird der Text über das Bild gesetzt
    align-items: start;
    gap: 0;
    margin-bottom: 56px;
  }
`;

// Container für den Textbereich (Überschrift, Beschreibung und Button)
export const HeadlineContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 28px; // Abstand zwischen den Elementen (Überschrift, Beschreibung, Button)

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    width: 100%; // Vollbreite auf kleineren Bildschirmen
    gap: 20px;
    margin-bottom: 32px;
  }
`;

// Container für den Beschreibungstext, der Zeilenumbrüche ermöglicht
export const PContainer = styled.p`
  white-space: pre-line; // Zeilenumbrüche beachten
`;

// Container für das Bild
export const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  overflow: hidden; // Verhindert, dass das Bild überläuft

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 430px) {
    width: 100%; // Das Bild nimmt auf kleineren Bildschirmen die volle Breite ein
    height: 511px;
  }
`;

// Stil für das Bild, einschließlich der dynamischen Bildposition
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover; // Skaliert das Bild, sodass es den Container vollständig ausfüllt
  object-position: center; // Standardmäßig in der Mitte positioniert

  @media (max-width: 430px) {
    object-position: ${(props) =>
      props.$objectPosition ||
      "30%"}; // Position des Bildes auf kleineren Bildschirmen
  }
`;
