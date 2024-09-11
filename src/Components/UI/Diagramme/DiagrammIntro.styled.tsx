// DiagrammIntro.styled.tsx
import styled from "styled-components";
import MiniArrowSVG from "../Buttons/MiniArrowSVG";
import TpackSVGIcon from "../Buttons/TpackSVGIcon";

/**
 * Container for the DiagrammIntro component, setting up margins, paddings, and layout.
 */
export const DiagrammIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 430px) {
    padding: 0;
    flex-direction: column;
    margin-bottom: 0;
    align-items: stretch;
  }
`;

/**
 * Description section within the DiagrammIntro, managing top and bottom margins.
 */
export const Description = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 430px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

/**
 * CTA Wrapper for aligning the SVG and text in the call-to-action section.
 */
export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--leviko-green);
  height: fit-content;
  padding: 20px;
  gap: 10px;
  width: 352px;
  margin-left: auto;

  @media (max-width: 1330px) {
    padding: 24px 20px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px;
    gap: 20px;
    width: fit-content;
    margin-right: -24px;
    margin-bottom: 20px;
  }
`;

/**
 * Text displayed inside the call-to-action section.
 */
export const CTAText = styled.p`
  font-size: 16px;
  color: var(--leviko-black);

  @media (max-width: 430px) {
    width: 210px;
  }
`;

/**
 * Wrapper for the SVG content.
 */
export const SVGWrapper = styled.div``;

/**
 * Container for the SVG icons, with relative positioning for dynamic elements.
 */
export const SVGContainer = styled.div`
  position: relative;
`;

/**
 * Wrapper for the MiniArrowSVG, its position changes depending on the displayedSVG prop.
 */
export const MiniArrowSVGWrapper = styled.div<{
  $displayedSVG: "box" | "tpack" | "circle";
}>`
  position: absolute;
  top: 30%;
  left: 50%;

  ${(props) =>
    props.$displayedSVG === "tpack" &&
    `
    top: 50%;
    left: 60%;
  `}
  ${(props) =>
    props.$displayedSVG === "circle" &&
    `
    top: 50%;
    left: 50%;
  `}
`;

/**
 * Styles for the MiniArrowSVG element.
 */
export const StyledMiniArrowSVG = styled(MiniArrowSVG)`
  width: 31px;
  height: 34px;

  @media (max-width: 430px) {
    width: 20px;
    height: 21px;
  }
`;

/**
 * SVG box displayed when the "box" option is selected.
 */
export const SVGBox = styled.div`
  background-color: var(--leviko-black);
  height: 20px;
  width: 60px;

  @media (max-width: 430px) {
    height: 10px;
    width: 30px;
  }
`;

/**
 * Styled TPACK icon displayed when the "tpack" option is selected.
 */
export const StyledTpackSVG = styled(TpackSVGIcon)`
  height: 57px;
  width: 54px;

  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

/**
 * Circle SVG displayed when the "circle" option is selected.
 */
export const SVGCircle = styled.div`
  background-color: var(--leviko-black);
  height: 40px;
  width: 40px;
  border-radius: 50%;

  @media (max-width: 430px) {
    height: 10px;
    width: 30px;
  }
`;
