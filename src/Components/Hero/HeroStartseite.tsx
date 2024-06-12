import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";

interface HeroStartseiteProps {
  imgSrc: string;
  imgAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
  $objectPosition?: string;
}

interface StyledImageProps {
  $objectPosition?: string;
}

const HeroStartseite: React.FC<HeroStartseiteProps> = ({
  imgSrc,
  imgAlt,
  headline,
  description,
  linkTo,
  button,
  $objectPosition = "center",
}) => {
  return (
    <HeroStartseiteContainer>
      <HeadlineContainer>
        <h1>{headline}</h1>
        <p>{description}</p>
        <Button as={Link} to={linkTo}>
          {button}
        </Button>
      </HeadlineContainer>
      <ImageContainer>
        <StyledImage
          src={imgSrc}
          alt={imgAlt}
          $objectPosition={$objectPosition}
        />
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

  @media (max-width: 1330px) {
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
  width: 50%;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
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

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 430px) {
    object-position: ${(props) => props.$objectPosition || "30%"};
  }
`;
