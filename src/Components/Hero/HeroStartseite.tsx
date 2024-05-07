import styled from "styled-components";
import image from "../../assets/images/person_plays_maestro.jpg";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";

const HeroStartseite = () => {
  return (
    <HeroStartseiteContainer>
      <HeadlineContainer>
        <h1>Erschliesse neue Klangwelten</h1>
        <p>LEVIKO XR: Digitale Innovation im Musikunterricht.</p>
        <Button as={Link} to="/projekt">
          Projekt
        </Button>
      </HeadlineContainer>
      <ImageContainer>
        <StyledImage src={image} alt="person who plays maestro VR" />
      </ImageContainer>
    </HeroStartseiteContainer>
  );
};

export default HeroStartseite;

export const HeroStartseiteContainer = styled.div`
  margin-top: 98px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding-top: 100px;

  @media (max-width: 1200px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-top: 80px;
    margin-right: 24px;
    margin-left: 24px;
    padding-top: 80px;
    gap: 24px;
  }
  @media (max-width: 430px) {
    margin-top: 84px;
    padding-top: 56px;
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const ImageContainer = styled.div`
  width: 70vw;
  height: auto;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 430px) {
    width: 100%;
    height: 511px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 430px) {
    object-position: 70%;
  }
`;
