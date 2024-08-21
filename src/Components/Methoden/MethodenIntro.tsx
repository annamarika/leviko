import styled from "styled-components";
import MiniArrowSVG from "../UI/Buttons/MiniArrowSVG.tsx";
import TpackSVGIcon from "../UI/Buttons/TpackSVGIcon.tsx";

interface MethodenIntroProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
  displayedSVG?: "box" | "tpack" | "circle";
}

interface MiniArrowSVGWrapperProps {
  $displayedSVG: "box" | "tpack" | "circle";
}

const MethodenIntro: React.FC<MethodenIntroProps> = ({
  headline,
  description,
  displayedSVG = "box",
}) => {
  return (
    <MethodenIntroContainer className="DBRDiagrammWrapper">
      <h3>{headline}</h3>
      <Description>{description}</Description>
      <CTAWrapper>
        <SVGWrapper>
          <SVGContainer>
            <MiniArrowSVGWrapper $displayedSVG={displayedSVG}>
              <StyledMiniArrowSVG />
            </MiniArrowSVGWrapper>
            {/* Conditional rendering based on displayedSVG prop */}
            {displayedSVG === "box" && <SVGBox />}
            {displayedSVG === "tpack" && <StyledTpackSVG />}
            {displayedSVG === "circle" && <SVGCircle />}
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
  align-items: flex-start;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
  }
  @media (max-width: 430px) {
    padding: 0 0;
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    align-items: stretch;
  }
`;

export const Description = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media (max-width: 430px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--leviko-green);
  height: fit-content;
  padding: 10px 20px;
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

  @media (max-width: 430px) {
    width: 210px;
  }
`;

export const SVGWrapper = styled.div``;

export const SVGContainer = styled.div`
  position: relative;
`;

export const MiniArrowSVGWrapper = styled.div<MiniArrowSVGWrapperProps>`
  position: absolute;
  top: 30%;
  left: 50%;

  ${(props) =>
    props.$displayedSVG === "tpack" &&
    `
    top: 50%;
    left: 60%;
  `}
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
  margin: 30px 0;
  height: 20px;
  width: 60px;

  @media (max-width: 430px) {
    height: 10px;
    width: 30px;
    margin: 0;
  }
`;

export const StyledTpackSVG = styled(TpackSVGIcon)`
  height: 57px;
  width: 54px;

  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

export const SVGCircle = styled.div`
  background-color: var(--leviko-black);
  height: 50px;
  width: 50px;
  border-radius: 50%;

  @media (max-width: 430px) {
    height: 10px;
    width: 30px;
  }
`;
