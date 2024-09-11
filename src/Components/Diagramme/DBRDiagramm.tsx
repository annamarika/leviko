import React, { useState, useEffect } from "react";
import { useDBRStore } from "../stores/useDBRStore";
import DBRSVG from "../UI/SVG/DBRsvg";
import useDarkModeStore from "../stores/useDarkModeStore";
import {
  DiagrammWrapper,
  InfoWrapper,
  InfoContainer,
  InfoTextWrapper,
  InfoTextContainer,
  VerticalText,
  DiagrammContainer,
  CTAWrapper,
  SVGWrapper,
  SVGContainer,
  MiniArrowSVGWrapper,
  StyledMiniArrowSVG,
  SVGCircle,
  CTAText,
  CircleContainer,
  Circle,
  Rectangle,
} from "../UI/Diagramme/DBRDiagramm.styled.tsx";

const DBRDiagramm: React.FC = () => {
  const { selectedBox, contentMap, selectBox } = useDBRStore();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { isDarkModeOn } = useDarkModeStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the value to your desired mobile breakpoint
    };

    handleResize(); // Call once to set the initial state

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCircleClick = (boxId: string) => {
    selectBox(boxId);
  };

  return (
    <DiagrammWrapper>
      <InfoWrapper>
        <InfoContainer>
          <InfoTextWrapper $isDarkModeOn={isDarkModeOn}>
            <InfoTextContainer>
              <h3>{contentMap[selectedBox].headline}</h3>
              <div>{contentMap[selectedBox].description}</div>
            </InfoTextContainer>
            <VerticalText>mehr Information</VerticalText>
          </InfoTextWrapper>
        </InfoContainer>
        {isMobile && (
          <DiagrammContainer>
            <DBRSVG />
            <CircleContainer>
              {[
                "Requirements",
                "Theory",
                "Design",
                "Implementation",
                "Analysis",
                "ImplicationofTheory",
                "ReDesign",
              ].map((boxId) =>
                boxId === "ImplicationofTheory" ? (
                  <Rectangle
                    key={boxId}
                    onClick={() => handleCircleClick(boxId)}
                    $isSelected={selectedBox === boxId}
                  >
                    IOF
                  </Rectangle>
                ) : (
                  <Circle
                    key={boxId}
                    onClick={() => handleCircleClick(boxId)}
                    $isSelected={selectedBox === boxId}
                    $isLast={boxId === "ReDesign"} // to apply specific styles for the last circle
                  >
                    {boxId === "ReDesign" ? "RE" : boxId[0]}
                  </Circle>
                )
              )}
            </CircleContainer>
          </DiagrammContainer>
        )}
        <CTAWrapper>
          <SVGWrapper>
            <SVGContainer>
              <MiniArrowSVGWrapper>
                <StyledMiniArrowSVG />
              </MiniArrowSVGWrapper>
              <SVGCircle />
            </SVGContainer>
          </SVGWrapper>
          <CTAText $isDarkModeOn={isDarkModeOn}>
            Klick auf die einzelnen Felder für mehr Information.
          </CTAText>
        </CTAWrapper>
      </InfoWrapper>
      {!isMobile && (
        <DiagrammContainer>
          <DBRSVG />
        </DiagrammContainer>
      )}
    </DiagrammWrapper>
  );
};

export default DBRDiagramm;
