// Import der Bibliothek "react-fast-marquee" für den horizontalen Scroll-Effekt (Marquee)
import Marquee from "react-fast-marquee";

// Import der ausgelagerten Styled Components
import {
  MarqueeContainer,
  MarqueeWrapper,
} from "../UI/Banner/MarqueeBanner.styled.tsx";

// Import der Styled Components für das Logo, die auch im Header verwendet werden
import { LogoContainer, StyledLogoSVG } from "../UI/Header.styled";

// Definition der MarqueeBanner-Komponente
const MarqueeBanner = () => {
  return (
    // Äußerer Container des Marquee-Banners, der das Layout und die Hintergrundfarben definiert
    <MarqueeContainer>
      {/* Marquee-Komponente von "react-fast-marquee" */}
      {/* gradient={false} deaktiviert den Gradient-Effekt an den Rändern */}
      {/* speed={50} legt die Scrollgeschwindigkeit fest */}
      {/* pauseOnHover={true} pausiert das Scrollen, wenn der Nutzer die Maus über das Banner bewegt */}
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {/* Wrapper für den Inhalt des Marquees (Text und Logos) */}
        <MarqueeWrapper>
          {/* Leerer Platzhalter div */}
          <div></div>

          {/* Text, der im Marquee angezeigt wird */}
          <h3>Extended Reality – Lehrerbildung in virtuellen Kontexten</h3>

          {/* Container für das SVG-Logo */}
          <LogoContainer>
            <StyledLogoSVG />
          </LogoContainer>

          {/* Wiederholter Text im Marquee */}
          <h3>Extended Reality – Lehrerbildung in virtuellen Kontexten</h3>

          {/* Wiederholtes SVG-Logo */}
          <LogoContainer>
            <StyledLogoSVG />
          </LogoContainer>
        </MarqueeWrapper>
      </Marquee>
    </MarqueeContainer>
  );
};

// Export der MarqueeBanner-Komponente für die Wiederverwendung
export default MarqueeBanner;
