// DiagrammIntro.tsx
import React from "react";
import {
  DiagrammIntroContainer,
  Description,
  CTAWrapper,
  CTAText,
  SVGWrapper,
  SVGContainer,
  MiniArrowSVGWrapper,
  StyledMiniArrowSVG,
  SVGBox,
  StyledTpackSVG,
  SVGCircle,
} from "../UI/Diagramme/DiagrammIntro.styled.tsx";

/**
 * DiagrammIntro component for displaying a headline, description, and various SVGs.
 * The displayed SVG can change based on the `displayedSVG` prop.
 */
interface DiagrammIntroProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
  displayedSVG?: "box" | "tpack" | "circle";
}

const DiagrammIntro: React.FC<DiagrammIntroProps> = ({
  headline,
  description,
  displayedSVG = "box",
}) => {
  return (
    <DiagrammIntroContainer>
      <h3>{headline}</h3>
      <Description>{description}</Description>
      <CTAWrapper>
        <SVGWrapper>
          <SVGContainer>
            <MiniArrowSVGWrapper $displayedSVG={displayedSVG}>
              <StyledMiniArrowSVG />
            </MiniArrowSVGWrapper>

            {/* Conditional rendering based on displayedSVG prop */}
            {displayedSVG === "box" && <SVGBox />}
            {displayedSVG === "tpack" && <StyledTpackSVG />}
            {displayedSVG === "circle" && <SVGCircle />}
          </SVGContainer>
        </SVGWrapper>
        <CTAText>Klick auf die einzelnen Felder für mehr Information.</CTAText>
      </CTAWrapper>
    </DiagrammIntroContainer>
  );
};

export default DiagrammIntro;
