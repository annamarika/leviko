import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { LogoContainer, StyledLogoSVG } from "../UI/Header.styled";

const MarqueeNews = () => {
  return (
    <>
      <MarqueeContainer>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <MarqueeWrapper>
            <LogoContainer>
              <StyledLogoSVG />
            </LogoContainer>
            <LinkContainer href="https://ampf.info/c/jahrestagung/">
              Jahrestagung des AMPF 20. - 22. September 2024{" "}
            </LinkContainer>
            <LogoContainer>
              <StyledLogoSVG />
            </LogoContainer>
            <LinkContainer href="https://www.ieee.de/event/2024-2nd-international-conference-on-integrated-systems-in-medical-technologies-september-25-september-26/">
              IEEE Konferenz in Erlangen vom 25. - 26. September 2024
            </LinkContainer>
            <LogoContainer>
              <StyledLogoSVG />
            </LogoContainer>
            <LinkContainer href="https://lernen.digital/veranstaltungen/tagung-digitale-transformation-fuer-schule-und-lehrkraeftebildung-gestalten/">
              Tagung Potsdam: Digitale Transformation für Schule und
              Lehrkräftebildung gestalten 30. - 2. October 2024
            </LinkContainer>
          </MarqueeWrapper>
        </Marquee>
      </MarqueeContainer>
      <TextContainer>
        LEVIKO-XR ist Teilnehmer an den kommenden Veranstaltungen und freut
        sich, die neuesten Forschungsergebnisse vorzustellen. Besuche uns vor
        Ort, um mehr zu erfahren und sich mit unserem Team auszutauschen.
      </TextContainer>
    </>
  );
};

export default MarqueeNews;

export const MarqueeContainer = styled.div`
  background-color: var(--leviko-blue);
  padding: 30px 0;
  margin: 100px 0;
  position: relative;
  gap: 10px;

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
  margin-left: 20px;
  gap: 20px;
`;

export const StyledP = styled.p`
  color: var(--leviko-green);
`;

export const LinkContainer = styled.a`
  color: var(--leviko-green);
  font-size: 24px;
  text-decoration: none;
`;

export const TextContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 160px 100px 160px;

  @media (max-width: 1200px) {
    margin: 0 24px 100px 24px;
  }

  @media (max-width: 1024px) {
    margin: 0 24px 80px 24px;
  }

  @media (max-width: 430px) {
    margin: 0 24px 56px 24px;
  }
`;
