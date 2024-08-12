import styled from "styled-components";
import MiniArrowSVG from "../UI/Buttons/MiniArrowSVG.tsx";

interface MethodenIntroProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

const MethodenIntro: React.FC<MethodenIntroProps> = ({
  headline,
  description,
}) => {
  return (
    <MethodenIntroContainer className="DBRDiagrammWrapper">
      <h3>{headline}</h3>
      <div>{description}</div>
      <CTAWrapper>
        <SVGWrapper>
          <SVGContainer>
            <MiniArrowSVGWrapper>
              <StyledMiniArrowSVG />
            </MiniArrowSVGWrapper>
            <SVGBox />
          </SVGContainer>
        </SVGWrapper>
        <CTAText>Klick auf die einzelnen Felder für mehr Information.</CTAText>
      </CTAWrapper>
    </MethodenIntroContainer>
  );
};

export default MethodenIntro;

export const MethodenIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;

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
    gap: 0;
    margin-bottom: 0;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: end;
  background-color: var(--leviko-green);
  height: fit-content;
  padding: 35px 20px;
  flex-shrink: 0;
  gap: 10px;
  width: 352px;
`;

export const CTAText = styled.p`
  font-size: 16px;
`;

export const SVGWrapper = styled.div``;

export const SVGContainer = styled.div`
  position: relative;
`;

export const StyledMiniArrowSVG = styled(MiniArrowSVG)`
  width: 31px;
  height: 34px;

  @media (max-width: 430px) {
    width: 20px;
    height: auto;
  }
`;

export const MiniArrowSVGWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;

  @media (max-width: 430px) {
    height: 10px;
    width: 30px;
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
