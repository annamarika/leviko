import React, { useState, useEffect } from "react";
import { useCAMILStore } from "../stores/useCAMILStore.tsx";
import useDarkModeStore from "../stores/useDarkModeStore";
import {
  DiagrammWrapper,
  InfoCTAWrapper,
  InfoWrapper,
  InfoTextContainer,
  VerticalText,
  CTAWrapper,
  CTAText,
  SVGWrapper,
  SVGContainer,
  MiniArrowSVGWrapper,
  StyledMiniArrowSVG,
  StyledArrowSVGInline,
  SVGCircle,
  SVGIconContainer,
  CircleWrapper,
  CircleContainer,
  Circle,
} from "../UI/Diagramme/CAMILDiagramm.styled.tsx";
import ArrowSVGInline from "../UI/Buttons/ArrowSVG";
import BookSVG from "../UI/Buttons/BookSVG.tsx";
import EyeSVG from "../UI/Buttons/EyeSVG.tsx";
import PeopleSVG from "../UI/Buttons/PeopleSVG.tsx";
import BrainSVG from "../UI/Buttons/BrainSVG.tsx";
import VRSVG from "../UI/Buttons/VRSVG.tsx";

const CAMILDiagramm: React.FC = () => {
  const { activeCircle, setActiveCircle, title, content } = useCAMILStore();
  const { isDarkModeOn } = useDarkModeStore();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890);
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
            {/* Circle 1 */}
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
          {/* Circle 1 */}
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
