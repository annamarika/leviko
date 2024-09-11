// KontaktTeaser.styled.ts
import styled from "styled-components";
import { Button as BaseButton } from "../Buttons/Button.styled.tsx";

// Interface für Dark Mode, um die Hintergrundfarbe dynamisch zu steuern
interface DarkModeProps {
  $isDarkModeOn: boolean;
}

// Wrapper für den gesamten KontaktTeaser mit Dark Mode Unterstützung
export const KontaktTeaserWrapper = styled.div<DarkModeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};
  padding: 100px 0;
  transition: background-color 0.8s ease, color 0.3s ease;

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  @media (max-width: 430px) {
    padding: 56px 0;
    height: 100vh; // Höhe auf kleineren Bildschirmen
  }
`;

// Container für den Inhalt des Teasers (Überschrift, Beschreibung und Button)
export const KontaktTeaserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 160px;
  padding: 40px 96px;
  background-color: var(--leviko-green);
  color: var(--leviko-black);
  min-height: 230px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
    min-height: none; // Anpassung für kleinere Bildschirme
  }

  @media (max-width: 1024px) {
    margin: 0px 24px;
    padding: 40px 23px;
  }

  @media (max-width: 430px) {
    align-items: start;
    gap: 32px;
    justify-content: center;
    padding: 100px 23px;
    flex-direction: column; // Für mobile Bildschirme vertikal ausrichten
  }
`;

// Container für die Überschrift (h3)
export const HeadlineContainer = styled.h3`
  order: 1;
  align-self: flex-start; // Positioniert die Überschrift oben links

  @media (max-width: 430px) {
    order: 0; // Ändert die Reihenfolge auf kleinen Bildschirmen
  }
`;

// Stil für den Button, der von der Basis-Schaltfläche erbt
export const Button = styled(BaseButton)`
  order: 2;
  align-self: flex-end;
  position: absolute; // Absolut positioniert auf größeren Bildschirmen
  height: fit-content;

  @media (max-width: 430px) {
    order: 0; // Reihenfolge auf mobilen Bildschirmen
    align-self: flex-start;
    position: relative; // Positionierung anpassen
  }
`;

// Container für die Beschreibungstexte
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; // Abstand zwischen den beiden Absätzen
  width: 70%;
  order: 3;

  @media (max-width: 1024px) {
    width: 40%; // Breite für mittelgroße Bildschirme
  }

  @media (max-width: 430px) {
    width: 100%; // Volle Breite auf mobilen Geräten
    order: 0; // Reihenfolge auf mobilen Bildschirmen ändern
  }
`;
