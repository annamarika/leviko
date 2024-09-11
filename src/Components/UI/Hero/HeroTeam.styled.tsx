import styled from "styled-components";

/**
 * Props used for the ImageContainer to control background image and dark mode styles.
 */
interface ImageContainerProps {
  $imgSrc?: string;
  $objectPosition?: string;
  $isDarkModeOn: boolean;
}

/**
 * The ImageContainer styled-component defines a full-screen container with a background image.
 * It supports dark mode styling with a blend effect overlay.
 */
export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  justify-content: start;
  align-items: start;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 200px;
  margin-bottom: 100px;
  overflow: hidden;
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-position: ${(props) => props.$objectPosition || "center center"};
  background-repeat: no-repeat;

  /* Dark mode and light mode overlay */
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

/**
 * Headline styled-component styles the headline text inside the HeroTeam component.
 * It adjusts the color based on dark mode and ensures responsive behavior.
 */
export const Headline = styled.h1<ImageContainerProps>`
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
