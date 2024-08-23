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
                edefinition
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
        <InfoHorizontalWrapper>
          <InfoHorizontalText>Verbesserung</InfoHorizontalText>
          <InfoHorizontalline />
          <InfoHorizontalText>Transformation</InfoHorizontalText>
        </InfoHorizontalWrapper>
      </DiagrammWrapper>
    </>
  );
};

export default SAMRDiagramm;

export const DiagrammWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 160px;
  margin-left: 160px;
  gap: 24px;
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`;

export const InfoHorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;

  @media (max-width: 1640px) {
    align-items: end;
  }
`;

export const InfoHorizontalText = styled.p`
  color: var(--leviko-black);
  padding: 36px 0;
  writing-mode: vertical-rl;
`;

export const InfoHorizontalline = styled.div`
  position: relative;
  width: 3px;
  flex-grow: 1;
  background-color: transparent;
  background-image: linear-gradient(var(--leviko-black) 10px, transparent 10px);
  background-size: 100% 20px;
  margin: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-top-color: var(--leviko-black);
  }

  @media (max-width: 430px) {
    margin: 0 5px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 550px) {
    align-items: flex-start;
  }

  @media (max-width: 430px) {
    gap: 10px;
  }
`;

interface InfoLetterProps {
  $isClicked: boolean;
}

export const InfoLetter = styled.h1<InfoLetterProps>`
  font-size: 200px;
  color: ${(props) =>
    props.$isClicked ? "var(--leviko-black)" : "var(--leviko-blue)"};

  @media (max-width: 1024px) {
    font-size: 180px;
  }
  @media (max-width: 550px) {
    font-size: 100px;
  }
  @media (max-width: 430px) {
    font-size: 80px;
  }
  @media (max-width: 390px) {
    font-size: 60px;
  }
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
  align-items: start;
  height: 80px;
  width: 780px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};

  @media (max-width: 1590px) {
    width: 750px;
  }
  @media (max-width: 1560px) {
    width: 700px;
  }
  @media (max-width: 1510px) {
    width: 650px;
  }
  @media (max-width: 1460px) {
    width: 600px;
  }
  @media (max-width: 1410px) {
    width: 550px;
  }
  @media (max-width: 1350px) {
    width: 500px;
  }
  @media (max-width: 1330px) {
    width: 750px;
  }
  @media (max-width: 1290px) {
    width: 700px;
  }
  @media (max-width: 1240px) {
    width: 650px;
  }
  @media (max-width: 1190px) {
    width: 600px;
  }
  @media (max-width: 1140px) {
    width: 550px;
  }
  @media (max-width: 1090px) {
    width: 480px;
  }
  @media (max-width: 1010px) {
    width: 380px;
    height: 100px;
  }
  @media (max-width: 905px) {
    width: 330px;
  }
  @media (max-width: 855px) {
    width: 580px;
  }
  @media (max-width: 830px) {
    width: 550px;
  }
  @media (max-width: 800px) {
    width: 520px;
  }
  @media (max-width: 770px) {
    width: 490px;
  }
  @media (max-width: 740px) {
    width: 450px;
    height: 120px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 650px) {
    width: 350px;
    height: 140px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 160px;
  }
  @media (max-width: 490px) {
    width: 250px;
    height: 180px;
  }
  @media (max-width: 430px) {
    height: 160px;
  }
  @media (max-width: 370px) {
    width: 230px;
    height: 160px;
  }
`;

export const InfoBoxTwo = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 80px;
  width: 880px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};

  @media (max-width: 1590px) {
    width: 850px;
  }
  @media (max-width: 1560px) {
    width: 800px;
  }
  @media (max-width: 1510px) {
    width: 750px;
  }
  @media (max-width: 1460px) {
    width: 700px;
  }
  @media (max-width: 1410px) {
    width: 650px;
  }
  @media (max-width: 1350px) {
    width: 600px;
  }
  @media (max-width: 1330px) {
    width: 850px;
  }
  @media (max-width: 1290px) {
    width: 800px;
  }
  @media (max-width: 1240px) {
    width: 750px;
  }
  @media (max-width: 1190px) {
    width: 700px;
  }
  @media (max-width: 1140px) {
    width: 650px;
  }
  @media (max-width: 1090px) {
    width: 580px;
  }
  @media (max-width: 1010px) {
    width: 480px;
    height: 100px;
  }
  @media (max-width: 905px) {
    width: 430px;
  }
  @media (max-width: 855px) {
    width: 580px;
  }
  @media (max-width: 830px) {
    width: 550px;
  }
  @media (max-width: 800px) {
    width: 520px;
  }
  @media (max-width: 770px) {
    width: 490px;
  }
  @media (max-width: 740px) {
    width: 450px;
    height: 120px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 650px) {
    width: 350px;
    height: 140px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 160px;
  }
  @media (max-width: 490px) {
    width: 250px;
    height: 180px;
  }
  @media (max-width: 430px) {
    height: 160px;
  }
  @media (max-width: 370px) {
    width: 230px;
    height: 160px;
  }
