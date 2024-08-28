import styled from "styled-components";
import { useDBRStore } from "../stores/useDBRStore.tsx";
import AnimatedDBRSVG from "../UI/SVG/AnimatedDBRsvg.tsx";

interface DBRDiagrammProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

interface DiagrammBoxProps {
  $top: string;
  $left: string;
  $isActive: boolean;
}

const DBRDiagramm: React.FC<DBRDiagrammProps> = () => {
  const { selectedBox, selectBox, contentMap } = useDBRStore();

  return (
    <DBRDiagrammWrapper>
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
      </InfoWrapper>
      <DiagrammWrapper>
        <DiagrammContainer>
          <DiagrammBox
            className="DiagrammBox"
            $top="45%"
            $left="0"
            $isActive={selectedBox === "Requirements"}
            onClick={() => selectBox("Requirements")}
          >
            Requirements
          </DiagrammBox>
          <DiagrammBox
            className="DiagrammBox"
            $top="15%"
            $left="15%"
            $isActive={selectedBox === "Design"}
            onClick={() => selectBox("Design")}
          >
            Design
          </DiagrammBox>
          <DiagrammBox
            className="DiagrammBox"
            $top="-2%"
            $left="0"
            $isActive={selectedBox === "Theory"}
            onClick={() => selectBox("Theory")}
          >
            Theory
          </DiagrammBox>
          <DiagrammBox
            className="DiagrammBox"
            $top="55%"
            $left="20%"
            $isActive={selectedBox === "Analysis"}
            onClick={() => selectBox("Analysis")}
          >
            Analysis
          </DiagrammBox>
          <DiagrammBox
            className="DiagrammBox"
            $top="70%"
            $left="35%"
            $isActive={selectedBox === "Implementation"}
            onClick={() => selectBox("Implementation")}
          >
            Implementation
          </DiagrammBox>
          <DiagrammBoxLight
            className="DiagrammBox"
            $top="70%"
            $left="70%"
            $isActive={selectedBox === "ReDesign"}
            onClick={() => selectBox("ReDesign")}
          >
            Re-Design
          </DiagrammBoxLight>
          <DiagrammBoxGradient
            className="DiagrammBox"
            $top="-2%"
            $left="45%"
            $isActive={selectedBox === "ImplicationOfTheory"}
            onClick={() => selectBox("ImplicationOfTheory")}
          >
            Implication of Theory
          </DiagrammBoxGradient>
          <StyledDBRSVG />
        </DiagrammContainer>
      </DiagrammWrapper>
    </DBRDiagrammWrapper>
  );
};

export default DBRDiagramm;

export const DBRDiagrammWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
  @media (max-width: 800px) {
    padding: 0 0;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 24px;
    margin-top: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
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

export const DiagrammWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DiagrammContainer = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

export const DiagrammBox = styled.div<DiagrammBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$isActive ? "var(--leviko-green)" : "var(--leviko-blue)"};
  color: ${(props) =>
    props.$isActive ? "var(--leviko-black)" : "var(--leviko-white)"};
  padding: 7px;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 990px) {
    font-size: 1rem;
    padding: 6px;
  }

  @media (max-width: 800px) {
    font-size: 1.4rem;
    padding: 7px;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
    padding: 6px;
  }

  @media (max-width: 430px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

export const DiagrammBoxLight = styled.div<DiagrammBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$isActive ? "var(--leviko-green)" : "#b4cee6"};
  color: ${(props) =>
    props.$isActive ? "var(--leviko-black)" : "var(--leviko-black)"};
  padding: 7px;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 1.2rem;

  @media (max-width: 990px) {
    font-size: 1rem;
    padding: 6px;
  }

  @media (max-width: 800px) {
    font-size: 1.4rem;
    padding: 7px;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
    padding: 6px;
  }

  @media (max-width: 430px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

export const DiagrammBoxGradient = styled.div<DiagrammBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$isActive
      ? "var(--leviko-green)"
      : "linear-gradient(to right, #182ec0, #b4cee6)"};
  color: ${(props) =>
    props.$isActive ? "var(--leviko-black)" : "var(--leviko-white)"};
  padding: 7px;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 1.2rem;

  @media (max-width: 990px) {
    font-size: 1rem;
    padding: 6px;
  }

  @media (max-width: 800px) {
    font-size: 1.4rem;
    padding: 7px;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
    padding: 6px;
  }

  @media (max-width: 430px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

const StyledDBRSVG = styled(AnimatedDBRSVG)`
  width: 100vw;
`;
