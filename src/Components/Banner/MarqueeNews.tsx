// MarqueeNews.tsx
import Marquee from "react-fast-marquee";
import { LogoContainer, StyledLogoSVG } from "../UI/Header.styled";
import {
  MarqueeContainer,
  MarqueeWrapper,
  LinkContainer,
  TextContainer,
} from "../UI/Banner/MarqueeNews.styled.tsx";

/**
 * MarqueeNews component displays a scrolling marquee with important
 * upcoming events and a footer text indicating LEVIKO-XR's participation
 * in these events.
 */
const MarqueeNews = () => {
  return (
    <>
      {/* Container for the marquee scrolling events */}
      <MarqueeContainer>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <MarqueeWrapper>
            {/* Event details with logo and links */}
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

      {/* Text below the marquee */}
      <TextContainer>
        LEVIKO-XR ist Teilnehmer an den kommenden Veranstaltungen und freut
        sich, die neuesten Forschungsergebnisse vorzustellen. Besuche uns vor
        Ort, um mehr zu erfahren und sich mit unserem Team auszutauschen.
      </TextContainer>
    </>
  );
};

export default MarqueeNews;