`;

export const InfoBoxThree = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 80px;
  width: 980px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};

  @media (max-width: 1590px) {
    width: 950px;
  }
  @media (max-width: 1560px) {
    width: 900px;
  }
  @media (max-width: 1510px) {
    width: 850px;
  }
  @media (max-width: 1460px) {
    width: 800px;
  }
  @media (max-width: 1410px) {
    width: 750px;
  }
  @media (max-width: 1350px) {
    width: 700px;
  }
  @media (max-width: 1330px) {
    width: 950px;
  }
  @media (max-width: 1290px) {
    width: 900px;
  }
  @media (max-width: 1240px) {
    width: 850px;
  }
  @media (max-width: 1190px) {
    width: 800px;
  }
  @media (max-width: 1140px) {
    width: 750px;
  }
  @media (max-width: 1090px) {
    width: 680px;
  }
  @media (max-width: 1010px) {
    width: 580px;
    height: 100px;
  }
  @media (max-width: 905px) {
    width: 530px;
  }
  @media (max-width: 855px) {
    width: 580px;
  }
  @media (max-width: 830px) {
    width: 550px;
  }
  @media (max-width: 800px) {
    width: 520px;
  }
  @media (max-width: 770px) {
    width: 490px;
  }
  @media (max-width: 740px) {
    width: 450px;
    height: 120px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 650px) {
    width: 350px;
    height: 140px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 160px;
  }
  @media (max-width: 490px) {
    width: 250px;
    height: 180px;
  }
  @media (max-width: 430px) {
    height: 160px;
  }
  @media (max-width: 370px) {
    width: 230px;
    height: 160px;
  }
`;

export const InfoBoxFour = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 80px;
  width: 1080px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--leviko-green)" : "var(--leviko-blue)"};

  @media (max-width: 1590px) {
    width: 1050px;
  }
  @media (max-width: 1560px) {
    width: 1000px;
  }
  @media (max-width: 1510px) {
    width: 950px;
  }
  @media (max-width: 1460px) {
    width: 900px;
  }
  @media (max-width: 1410px) {
    width: 850px;
  }
  @media (max-width: 1350px) {
    width: 800px;
  }
  @media (max-width: 1330px) {
    width: 1050px;
  }
  @media (max-width: 1290px) {
    width: 1000px;
  }
  @media (max-width: 1240px) {
    width: 950px;
  }
  @media (max-width: 1190px) {
    width: 900px;
  }
  @media (max-width: 1140px) {
    width: 850px;
  }
  @media (max-width: 1090px) {
    width: 780px;
  }
  @media (max-width: 1010px) {
    width: 680px;
    height: 100px;
  }
  @media (max-width: 905px) {
    width: 630px;
  }
  @media (max-width: 855px) {
    width: 580px;
  }
  @media (max-width: 830px) {
    width: 550px;
  }
  @media (max-width: 800px) {
    width: 520px;
  }
  @media (max-width: 770px) {
    width: 490px;
  }
  @media (max-width: 740px) {
    width: 450px;
    height: 120px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 650px) {
    width: 350px;
    height: 140px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 160px;
  }
  @media (max-width: 490px) {
    width: 250px;
    height: 180px;
  }
  @media (max-width: 430px) {
    height: 160px;
  }
  @media (max-width: 370px) {
    width: 230px;
    height: 160px;
  }
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

  @media (max-width: 430px) {
    font-size: 16px;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export const InfoBoxCTA = styled.p`
  align-self: flex-end;
  font-size: 16px;
  padding-right: 10px;

  @media (max-width: 550px) {
    padding-top: 10px;
  }
`;
