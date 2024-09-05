import styled from "styled-components";
import MiniArrowSVG from "../UI/Buttons/MiniArrowSVG.tsx";
import ArrowSVGInline from "../UI/Buttons/ArrowSVG";
import BookSVG from "../UI/Buttons/BookSVG.tsx";
import EyeSVG from "../UI/Buttons/EyeSVG.tsx";
import PeopleSVG from "../UI/Buttons/PeopleSVG.tsx";
import BrainSVG from "../UI/Buttons/BrainSVG.tsx";
import VRSVG from "../UI/Buttons/VRSVG.tsx";
import { useCAMILStore } from "../stores/useCAMILStore.tsx";
import React, { useState, useEffect } from "react";
import useDarkModeStore from "../stores/useDarkModeStore";

const CAMILDiagramm: React.FC = () => {
  const { activeCircle, setActiveCircle, title, content } = useCAMILStore();
  const { isDarkModeOn } = useDarkModeStore();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890); // Adjust the value to your desired mobile breakpoint
    };

    handleResize(); // Call once to set the initial state

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DiagrammWrapper>
      <InfoCTAWrapper>
        <InfoWrapper>
          <InfoTextContainer>
            <h3>{title}</h3>
            <p>{content}</p>
          </InfoTextContainer>
          <VerticalText>mehr Information</VerticalText>
        </InfoWrapper>
        {isMobile && (
          <CircleWrapper>
            <CircleContainer>
              <Circle
                $active={activeCircle === 1}
                onClick={() => setActiveCircle(1)}
              >
                <SVGIconContainer>
                  <BookSVG
                    color={
                      activeCircle === 1
                        ? "var(--leviko-black)"
                        : "var(--leviko-white)"
                    }
                  />
                </SVGIconContainer>
              </Circle>
              <p>Content</p>
            </CircleContainer>
            <StyledArrowSVGInline>
              <ArrowSVGInline
                color={
                  isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
                }
              />
            </StyledArrowSVGInline>
            {/* Circle 2 */}
            <CircleContainer>
              <Circle
                $active={activeCircle === 2}
                onClick={() => setActiveCircle(2)}
              >
                <SVGIconContainer>
                  <PeopleSVG
                    color={
                      activeCircle === 2
                        ? "var(--leviko-black)"
                        : "var(--leviko-white)"
                    }
                  />
                </SVGIconContainer>
              </Circle>
              <p>Audience</p>
            </CircleContainer>
            <StyledArrowSVGInline>
              <ArrowSVGInline
                color={
                  isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
                }
              />
            </StyledArrowSVGInline>
            {/* Circle 3 */}
            <CircleContainer>
              <Circle
                $active={activeCircle === 3}
                onClick={() => setActiveCircle(3)}
              >
                <SVGIconContainer>
                  <VRSVG
                    color={
                      activeCircle === 3
                        ? "var(--leviko-black)"
                        : "var(--leviko-white)"
                    }
                  />
                </SVGIconContainer>
              </Circle>
              <p>Media</p>
            </CircleContainer>
            <StyledArrowSVGInline>
              <ArrowSVGInline
                color={
                  isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
                }
              />
            </StyledArrowSVGInline>
            {/* Circle 4 */}
            <CircleContainer>
              <Circle
                $active={activeCircle === 4}
                onClick={() => setActiveCircle(4)}
              >
                <SVGIconContainer>
                  <EyeSVG
                    color={
                      activeCircle === 4
                        ? "var(--leviko-black)"
                        : "var(--leviko-white)"
                    }
                  />
                </SVGIconContainer>
              </Circle>
              <p>Implementation</p>
            </CircleContainer>
            <StyledArrowSVGInline>
              <ArrowSVGInline
                color={
                  isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
                }
              />
            </StyledArrowSVGInline>
            {/* Circle 5 */}
            <CircleContainer>
              <Circle
                $active={activeCircle === 5}
                onClick={() => setActiveCircle(5)}
              >
                <SVGIconContainer>
                  <BrainSVG
                    color={
                      activeCircle === 5
                        ? "var(--leviko-black)"
                        : "var(--leviko-white)"
                    }
                  />
                </SVGIconContainer>
              </Circle>
              <p>Learning</p>
            </CircleContainer>
          </CircleWrapper>
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
      </InfoCTAWrapper>

      {!isMobile && (
        <CircleWrapper>
          <CircleContainer>
            <Circle
              $active={activeCircle === 1}
              onClick={() => setActiveCircle(1)}
            >
              <SVGIconContainer>
                <BookSVG
                  color={
                    activeCircle === 1
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </SVGIconContainer>
            </Circle>
            <p>Content</p>
          </CircleContainer>
          <StyledArrowSVGInline>
            <ArrowSVGInline
              color={
                isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
              }
            />
          </StyledArrowSVGInline>
          {/* Circle 2 */}
          <CircleContainer>
            <Circle
              $active={activeCircle === 2}
              onClick={() => setActiveCircle(2)}
            >
              <SVGIconContainer>
                <PeopleSVG
                  color={
                    activeCircle === 2
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </SVGIconContainer>
            </Circle>
            <p>Audience</p>
          </CircleContainer>
          <StyledArrowSVGInline>
            <ArrowSVGInline
              color={
                isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
              }
            />
          </StyledArrowSVGInline>
          {/* Circle 3 */}
          <CircleContainer>
            <Circle
              $active={activeCircle === 3}
              onClick={() => setActiveCircle(3)}
            >
              <SVGIconContainer>
                <VRSVG
                  color={
                    activeCircle === 3
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </SVGIconContainer>
            </Circle>
            <p>Media</p>
          </CircleContainer>
          <StyledArrowSVGInline>
            <ArrowSVGInline
              color={
                isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
              }
            />
          </StyledArrowSVGInline>
          {/* Circle 4 */}
          <CircleContainer>
            <Circle
              $active={activeCircle === 4}
              onClick={() => setActiveCircle(4)}
            >
              <SVGIconContainer>
                <EyeSVG
                  color={
                    activeCircle === 4
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </SVGIconContainer>
            </Circle>
            <p>Implementation</p>
          </CircleContainer>
          <StyledArrowSVGInline>
            <ArrowSVGInline
              color={
                isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"
              }
            />
          </StyledArrowSVGInline>
          {/* Circle 5 */}
          <CircleContainer>
            <Circle
              $active={activeCircle === 5}
              onClick={() => setActiveCircle(5)}
            >
              <SVGIconContainer>
                <BrainSVG
                  color={
                    activeCircle === 5
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </SVGIconContainer>
            </Circle>
            <p>Learning</p>
          </CircleContainer>
        </CircleWrapper>
      )}
    </DiagrammWrapper>
  );
};

export default CAMILDiagramm;

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

export const InfoWrapper = styled.div`
  display: flex;
  background-color: var(--leviko-green);
  color: var(--leviko-black);

  @media (max-width: 430px) {
    margin-top: 20px;
  }
`;

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

export const CTAText = styled.p`
  font-size: 16px;
  color: var(--leviko-black);

  @media (max-width: 430px) {
    width: 210px;
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
