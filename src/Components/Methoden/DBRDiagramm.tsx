import styled from "styled-components";
import MiniArrowSVG from "../UI/Buttons/MiniArrowSVG.tsx";

interface DBRDiagrammProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

const DBRDiagramm: React.FC<DBRDiagrammProps> = ({ headline, description }) => {
  return (
    <DBRDiagrammContainer>
      <InfoContainer>
        <InfoTextWrapper>
          <InfoTextContainer>
            <h3>{headline}</h3>
            <p>{description}</p>
          </InfoTextContainer>
          <VerticalText>mehr Information</VerticalText>
        </InfoTextWrapper>
      </InfoContainer>
      <CTAWrapper>
        <SVGWrapper>
          <SVGContainer>
            <MiniArrowSVGWrapper>
              <MiniArrowSVG />
            </MiniArrowSVGWrapper>
            <SVGBox />
          </SVGContainer>
        </SVGWrapper>
        <CTAText>Klick auf die einzelnen Felder für mehr Information.</CTAText>
      </CTAWrapper>
    </DBRDiagrammContainer>
  );
};

export default DBRDiagramm;

export const DBRDiagrammContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;

  @media (max-width: 1330px) {
    margin-right: 120px;
    margin-left: 120px;
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
    gap: 0;
    margin-bottom: 0;
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
`;

export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--leviko-green);
  width: calc(30%);
  height: fit-content;
  padding: 35px 20px;
  flex-shrink: 0;
  gap: 10px;
`;

export const CTAText = styled.p`
  font-size: 16px;
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

export const SVGBox = styled.div`
  background-color: var(--leviko-black);
  height: 20px;
  width: 60px;
`;
