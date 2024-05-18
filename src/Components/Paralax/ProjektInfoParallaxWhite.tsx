import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";

interface ProjektInfoParallaxProps {
  headline: string;
  imgSrc: string;
  imgAlt: string;
  $objectPosition?: string;
  linkTo: string;
  button: string;
  $buttonVariant?: "secondary";
  description: JSX.Element | string;
}

interface StyledImageProps {
  $objectPosition?: string;
}

const ProjektInfoParallaxWhite: React.FC<ProjektInfoParallaxProps> = ({
  headline,
  imgSrc,
  imgAlt,
  $objectPosition = "center",
  linkTo,
  button,
  $buttonVariant,
  description,
}) => {
  console.log("Object Position:", $objectPosition);
  return (
    <ParalaxWrapper>
      <ParalaxContainer>
        <HeadlineContainer>{headline}</HeadlineContainer>
        <ImageTextContainer>
          <ImageContainer>
            <StyledImage
              src={imgSrc}
              alt={imgAlt}
              $objectPosition={$objectPosition}
            />
          </ImageContainer>
          <TextButtonContainer>
            <div>{description}</div>
            <Button as={Link} to={linkTo} $buttonVariant={$buttonVariant}>
              {button}
            </Button>
          </TextButtonContainer>
        </ImageTextContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default ProjektInfoParallaxWhite;

export const ParalaxWrapper = styled.div`
  background-color: var(--leviko-white);

  @media (max-width: 430px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 20px 0;
  }
`;

export const ParalaxContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 160px;
  padding: 100px 0;
  gap: 80px;
  background-color: var(--leviko-white);
  color: var(--leviko-black);

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    padding: 80px 0;
    gap: 80px;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    gap: 32px;
    padding: 0 0;
  }
`;

export const HeadlineContainer = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 50%;
  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  display: block;

  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.$objectPosition || "30%"};
`;

export const TextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    width: 100%;
  }
`;

export const ImageTextContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 20px;
  }
`;
