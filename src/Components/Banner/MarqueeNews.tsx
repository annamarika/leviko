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
            <LinkContainer href="https://lernen.digital/wissen-und-formate/publikationen/?article=ca959770-f846-11f0-a14c-9eac6ef72815">
              Ab sofort frei zugänglich: Unsere Handreichung für Lehrkräfte
            </LinkContainer>
			<LogoContainer>
              <StyledLogoSVG />
            </LogoContainer>
            <LinkContainer href="https://lernen.digital/wissen-und-formate/publikationen/?article=ca959770-f846-11f0-a14c-9eac6ef72815">
              Ab sofort frei zugänglich: Unsere Handreichung für Lehrkräfte
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
