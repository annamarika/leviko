// HeroProjekt.styled.ts
import styled from "styled-components";

// Interface für die Props des ImageContainer, um die Bild-URL und andere Stile dynamisch zu steuern
interface ImageContainerProps {
  $imgSrc?: string;
  $objectPosition?: string;
  $isDarkModeOn: boolean;
}

// Container für das Hintergrundbild des Heldenbereichs
export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 98px;
  margin-bottom: 100px;
  overflow: hidden;
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-position: ${(props) => props.$objectPosition || "center center"};
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.$isDarkModeOn
        ? "rgba(13, 13, 13, 0.5)"
        : "rgba(255, 255, 255, 0.5)"};
    mix-blend-mode: ${(props) => (props.$isDarkModeOn ? "darken" : "lighten")};
    z-index: 1;
  }

  @media (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media (max-width: 430px) {
    margin-bottom: 56px;
  }
`;

// Interface für die Props der Headline, damit der Text Dark Mode unterstützt
interface HeadlineProps {
  $isDarkModeOn: boolean;
}

// Stil für die Überschrift im Heldenbereich
export const Headline = styled.h1<HeadlineProps>`
  z-index: 2;
  color: ${(props) =>
    props.$isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"};
  margin: 0 160px;
  width: 60%;

  @media (max-width: 1330px) {
    margin: 0 24px;
    width: 80%;
  }

  @media (max-width: 430px) {
    margin: 0 20px;
    width: 100%;
  }
`;
