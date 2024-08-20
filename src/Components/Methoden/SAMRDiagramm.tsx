import styled from "styled-components";
import { useSAMRDStore } from "../stores/useSAMRDStore";

const SAMRDiagramm: React.FC = () => {
  const { clickedId, setClickedId } = useSAMRDStore();

  const handleClick = (id: string) => {
    setClickedId(clickedId === id ? null : id);
  };

  return (
    <>
      <DiagrammWrapper>
        <InfoWrapper>
          {/* more InfoContainer1 */}
          <InfoContainer onClick={() => handleClick("container1")}>
            <InfoLetter $isClicked={clickedId === "container1"}>S</InfoLetter>
            <InfoBoxContainer>
              <InfoBoxHeadline $isClicked={clickedId === "container1"}>
                ubstitution
              </InfoBoxHeadline>
              <InfoBoxOne $isClicked={clickedId === "container1"}>
                {clickedId === "container1" ? (
                  <>
                    <InfoBoxText $isClicked={clickedId === "container1"}>
                      Technolgie ist direkter Ersatz für Arbeitsmittel, ohne
                      funktionale Änderung.
                    </InfoBoxText>
                    <InfoBoxCTA>mehr Information</InfoBoxCTA>
                  </>
                ) : (
                  <InfoBoxText $isClicked={clickedId === "container1"}>
                    Ersatz
                  </InfoBoxText>
                )}
              </InfoBoxOne>
            </InfoBoxContainer>
          </InfoContainer>
          {/* more InfoContainer2 */}
          <InfoContainer onClick={() => handleClick("container2")}>
            <InfoLetter $isClicked={clickedId === "container2"}>A</InfoLetter>
            <InfoBoxContainer>
              <InfoBoxHeadline $isClicked={clickedId === "container2"}>
                ugmentation
              </InfoBoxHeadline>
              <InfoBoxTwo $isClicked={clickedId === "container2"}>
                {clickedId === "container2" ? (
                  <>
                    <InfoBoxText $isClicked={clickedId === "container2"}>
                      Technologie ersetzt bestehende Aktivitäten ohne
                      wesentliche Änderung.
                    </InfoBoxText>
                    <InfoBoxCTA>mehr Information</InfoBoxCTA>
                  </>
                ) : (
                  <InfoBoxText $isClicked={clickedId === "container2"}>
                    Erweiterung
                  </InfoBoxText>
                )}
              </InfoBoxTwo>
            </InfoBoxContainer>
          </InfoContainer>
          {/* more InfoContainer3 */}
          <InfoContainer onClick={() => handleClick("container3")}>
            <InfoLetter $isClicked={clickedId === "container3"}>M</InfoLetter>
            <InfoBoxContainer>
              <InfoBoxHeadline $isClicked={clickedId === "container3"}>
                odification
              </InfoBoxHeadline>
              <InfoBoxThree $isClicked={clickedId === "container3"}>
                {clickedId === "container3" ? (
                  <>
                    <InfoBoxText $isClicked={clickedId === "container3"}>
                      Technologie führt zu einer grundlegenden Umgestaltung der
                      Lernaktivität, z.B. durch multimediale
                      Gruppenpräsentationen.
                    </InfoBoxText>
                    <InfoBoxCTA>mehr Information</InfoBoxCTA>
                  </>
                ) : (
                  <InfoBoxText $isClicked={clickedId === "container3"}>
                    Änderung
                  </InfoBoxText>
                )}
              </InfoBoxThree>
            </InfoBoxContainer>
          </InfoContainer>
          {/* more InfoContainer4 */}
          <InfoContainer onClick={() => handleClick("container4")}>
            <InfoLetter $isClicked={clickedId === "container4"}>R</InfoLetter>
            <InfoBoxContainer>
              <InfoBoxHeadline $isClicked={clickedId === "container4"}>
                edefintion
              </InfoBoxHeadline>
              <InfoBoxFour $isClicked={clickedId === "container4"}>
                {clickedId === "container4" ? (
                  <>
                    <InfoBoxText $isClicked={clickedId === "container4"}>
                      Technologie ermöglicht völlig neue Lernaktivitäten, z.B.
                      Neue Formen der Zusammenarbeit, Kreativität und
                      Kommunikation.
                    </InfoBoxText>
                    <InfoBoxCTA>mehr Information</InfoBoxCTA>
                  </>
                ) : (
                  <InfoBoxText $isClicked={clickedId === "container4"}>
                    Neudefinition
                  </InfoBoxText>
                )}
              </InfoBoxFour>
            </InfoBoxContainer>
          </InfoContainer>
        </InfoWrapper>
        <InfoHorizontalWrapper></InfoHorizontalWrapper>
      </DiagrammWrapper>
    </>
  );
};

export default SAMRDiagramm;

export const DiagrammWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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
    margin-top: 0;
  }
  @media (max-width: 430px) {
    padding: 0 0;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const InfoHorizontalWrapper = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

interface InfoLetterProps {
  $isClicked: boolean;
}

export const InfoLetter = styled.h1<InfoLetterProps>`
  font-size: 200px;
  color: ${(props) =>
    props.$isClicked ? "var(--leviko-black)" : "var(--leviko-blue)"};
`;

export const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  gap: 5px;
`;

interface InfoBoxHeadlineProps {
  $isClicked: boolean;
}

export const InfoBoxHeadline = styled.h2<InfoBoxHeadlineProps>`
  color: ${(props) =>
    props.$isClicked ? "var(--leviko-black)" : "var(--leviko-blue)"};
`;

interface InfoBoxProps {
  $isClicked: boolean;
}

export const InfoBoxOne = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.$isClicked ? "center" : "start")};
  height: 80px;
  width: 580px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};
`;

export const InfoBoxTwo = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.$isClicked ? "center" : "start")};
  height: 80px;
  width: 680px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};
`;

export const InfoBoxThree = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.$isClicked ? "center" : "start")};
  height: 80px;
  width: 780px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};
`;

export const InfoBoxFour = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.$isClicked ? "center" : "start")};
  height: 80px;
  width: 880px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};
`;

interface InfoBoxTextProps {
  $isClicked: boolean;
}

export const InfoBoxText = styled.p<InfoBoxTextProps>`
  font-size: ${(props) => (props.$isClicked ? "20px" : "24px")};
  color: ${(props) =>
    props.$isClicked ? "var(--leviko-black)" : "var(--leviko-white)"};
  padding: ${(props) => (props.$isClicked ? "20px 20px 0 20px" : "20px")};
  display: ${(props) => (props.$isClicked ? "block" : "initial")};
`;

export const InfoBoxCTA = styled.p`
  align-self: flex-end;
  font-size: 20px;
  padding-right: 10px;
`;
