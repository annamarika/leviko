// MarqueePraxispartner.styled.ts
import styled from "styled-components";

// Container für das gesamte Marquee (laufende Logos)
export const MarqueeContainer = styled.div`
  background-color: var(--leviko-blue);
  padding: 30px 0;
  margin: 100px 0;
  position: relative;

  @media (max-width: 1200px) {
    margin: 80px 0;
    padding: 21px 0; // Anpassung der Höhe für mittlere Bildschirme
  }

  @media (max-width: 1024px) {
    margin: 56px 0;
    padding: 26px 0; // Anpassung der Höhe für kleinere Bildschirme
  }
`;

// Wrapper für das Marquee (flexibles Layout für die Logos)
export const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 20px; // Abstand zwischen den Logos
`;

// Stil für die Logos im Marquee
export const StyledImage = styled.img`
  width: 160px;
  height: auto;
  margin: 0 20px; // Abstand um jedes Logo

  @media (max-width: 1024px) {
    width: 100px; // Logos verkleinern für kleinere Bildschirme
  }

  @media (max-width: 430px) {
    width: 80px; // Noch kleinere Logos für mobile Geräte
  }
`;

// Container für jedes Logo, das als Link dient
export const ImageContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Text Container, der den Erklärtext unter dem Marquee enthält
export const TextContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; // Text zentriert darstellen
  margin: 0 160px 100px 160px; // Rand um den Textbereich

  @media (max-width: 1200px) {
    margin: 0 24px 100px 24px; // Anpassung der Ränder für mittlere Bildschirme
  }

  @media (max-width: 1024px) {
    margin: 0 24px 80px 24px; // Anpassung für kleinere Bildschirme
  }

  @media (max-width: 430px) {
    margin: 0 24px 56px 24px; // Noch kleinere Ränder für mobile Geräte
  }
`;
