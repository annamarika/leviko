import ArrowSVGInline from "../UI/Buttons/ArrowSVG";
import { useKerresStore } from "../stores/useKerresStore.tsx";
import React, { useState, useEffect } from "react";
import useDarkModeStore from "../stores/useDarkModeStore";
import {
  DiagrammWrapper,
  InfoCTAWrapper,
  InfoWrapper,
  InfoTextContainer,
  VerticalText,
  CTAOuterWrapper,
  CTAWrapper,
  CTAText,
  SVGWrapper,
  SVGContainer,
  MiniArrowSVGWrapper,
  StyledMiniArrowSVG,
  SVGBox,
  BoxWrapper,
  BoxContainer,
  BoxTextContainer,
  MainBox,
  Box,
  ExtraBox,
  StyledArrowSVGInline,
  StyledArrowSVGDown,
} from "../UI/Diagramme/KerresDiagramm.styled.tsx";

const KerresDiagramm: React.FC = () => {
  const {
    activeBox,
    setActiveBox,
    activeBoxText,
    setActiveBoxText,
    visibleContainers,
    toggleContainerVisibility,
    title,
    content,
    boxContents,
  } = useKerresStore();

  const handleBoxClick = (boxId: number) => {
    setActiveBox(boxId);
  };

  const handleBoxTextContainerClick = (boxId: number, containerId: number) => {
    setActiveBox(boxId);
    setActiveBoxText(containerId === activeBoxText ? null : containerId);
  };

  const renderBoxTextContainer = (
    boxId: number,
    boxTextId: number,
    title: string,
    content: string
  ) => (
    <BoxTextContainer
      key={boxTextId}
      onClick={() => handleBoxTextContainerClick(boxId, boxTextId)}
    >
      <Box $active={activeBoxText === boxTextId}>
        <p>{title}</p>
      </Box>
      <ExtraBox $active={activeBoxText === boxTextId}>
        <p>{content}</p>
      </ExtraBox>
    </BoxTextContainer>
  );

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 630);
    };

    handleResize(); // Initial state detection
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isDarkModeOn } = useDarkModeStore();

  return (
    <DiagrammWrapper>
      {/* Info and CTA Wrapper */}
      <InfoCTAWrapper>
        <InfoWrapper>
          <InfoTextContainer>
            <h3>{title}</h3>
            <p>{content}</p>
          </InfoTextContainer>
          <VerticalText>mehr Information</VerticalText>
        </InfoWrapper>

        <CTAOuterWrapper>
          <CTAWrapper>
            <SVGWrapper>
              <SVGContainer>
                <MiniArrowSVGWrapper>
                  <StyledMiniArrowSVG />
                </MiniArrowSVGWrapper>
                <SVGBox />
              </SVGContainer>
            </SVGWrapper>
            <CTAText>
              Klick auf die einzelnen Felder für mehr Information.
            </CTAText>
          </CTAWrapper>

          {!isMobile && (
            <CTAWrapper>
              <SVGWrapper>
                <SVGContainer>
                  <StyledArrowSVGDown $expanded={!!visibleContainers[0]}>
                    <ArrowSVGInline color="var(--leviko-white)" />
                  </StyledArrowSVGDown>
                </SVGContainer>
              </SVGWrapper>
              <CTAText>
                Klick auf die runden Pfeile für ein ausführliches Diagramm.
              </CTAText>
            </CTAWrapper>
          )}
        </CTAOuterWrapper>
      </InfoCTAWrapper>

      {/* Mobile Version */}
      {isMobile && (
        <BoxWrapper>
          {boxContents.map((box, index) => (
            <React.Fragment key={box.boxId}>
              <BoxContainer>
                <MainBox
                  $active={activeBox === box.boxId}
                  onClick={() => handleBoxClick(box.boxId)}
                >
                  <p>{box.title}</p>
                </MainBox>
                <StyledArrowSVGDown
                  $expanded={!!visibleContainers[box.boxId]}
                  onClick={() => toggleContainerVisibility(box.boxId)}
                >
                  <ArrowSVGInline
                    color={
                      isDarkModeOn
                        ? "var(--leviko-white)"
                        : "var(--leviko-black)"
                    }
                  />
                </StyledArrowSVGDown>
                {visibleContainers[box.boxId] && (
                  <>
                    {box.items.map((item) =>
                      renderBoxTextContainer(
                        box.boxId,
                        item.id,
                        item.title,
                        item.content
                      )
                    )}
                  </>
                )}
              </BoxContainer>
              {/* Conditionally render arrow only if it's not the last box */}
              {index < boxContents.length - 1 && (
                <StyledArrowSVGInline key={`arrow-${box.boxId}`}>
                  <ArrowSVGInline
                    color={
                      isDarkModeOn
                        ? "var(--leviko-white)"
                        : "var(--leviko-black)"
                    }
                  />
                </StyledArrowSVGInline>
              )}
            </React.Fragment>
          ))}
        </BoxWrapper>
      )}

      {/* Desktop Version */}
      {!isMobile && (
        <BoxWrapper>
          {boxContents.map((box, index) => (
            <React.Fragment key={box.boxId}>
              <BoxContainer>
                <MainBox
                  $active={activeBox === box.boxId}
                  onClick={() => handleBoxClick(box.boxId)}
                >
                  <p>{box.title}</p>
                </MainBox>

                <StyledArrowSVGDown
                  $expanded={!!visibleContainers[box.boxId]}
                  onClick={() => toggleContainerVisibility(box.boxId)}
                >
                  <ArrowSVGInline color={"var(--leviko-white)"} />
                </StyledArrowSVGDown>
                {visibleContainers[box.boxId] && (
                  <>
                    {box.items.map((item) =>
                      renderBoxTextContainer(
                        box.boxId,
                        item.id,
                        item.title,
                        item.content
                      )
                    )}
                  </>
                )}
              </BoxContainer>

              {/* Conditionally render arrow only if it's not the last box */}
              {index < boxContents.length - 1 && (
                <StyledArrowSVGInline key={`arrow-${box.boxId}`}>
                  <ArrowSVGInline
                    color={
                      isDarkModeOn
                        ? "var(--leviko-white)"
                        : "var(--leviko-black)"
                    }
                  />
                </StyledArrowSVGInline>
              )}
            </React.Fragment>
          ))}
        </BoxWrapper>
      )}
    </DiagrammWrapper>
  );
};

export default KerresDiagramm;
