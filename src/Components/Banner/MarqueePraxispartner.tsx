import Marquee from "react-fast-marquee";
import styled from "styled-components";
import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import HSDWhite from "../../assets/images/HSD_Marke_v1_HSD_weiss.png";

const MarqueePraxispartner = () => {
  return (
    <>
      <MarqueeContainer>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={MireviWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={HSDWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={MireviWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={HSDWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={MireviWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={HSDWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={MireviWhite} alt="MIREVI Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.hs-duesseldorf.de/">
            <StyledImage src={HSDWhite} alt="MIREVI Logo" />
          </ImageContainer>
        </Marquee>
      </MarqueeContainer>
      <TextContainer>
        LEVIKO XR arbeitet mit Praxispartnern zusammen, die unsere Vision einer
        innovativen Musiklehrkräftefortbildung teilen.
      </TextContainer>
    </>
  );
};

export default MarqueePraxispartner;

export const MarqueeContainer = styled.div`
  background-color: var(--leviko-blue);
  padding: 30px 0;
  margin: 100px 0;

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
  gap: 20px;
`;

export const StyledImage = styled.img`
  width: 160px;
  height: auto;
  margin: 0 20px;

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: 430px) {
    width: 80px;
  }
`;

export const ImageContainer = styled.a``;

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
