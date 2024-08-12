import styled from "styled-components";

import AnimatedDBRSVG from "../UI/SVG/AnimatedDBRsvg.tsx";

interface DBRDiagrammProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

interface DiagrammBoxProps {
  $top: string;
  $left: string;
}

const DBRDiagramm: React.FC<DBRDiagrammProps> = ({ headline, description }) => {
  return (
    <DBRDiagrammWrapper>
      <InfoWrapper>
        <InfoContainer>
          <InfoTextWrapper>
            <InfoTextContainer>
              <h3>{headline}</h3>
              <div>{description}</div>
            </InfoTextContainer>
            <VerticalText>mehr Information</VerticalText>
          </InfoTextWrapper>
        </InfoContainer>
      </InfoWrapper>
      <DiagrammWrapper>
        <DiagrammContainer>
          <DiagrammBox className="DiagrammBox" $top="45%" $left="0">
            Requirements
          </DiagrammBox>
          <DiagrammBox className="DiagrammBox" $top="15%" $left="15%">
            Design
          </DiagrammBox>
          <DiagrammBox className="DiagrammBox" $top="-2%" $left="0">
            Theory
          </DiagrammBox>
          <DiagrammBox className="DiagrammBox" $top="55%" $left="20%">
            Analysis
          </DiagrammBox>
          <DiagrammBox className="DiagrammBox" $top="70%" $left="35%">
            Implementation
          </DiagrammBox>
          <DiagrammBoxLight className="DiagrammBox" $top="70%" $left="70%">
            Re-Design
          </DiagrammBoxLight>
          <DiagrammBoxGradient className="DiagrammBox" $top="-2%" $left="45%">
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
    flex-direction: column;
    align-items: start;
    gap: 24px;
    margin-bottom: 24px;
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
`;

export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;

export const DiagrammWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const DiagrammContainer = styled.div`
  position: relative;
  width: 100vw;
`;

export const DiagrammBox = styled.div<DiagrammBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--leviko-blue);
  color: var(--leviko-white);
  padding: 7px;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 1.2rem;
`;

export const DiagrammBoxLight = styled.div<DiagrammBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b4cee6;
  color: var(--leviko-black);
  padding: 7px;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 1.2rem;
`;

export const DiagrammBoxGradient = styled.div<DiagrammBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #182ec0, #b4cee6);
  color: var(--leviko-white);
  padding: 7px;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  font-size: 1.2rem;
`;

const StyledDBRSVG = styled(AnimatedDBRSVG)`
  width: 100vw;
`;
