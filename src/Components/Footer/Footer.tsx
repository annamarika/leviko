import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoSVG from "../../assets/logo.svg?react";
import BMBF from "../../assets/images/Gefordert_vom_BMBF.png";
import EUFund from "../../assets/images/EN_FundedbytheEU_RGB_WHITE.webp";
import lernenDigital from "../../assets/images/lernen-digital-Kompetenzverbund-negativ-RGB.webp";

const Footer = () => {
  return (
    <FooterWrapper>
      <ImageWrapper>
        <LevikoContainer as={Link} to="/">
          <StyledLogoSVG />
        </LevikoContainer>
        <LogoContainer>
          <ImageContainer href="https://lernen.digital/">
            <StyledImage src={lernenDigital} alt="lernenDigital Logo" />
          </ImageContainer>
          <ImageContainer href="https://www.bmbf.de/bmbf/de/home/home_node.html">
            <StyledImage src={BMBF} alt="BMBF Logo" />
          </ImageContainer>
          <ImageContainer href="https://european-union.europa.eu/index_en">
            <StyledImage src={EUFund} alt="Funded by the EU Logo" />
          </ImageContainer>
        </LogoContainer>
      </ImageWrapper>
      <TextContainer>
        <LinkContainer as={Link} to="/impressum">
          Impressum
        </LinkContainer>
        <LinkContainer as={Link} to="/team">
          Kontakt
        </LinkContainer>
        <AdressContainer>
          Neuer Graben/Schloss 49074 Osnabrück Deutschland
        </AdressContainer>
      </TextContainer>
    </FooterWrapper>
  );
};

export default Footer;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--leviko-blue);
  color: var(--leviko-white);
  width: 100vw;
  padding: 60px 160px;
  position: relative;
  z-index: 100;

  @media (max-width: 1330px) {
    padding: 60px 24px;
  }

  @media (max-width: 1024px) {
    padding: 40px 23px;
  }

  @media (max-width: 430px) {
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 32px 23px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 32px;
    width: 50%;
  }
`;

export const StyledLogoSVG = styled(LogoSVG)`
  max-width: none;
  max-height: none;
  width: 100%;
  height: auto;
  color: var(--leviko-white);
`;

export const LevikoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 197px;
  height: 43px;
  z-index: 100;

  @media (max-width: 1024px) {
    width: 178px;
    height: 40px;
  }
  @media (max-width: 430px) {
    width: 165px;
    height: 36px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 430px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: auto;
  margin: 0 20px;

  @media (max-width: 1024px) {
    width: 80px;
  }

  @media (max-width: 430px) {
    width: 60px;
    margin: 0 20px 0 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;

  @media (max-width: 430px) {
    width: 50%;
    gap: 20px;
  }
`;

export const LinkContainer = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: var(--leviko-white);

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

export const AdressContainer = styled.p`
  font-size: 18px;

  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

export const ImageContainer = styled.a``;

export const MireviLink = styled.a`
  text-decoration: none;
  color: var(--leviko-white);
`;
