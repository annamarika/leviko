import styled from "styled-components";
import MiniArrowSVG from "../../UI/Buttons/MiniArrowSVG.tsx";

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
  word-break: break-word;
  overflow-wrap: break-word;

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
