import Marquee from "react-fast-marquee";
import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import HSDWhite from "../../assets/images/HSD_Marke_v1_HSD_weiss.png";
import lernenDigital from "../../assets/images/lernen-digital-Kompetenzverbund-negativ-RGB.webp";
import bmbf from "../../assets/images/Gefordert_vom_BMBF.png";
import euFunded from "../../assets/images/EN_FundedbytheEU_RGB_WHITE.webp";
import logoTros from "../../assets/images/logo-hochschule-fuer-musik-trossingen.webp";
import logoOsna from "../../assets/images/UOS-Logo_Grau_1C_v01.webp";
import MTMDL from "../../assets/images/MTDML Logo ohne Bildunterschrift invertiert 300px.webp";
import {
  MarqueeContainer,
  ImageContainer,
  StyledImage,
  TextContainer,
} from "../UI/Banner/MarqueePraxispartner.styled.tsx";

// Komponente für den Marquee-Bereich der Praxispartnerlogos
const MarqueePraxispartner = () => {
  return (
    <>
      {/* Container für das Marquee */}
      <MarqueeContainer>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {/* Jedes Logo mit entsprechendem Link */}
          <ImageContainer href="https://lernen.digital/">
            <StyledImage src={lernenDigital} alt="lernenDigital Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.bmbf.de/bmbf/de/home/home_node.html">
            <StyledImage src={bmbf} alt="BMBF Logo" />
          </ImageContainer>
          <ImageContainer href="https://european-union.europa.eu/index_en">
            <StyledImage src={euFunded} alt="EU Funded Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hfm-trossingen.de/">
            <StyledImage src={logoTros} alt="Trossingen Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.musik.uni-osnabrueck.de/startseite.html">
            <StyledImage src={logoOsna} alt="Osnabrück Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={HSDWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={MireviWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.mtdml.uni-osnabrueck.de/mtdml/mtdml.html">
            <StyledImage src={MTMDL} alt="MTMDL Logo" />
          </ImageContainer>

          {/* Logos werden für eine fließende Marquee-Erfahrung wiederholt */}
          <ImageContainer href="https://lernen.digital/">
            <StyledImage src={lernenDigital} alt="lernenDigital Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.bmbf.de/bmbf/de/home/home_node.html">
            <StyledImage src={bmbf} alt="BMBF Logo" />
          </ImageContainer>
          <ImageContainer href="https://european-union.europa.eu/index_en">
            <StyledImage src={euFunded} alt="EU Funded Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hfm-trossingen.de/">
            <StyledImage src={logoTros} alt="Trossingen Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.musik.uni-osnabrueck.de/startseite.html">
            <StyledImage src={logoOsna} alt="Osnabrück Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={HSDWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={MireviWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.mtdml.uni-osnabrueck.de/mtdml/mtdml.html">
            <StyledImage src={MTMDL} alt="MTMDL Logo" />
          </ImageContainer>
        </Marquee>
      </MarqueeContainer>

      {/* Text unter dem Marquee */}
      <TextContainer>
        LEVIKO XR arbeitet mit Praxispartnern zusammen, die unsere Vision einer
        innovativen Musiklehrkräftefortbildung teilen.
      </TextContainer>
    </>
  );
};

export default MarqueePraxispartner;
