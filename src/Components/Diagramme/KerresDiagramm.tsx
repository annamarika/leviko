import styled from "styled-components";
import MiniArrowSVG from "../UI/Buttons/MiniArrowSVG.tsx";
import ArrowSVGInline from "../UI/Buttons/ArrowSVG";
import { useKerresStore } from "../stores/useKerresStore.tsx";
import React, { useState, useEffect } from "react";

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
      setIsMobile(window.innerWidth <= 630); // Adjust the value to your desired mobile breakpoint
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
          <BoxWrapper>
            {/* Box 1 */}
            <BoxContainer>
              <MainBox
                $active={activeBox === 1}
                onClick={() => handleBoxClick(1)}
              >
                <p>Technische Merkmale</p>
              </MainBox>
              <StyledArrowSVGDown
                $expanded={!!visibleContainers[1]}
                onClick={() => toggleContainerVisibility(1)}
              >
                <ArrowSVGInline color="var(--leviko-white)" />
              </StyledArrowSVGDown>
              {visibleContainers[1] && (
                <>
                  {renderBoxTextContainer(
                    1,
                    2,
                    "Kodierung",
                    "Art der Informationen (Text, Zahl, Ton, Bild)"
                  )}
                  {renderBoxTextContainer(
                    1,
                    3,
                    "Darstellungsqualität / Auflösung",
                    "Detailgenauigkeit und Klarheit der visuellen Präsentation."
                  )}
                  {renderBoxTextContainer(
                    1,
                    4,
                    "Interaktion",
                    "Möglichkeiten der Nutzer zur Interaktion mit der Technologie."
                  )}
                  {renderBoxTextContainer(
                    1,
                    5,
                    "Perspektive",
                    "Unterscheidung zwischen Third-Person und First-Person-Ansicht."
                  )}
                </>
              )}
            </BoxContainer>

            <StyledArrowSVGInline>
              <ArrowSVGInline color="var(--leviko-black)" />
            </StyledArrowSVGInline>

            {/* Box 2 */}
            <BoxContainer>
              <MainBox
                $active={activeBox === 6}
                onClick={() => handleBoxClick(6)}
              >
                <p>Erlebnis&shy;elemente</p>
              </MainBox>
              <StyledArrowSVGDown
                $expanded={!!visibleContainers[6]}
                onClick={() => toggleContainerVisibility(6)}
              >
                <ArrowSVGInline color="var(--leviko-white)" />
              </StyledArrowSVGDown>
              {visibleContainers[6] && (
                <>
                  {renderBoxTextContainer(
                    6,
                    7,
                    "Realitätsempfinden",
                    "Wahrnehmung der Realitätsnähe der Darstellung."
                  )}
                  {renderBoxTextContainer(
                    6,
                    8,
                    "Agieren vs. Rezipieren",
                    "Unterschied zwischen aktiver Teilnahme und passiver Rezeption."
                  )}
                  {renderBoxTextContainer(
                    6,
                    9,
                    "Soziale Präsenz",
                    "Gefühl der Anwesenheit anderer Personen in der virtuellen Umgebung."
                  )}
                  {renderBoxTextContainer(
                    6,
                    10,
                    "Ko-Präsenz",
                    "Gefühl der Zusammenarbeit mit anderen Personen."
                  )}
                  {renderBoxTextContainer(
                    6,
                    11,
                    "Raumerleben",
                    "Gefühl, sich in einem dreidimensionalen Raum zu befinden und sich darin bewegen zu können."
                  )}
                  {renderBoxTextContainer(
                    6,
                    12,
                    "Immersion",
                    "Intensität des Eintauchens in die virtuelle Welt."
                  )}
                  {renderBoxTextContainer(
                    6,
                    13,
                    "Bewegung",
                    "Wahrnehmung eigener Bewegungen innerhalb der virtuellen Welt."
                  )}
                  {renderBoxTextContainer(
                    6,
                    14,
                    "First-/Third-Person-Perspektive",
                    "Einfluss der Perspektive auf das Erleben."
                  )}
                </>
              )}
            </BoxContainer>

            <StyledArrowSVGInline>
              <ArrowSVGInline color="var(--leviko-black)" />
            </StyledArrowSVGInline>

            {/* Box 3 */}
            <BoxContainer>
              <MainBox
                $active={activeBox === 15}
                onClick={() => handleBoxClick(15)}
              >
                <p>Lern&shy;prozesse</p>
              </MainBox>
              <StyledArrowSVGDown
                $expanded={!!visibleContainers[15]}
                onClick={() => toggleContainerVisibility(15)}
              >
                <ArrowSVGInline color="var(--leviko-white)" />
              </StyledArrowSVGDown>
              {visibleContainers[15] && (
                <>
                  {renderBoxTextContainer(
                    15,
                    16,
                    "Cognitive Load",
                    "Kognitive Belastung und Beanspruchung des Arbeitsgedächtnisses."
                  )}
                  {renderBoxTextContainer(
                    15,
                    17,
                    "Cognitive Engagement",
                    "Kognitive Einbindung und aktive Auseinandersetzung mit dem Lerninhalt."
                  )}
                  {renderBoxTextContainer(
                    15,
                    18,
                    "Motivation",
                    "Lernmotivation und Interesse am Lerninhalt."
                  )}
                  {renderBoxTextContainer(
                    15,
                    19,
                    "Emotion",
                    "Emotionale Reaktionen auf den Lerninhalt."
                  )}
                  {renderBoxTextContainer(
                    15,
                    20,
                    "Flow",
                    "Zustand des völligen Aufgehens in der Lernaktivität."
                  )}
                  {renderBoxTextContainer(
                    15,
                    21,
                    "Affective Engagement",
                    "Emotionale Einbindung in den Lernprozess."
                  )}
                  {renderBoxTextContainer(
                    15,
                    22,
                    "Self-Regulation",
                    "Fähigkeit zur Selbststeuerung und -organisation beim Lernen."
                  )}
                  {renderBoxTextContainer(
                    15,
                    23,
                    "Behavioral Engagement",
                    "Beobachtbares Verhalten und Teilnahme am Lernprozess."
                  )}
                </>
              )}
            </BoxContainer>

            <StyledArrowSVGInline>
              <ArrowSVGInline color="var(--leviko-black)" />
            </StyledArrowSVGInline>

            {/* Box 4 */}
            <BoxContainer>
              <MainBox
                $active={activeBox === 24}
                onClick={() => handleBoxClick(24)}
              >
                <p>Lern&shy;ergebnisse</p>
              </MainBox>
              <StyledArrowSVGDown
                $expanded={!!visibleContainers[24]}
                onClick={() => toggleContainerVisibility(24)}
              >
                <ArrowSVGInline color="var(--leviko-white)" />
              </StyledArrowSVGDown>
              {visibleContainers[24] && (
                <>
                  {renderBoxTextContainer(
                    24,
                    25,
                    "Wissen",
                    "Erworbenes Wissen und Verständnis."
                  )}
                  {renderBoxTextContainer(
                    24,
                    26,
                    "Fertigkeiten",
                    "Erlernte Fähigkeiten und Kompetenzen."
                  )}
                  {renderBoxTextContainer(
                    24,
                    27,
                    "Einstellungen",
                    "Veränderungen in den Einstellungen und Haltungen der Lernenden."
                  )}
                </>
              )}
            </BoxContainer>
          </BoxWrapper>
        )}
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
      {!isMobile && (
        <BoxWrapper>
          {/* Box 1 */}
          <BoxContainer>
            <MainBox
              $active={activeBox === 1}
              onClick={() => handleBoxClick(1)}
            >
              <p>Technische Merkmale</p>
            </MainBox>
            <StyledArrowSVGDown
              $expanded={!!visibleContainers[1]}
              onClick={() => toggleContainerVisibility(1)}
            >
              <ArrowSVGInline color="var(--leviko-white)" />
            </StyledArrowSVGDown>
            {visibleContainers[1] && (
              <>
                {renderBoxTextContainer(
                  1,
                  2,
                  "Kodierung",
                  "Art der Informationen (Text, Zahl, Ton, Bild)"
                )}
                {renderBoxTextContainer(
                  1,
                  3,
                  "Darstellungsqualität / Auflösung",
                  "Detailgenauigkeit und Klarheit der visuellen Präsentation."
                )}
                {renderBoxTextContainer(
                  1,
                  4,
                  "Interaktion",
                  "Möglichkeiten der Nutzer zur Interaktion mit der Technologie."
                )}
                {renderBoxTextContainer(
                  1,
                  5,
                  "Perspektive",
                  "Unterscheidung zwischen Third-Person und First-Person-Ansicht."
                )}
              </>
            )}
          </BoxContainer>

          <StyledArrowSVGInline>
            <ArrowSVGInline color="var(--leviko-black)" />
          </StyledArrowSVGInline>

          {/* Box 2 */}
          <BoxContainer>
            <MainBox
              $active={activeBox === 6}
              onClick={() => handleBoxClick(6)}
            >
              <p>Erlebnis&shy;elemente</p>
            </MainBox>
            <StyledArrowSVGDown
              $expanded={!!visibleContainers[6]}
              onClick={() => toggleContainerVisibility(6)}
            >
              <ArrowSVGInline color="var(--leviko-white)" />
            </StyledArrowSVGDown>
            {visibleContainers[6] && (
              <>
                {renderBoxTextContainer(
                  6,
                  7,
                  "Realitätsempfinden",
                  "Wahrnehmung der Realitätsnähe der Darstellung."
                )}
                {renderBoxTextContainer(
                  6,
                  8,
                  "Agieren vs. Rezipieren",
                  "Unterschied zwischen aktiver Teilnahme und passiver Rezeption."
                )}
                {renderBoxTextContainer(
                  6,
                  9,
                  "Soziale Präsenz",
                  "Gefühl der Anwesenheit anderer Personen in der virtuellen Umgebung."
                )}
                {renderBoxTextContainer(
                  6,
                  10,
                  "Ko-Präsenz",
                  "Gefühl der Zusammenarbeit mit anderen Personen."
                )}
                {renderBoxTextContainer(
                  6,
                  11,
                  "Raumerleben",
                  "Gefühl, sich in einem dreidimensionalen Raum zu befinden und sich darin bewegen zu können."
                )}
                {renderBoxTextContainer(
                  6,
                  12,
                  "Immersion",
                  "Intensität des Eintauchens in die virtuelle Welt."
                )}
                {renderBoxTextContainer(
                  6,
                  13,
                  "Bewegung",
                  "Wahrnehmung eigener Bewegungen innerhalb der virtuellen Welt."
                )}
                {renderBoxTextContainer(
                  6,
                  14,
                  "First-/Third-Person-Perspektive",
                  "Einfluss der Perspektive auf das Erleben."
                )}
              </>
            )}
          </BoxContainer>

          <StyledArrowSVGInline>
            <ArrowSVGInline color="var(--leviko-black)" />
          </StyledArrowSVGInline>

          {/* Box 3 */}
          <BoxContainer>
            <MainBox
              $active={activeBox === 15}
              onClick={() => handleBoxClick(15)}
            >
              <p>Lern&shy;prozesse</p>
            </MainBox>
            <StyledArrowSVGDown
              $expanded={!!visibleContainers[15]}
              onClick={() => toggleContainerVisibility(15)}
            >
              <ArrowSVGInline color="var(--leviko-white)" />
            </StyledArrowSVGDown>
            {visibleContainers[15] && (
              <>
                {renderBoxTextContainer(
                  15,
                  16,
                  "Cognitive Load",
                  "Kognitive Belastung und Beanspruchung des Arbeitsgedächtnisses."
                )}
                {renderBoxTextContainer(
                  15,
                  17,
                  "Cognitive Engagement",
                  "Kognitive Einbindung und aktive Auseinandersetzung mit dem Lerninhalt."
                )}
                {renderBoxTextContainer(
                  15,
                  18,
                  "Motivation",
                  "Lernmotivation und Interesse am Lerninhalt."
                )}
                {renderBoxTextContainer(
                  15,
                  19,
                  "Emotion",
                  "Emotionale Reaktionen auf den Lerninhalt."
                )}
                {renderBoxTextContainer(
                  15,
                  20,
                  "Flow",
                  "Zustand des völligen Aufgehens in der Lernaktivität."
                )}
                {renderBoxTextContainer(
                  15,
                  21,
                  "Affective Engagement",
                  "Emotionale Einbindung in den Lernprozess."
                )}
                {renderBoxTextContainer(
                  15,
                  22,
                  "Self-Regulation",
                  "Fähigkeit zur Selbststeuerung und -organisation beim Lernen."
                )}
                {renderBoxTextContainer(
                  15,
                  23,
                  "Behavioral Engagement",
                  "Beobachtbares Verhalten und Teilnahme am Lernprozess."
                )}
              </>
            )}
          </BoxContainer>

          <StyledArrowSVGInline>
            <ArrowSVGInline color="var(--leviko-black)" />
          </StyledArrowSVGInline>

          {/* Box 4 */}
          <BoxContainer>
            <MainBox
              $active={activeBox === 24}
              onClick={() => handleBoxClick(24)}
            >
              <p>Lern&shy;ergebnisse</p>
            </MainBox>
            <StyledArrowSVGDown
              $expanded={!!visibleContainers[24]}
              onClick={() => toggleContainerVisibility(24)}
            >
              <ArrowSVGInline color="var(--leviko-white)" />
            </StyledArrowSVGDown>
            {visibleContainers[24] && (
              <>
                {renderBoxTextContainer(
                  24,
                  25,
                  "Wissen",
                  "Erworbenes Wissen und Verständnis."
                )}
                {renderBoxTextContainer(
                  24,
                  26,
                  "Fertigkeiten",
                  "Erlernte Fähigkeiten und Kompetenzen."
                )}
                {renderBoxTextContainer(
                  24,
                  27,
                  "Einstellungen",
                  "Veränderungen in den Einstellungen und Haltungen der Lernenden."
                )}
              </>
            )}
          </BoxContainer>
        </BoxWrapper>
      )}
    </DiagrammWrapper>
  );
};

