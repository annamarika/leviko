// CAMILDiagramm.styled.tsx

import styled from "styled-components";
import MiniArrowSVG from "../../UI/Buttons/MiniArrowSVG.tsx";

// Wrapper for the entire diagram section
export const DiagrammWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-right: 160px;
  margin-left: 160px;
  gap: 80px;
  align-items: stretch;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
    margin-top: 0;
  }

  @media (max-width: 430px) {
    margin-bottom: 24px;
    gap: 10px;
  }
`;

// Wrapper for the information and call to action (CTA) section
export const InfoCTAWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;

  @media (max-width: 890px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 430px) {
    gap: 0;
  }
`;

// Container for the information section
export const InfoWrapper = styled.div`
  display: flex;
  background-color: var(--leviko-green);
  color: var(--leviko-black);

  @media (max-width: 430px) {
    margin-top: 20px;
  }
`;

// Container for the text inside the information section
export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 40px 64px;
  gap: 28px;
  color: var(--leviko-black);

  @media (max-width: 1330px) {
    padding: 24px 20px 24px 64px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px 20px 10px;
  }
`;

// Vertical text element (rotated text)
export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  align-self: start;

  @media (max-width: 890px) {
    padding: 10px 10px;
  }

  @media (max-width: 430px) {
  }
`;

// Wrapper for the call to action (CTA) section
export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--leviko-green);
  height: fit-content;
  padding: 20px;
  flex-shrink: 0;
  gap: 10px;
  width: 352px;
  height: auto;
  margin-left: auto;

  @media (max-width: 1330px) {
    padding: 24px 20px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px;
    gap: 20px;
    width: fit-content;
    align-self: flex-end;
    margin-right: -24px;
    margin-bottom: 20px;
  }
`;

// Text inside the CTA section
export const CTAText = styled.p`
  font-size: 16px;
  color: var(--leviko-black);

  @media (max-width: 430px) {
    width: 210px;
  }
`;

// Wrapper for the SVG icons in the CTA section
export const SVGWrapper = styled.div``;

// Container for the SVG icons in the CTA section
export const SVGContainer = styled.div`
  position: relative;
`;

// Wrapper for the mini arrow SVG icon
export const MiniArrowSVGWrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
`;

// Styled component for the mini arrow SVG
export const StyledMiniArrowSVG = styled(MiniArrowSVG)`
  width: 31px;
  height: 34px;

  @media (max-width: 430px) {
    width: 20px;
    height: 21px;
  }
`;

// Styled component for the inline arrow SVG
export const StyledArrowSVGInline = styled.div`
  margin-top: -32px;
  width: 3vw;
  height: 3vh;
  transform: rotate(-90deg);

  svg {
    width: 100%; // Make the SVG fill the container
    height: 100%;
  }
`;

// Circle for the SVG icon in the CTA section
export const SVGCircle = styled.div`
  background-color: var(--leviko-black);
  height: 40px;
  width: 40px;
  border-radius: 50%;

  @media (max-width: 430px) {
    height: 25px;
    width: 25px;
  }
`;

// Container for the SVG icons in the diagram circles
export const SVGIconContainer = styled.div`
  height: 5vh;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    height: 10vh;
    width: 10vw;
  }
`;

// Wrapper for the circle elements in the diagram
export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 430px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

// Container for each individual circle
export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  gap: 28px;

  @media (max-width: 430px) {
    padding-top: 10px;
    width: 80px;
  }
`;

// Styled circle element
export const Circle = styled.div<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? "var(--leviko-green)" : "var(--leviko-blue)"};
  height: 10vw;
  width: 10vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 430px) {
    height: 15vw;
    width: 15vw;
  }
`;
