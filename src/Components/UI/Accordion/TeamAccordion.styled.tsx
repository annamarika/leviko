import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import ArrowSVG from "../../UI/Buttons/ArrowSVG.tsx";

/**
 * Props for conditional rendering based on dark mode and accordion state.
 */
interface StyledArrowProps {
  $rotate?: boolean;
}

interface StyledImageProps {
  $objectPosition?: string;
}

/**
 * Wrapper for the entire accordion component.
 */
export const AccordionWrapper = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 160px 100px 160px;

  @media (max-width: 1330px) {
    margin: 0 24px 100px 24px;
  }

  @media (max-width: 1024px) {
    margin: 0 24px 80px 24px;
  }

  @media (max-width: 430px) {
    margin: 0 20px 56px 20px;
  }
`;

/**
 * Container for each accordion item, with alternate colors and dark mode support.
 */
export const AccordionContainer = styled(AccordionItem)<{
  $alternate: boolean;
  $isDarkModeOn: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 65px;
  border: solid 4px;
  border-color: var(--leviko-blue);
  background-color: ${({ $alternate, $isDarkModeOn }) =>
    $isDarkModeOn && $alternate
      ? "var(--leviko-black)"
      : $alternate
      ? "var(--leviko-white)"
      : "var(--leviko-blue)"};
  transition: background-color 0.8s ease, color 0.3s ease;

  color: ${({ $alternate, $isDarkModeOn }) =>
    $alternate && !$isDarkModeOn
      ? "var(--leviko-black)"
      : "var(--leviko-white)"};
  width: 100%;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 40px 24px;
  }

  @media (max-width: 430px) {
    gap: 32px;
    padding: 32px 24px;
  }
`;

/**
 * Button for each accordion item, handling opening and closing of the content.
 */
export const AccordionButton = styled(AccordionItemButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    gap: 20px;
    flex-direction: row;
    align-items: center;
  }
`;

/**
 * Wrapper for the headline and description.
 */
export const HeadlineWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

/**
 * Container for the title and description.
 */
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  align-items: start;
  width: 50%;

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

/**
 * Heading component for the accordion item.
 */
export const AccordionHeading = styled(AccordionItemHeading)`
  font-size: 43px;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

/**
 * Container for logos, displaying two logos side by side.
 */
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  width: 50%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (max-width: 430px) {
    justify-content: start;
    width: 100%;
  }
`;

/**
 * Container for image elements with conditional hiding.
 */
export const ImageContainer = styled.div<{ $hide?: boolean }>`
  ${({ $hide }) => $hide && "display: none;"}
`;

/**
 * Styled image component for logos and profile pictures.
 */
export const StyledImage = styled.img`
  width: 154px;
  height: auto;
  margin: 0 20px;

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: 430px) {
    width: 60px;
    margin: 0 20px 0 0;
  }
`;

/**
 * Container for the arrow icon that indicates accordion state.
 */
export const ArrowContainer = styled.div<StyledArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  transform: ${({ $rotate }) => ($rotate ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

/**
 * Styled SVG for the arrow icon.
 */
export const StyledArrowSVG = styled(ArrowSVG)`
  width: 100%;

  &:hover {
    color: var(--leviko-black);
  }
`;

/**
 * Accordion panel content container.
 */
export const AccordionPanel = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

/**
 * Container for profile images in the accordion panel.
 */
export const ProfilImageContainer = styled.div`
  width: 50%;
  aspect-ratio: 1/1;
  overflow: hidden;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

/**
 * Styled image for the profile picture in the accordion panel.
 */
export const ProfileStyledImage = styled.img<StyledImageProps>`
  width: 100%;
  aspect-ratio: 1/1;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center
    ${({ $objectPosition }) => $objectPosition || "center"};
`;

/**
 * Container for the text content in the accordion panel.
 */
export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

/**
 * Container for the button inside the accordion panel.
 */
export const ButtonContainer = styled.div`
  height: auto;
  width: auto;
`;
