import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled"; // Der Button bleibt hier
import {
  HeroStartseiteContainer,
  HeadlineContainer,
  ImageContainer,
  StyledImage,
} from "../UI/Hero/HeroStartseite.styled.tsx"; // Import der ausgelagerten Styled Components

interface HeroStartseiteProps {
  imgSrc: string;
  imgAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
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
