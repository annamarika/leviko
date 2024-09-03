import styled from "styled-components";
import { useDBRStore } from "../stores/useDBRStore";
import DBRSVG from "../UI/SVG/DBRsvg";
import MiniArrowSVG from "../UI/Buttons/MiniArrowSVG.tsx";
import React, { useState, useEffect } from "react";

const DBRDiagramm: React.FC = () => {
  const { selectedBox, contentMap, selectBox } = useDBRStore();

  const [isMobile, setIsMobile] = useState<boolean>(false);

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
          <InfoTextWrapper>
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
          <CTAText>
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

export const DiagrammWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-right: 160px;
  margin-left: 160px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
  }

  @media (max-width: 430px) {
    padding: 0 0;
    align-items: start;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  align-items: start;
  background-color: var(--leviko-green);
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 40px 64px;
  gap: 28px;

  @media (max-width: 1330px) {
    padding: 24px 20px 24px 64px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px 20px 10px;
  }
`;

export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  @media (max-width: 430px) {
    padding: 10px 10px;
  }
`;

export const DiagrammContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    padding: 10px 10px;
    flex-direction: column;
    gap: 32px;
  }
`;

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
  }
`;

export const SVGWrapper = styled.div``;

export const SVGContainer = styled.div`
  position: relative;
`;
export const MiniArrowSVGWrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
`;

export const StyledMiniArrowSVG = styled(MiniArrowSVG)`
  width: 31px;
  height: 34px;

  @media (max-width: 430px) {
    width: 20px;
    height: 21px;
  }
`;
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

export const CTAText = styled.p`
  font-size: 16px;

  @media (max-width: 430px) {
    width: 210px;
  }
`;

export const CircleContainer = styled.div`
  display: none;

  @media (max-width: 430px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const Circle = styled.div<{ $isSelected: boolean; $isLast?: boolean }>`
  background-color: ${({ $isSelected, $isLast }) =>
    $isLast && $isSelected
      ? "#AAFE83" // Green when the last circle is selected
      : $isLast
      ? "#B4CEE6" // Default color for the last circle
      : $isSelected
      ? "#AAFE83" // Green for other selected circles
      : "#182EC0"}; // Default color for other circles
  color: ${({ $isSelected, $isLast }) =>
    $isLast && $isSelected
      ? "var(--leviko-black)"
      : $isLast
      ? "var(--leviko-black)"
      : $isSelected
      ? "#0D0D0D"
      : "#F2F2F2"};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Blatant, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export const Rectangle = styled.div<{ $isSelected: boolean }>`
  background: ${({ $isSelected }) =>
    $isSelected
      ? "#AAFE83"
      : "linear-gradient(90deg, #182EC0 0%, #B4CEE6 100%)"};
  color: ${({ $isSelected }) => ($isSelected ? "#0D0D0D" : "#F2F2F2")};
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Blatant, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;
