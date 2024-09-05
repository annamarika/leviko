import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { LogoContainer, StyledLogoSVG } from "../UI/Header.styled";

const MarqueeBanner = () => {
  return (
    <MarqueeContainer>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <MarqueeWrapper>
          <div></div>
          <h3>Extended Reality – Lehrerbildung in virtuellen Kontexten</h3>
          <LogoContainer>
            <StyledLogoSVG />
          </LogoContainer>
          <h3>Extended Reality – Lehrerbildung in virtuellen Kontexten</h3>
          <LogoContainer>
            <StyledLogoSVG />
          </LogoContainer>
        </MarqueeWrapper>
      </Marquee>
    </MarqueeContainer>
  );
};

export default MarqueeBanner;

export const MarqueeContainer = styled.div`
  background-color: var(--leviko-blue);
  color: var(--leviko-green);
  padding: 30px 0;
  margin: 100px 0;
  position: relative;

  @media (max-width: 1200px) {
    margin: 80px 0;
    padding: 21px 0;
  }

  @media (max-width: 1024px) {
    margin: 56px 0;
    padding: 26px 0;
  }
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 50px;
`;