export default KerresDiagramm;

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
  width: 100%;

  @media (max-width: 430px) {
    margin-top: 20px;
  }
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 40px 64px;
  gap: 28px;
  width: 100%;

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

export const CTAOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 890px) {
    width: 100%;
    align-items: end;
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

  @media (max-width: 890px) {
    margin-left: 0;
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

  top: 30%;
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

export const SVGBox = styled.div`
  background-color: var(--leviko-black);
  height: 20px;
  width: 60px;

  @media (max-width: 430px) {
    height: 10px;
    width: 30px;
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

export const BoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 630px) {
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 430px) {
    justify-content: center;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media (max-width: 630px) {
    width: 100%;
  }
`;

export const BoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 630px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const MainBox = styled.div<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? "var(--leviko-green)" : "var(--leviko-blue)"};
  color: ${(props) =>
    props.$active ? "var(--leviko-black)" : "var(--leviko-white)"};
  padding: 10px;
  height: 84px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;

  @media (max-width: 1120px) {
    width: 210px;
  }
  @media (max-width: 960px) {
    width: 160px;
  }
  @media (max-width: 750px) {
    width: 130px;
  }
  @media (max-width: 630px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const Box = styled.div<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? "var(--leviko-green)" : "var(--leviko-blue)"};
  color: ${(props) =>
    props.$active ? "var(--leviko-black)" : "var(--leviko-white)"};
  padding: 10px;
  height: 84px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;

  @media (max-width: 1120px) {
    width: 210px;
  }
  @media (max-width: 960px) {
    width: 160px;
  }
  @media (max-width: 750px) {
    width: 130px;
  }
  @media (max-width: 630px) {
    display: none;
  }
`;

export const ExtraBox = styled.div<{ $active: boolean }>`
  background-color: var(--leviko-green);
  color: var(--leviko-black);
  display: ${(props) => (props.$active ? "block" : "none")};
  height: auto;
  width: 250px;
  padding: 0 10px 10px 10px;
  text-align: center;

  p {
    font-size: 16px;
  }

  @media (max-width: 630px) {
    display: none;
  }

  @media (max-width: 1120px) {
    width: 210px;
  }
  @media (max-width: 960px) {
    width: 160px;
  }
  @media (max-width: 750px) {
    width: 130px;
  }
  @media (max-width: 630px) {
    display: none;
  }
`;

export const StyledArrowSVGInline = styled.div`
  width: 3vw;
  height: 3vh;
  transform: rotate(-90deg);
  margin-top: 30px;

  svg {
    width: 100%; // Make the SVG fill the container
    height: 100%;
  }

  @media (max-width: 630px) {
    width: 6vw;
    height: 6vh;
    transform: rotate(0deg);
    margin-top: 0px;
  }
`;

export const StyledArrowSVGDown = styled.div<{ $expanded: boolean }>`
  padding: 10px;
  background-color: var(--leviko-blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transform: rotate(${(props) => (props.$expanded ? "180deg" : "0deg")});
  transition: transform 0.3s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    color: var(--leviko-white);
  }

  @media (max-width: 630px) {
    display: none;
  }
`;
