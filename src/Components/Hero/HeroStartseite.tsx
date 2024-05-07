import styled from "styled-components";
import image from "../../assets/images/person_plays_maestro.jpg";
import { Link } from "react-router-dom";

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

export const Button = styled.a`
  text-align: center;
  text-decoration: none;
  background-color: var(--leviko-blue);
  border-radius: 15px;
  color: var(--leviko-white);
  padding-top: 12px;
  padding-bottom: 12px;
  width: 254px;
  font-size: 24px;

  /* Hover effect */
  &:hover {
    color: var(--leviko-black);
    background-color: var(--leviko-green);
  }

  /* Focus effect */
  &:focus {
    outline: none;
    box-shadow: 10px rgba(170, 254, 131, 0.5);
  }

  /* Active (click) effect */
  &:active {
    color: var(--leviko-white);
    background-color: var(--leviko-black);
    border-color: var(--leviko-black);
  }

  @media (max-width: 1024px) {
    width: 181px;
    font-size: 20px;
  }

  @media (max-width: 430px) {
    width: 165px;
    font-size: 18px;
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
  width: 100%; // Fill the width of the container
  height: auto; // Maintain aspect ratio
  min-width: 100%; // Ensure it at least fills the width
  min-height: 100%; // Make sure the height is at least the container's height to avoid gaps
  object-fit: cover; // Cover the container while maintaining aspect ratio
  object-position: center; // Center the image to focus on the middle part

  @media (max-width: 430px) {
    object-position: top 70%;
  }
`;
