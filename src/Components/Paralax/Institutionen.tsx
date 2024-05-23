import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";

interface InstitutionenProps {
  imgSrc: string;
  imgAlt: string;
  logoOneSrc: string;
  logoOneAlt: string;
  logoTwoSrc: string;
  logoTwoAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
  $objectPosition?: string;
  $buttonVariant?: "secondary";
}

interface StyledImageProps {
  $objectPosition?: string;
}

const Institutionen: React.FC<InstitutionenProps> = ({
  imgSrc,
  imgAlt,
  logoOneSrc,
  logoOneAlt,
  logoTwoSrc,
  logoTwoAlt,
  headline,
  description,
  linkTo,
  button,
  $objectPosition = "center",
  $buttonVariant,
}) => {
  return (
    <ParalaxWrapper>
      <ParalaxContainer>
        <HeadlineContainer>
          <TextContainer>
            <h3>{headline}</h3>
            <p>{description}</p>
          </TextContainer>
          <ButtonLogoContainer>
            <Button as={Link} to={linkTo} $buttonVariant={$buttonVariant}>
              {button}
            </Button>
            <LogoContainer>
              <StyledLogo src={logoOneSrc} alt={logoOneAlt} />
              <StyledLogo src={logoTwoSrc} alt={logoTwoAlt} />
            </LogoContainer>
          </ButtonLogoContainer>
        </HeadlineContainer>
        <ImageContainer>
          <StyledImage
            src={imgSrc}
            alt={imgAlt}
            $objectPosition={$objectPosition}
          />
        </ImageContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default Institutionen;

export const ParalaxWrapper = styled.div`
  background-color: var(--leviko-blue);

  @media (max-width: 430px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

export const ParalaxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;
  background-color: var(--leviko-blue);
  color: var(--leviko-white);

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
    margin-bottom: 80px;
  }
  @media (max-width: 430px) {
    padding: 0 0;
    flex-direction: column;
    align-items: start;
    gap: 0;
    margin-bottom: 0;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 38px;
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
  }
`;

export const ButtonLogoContainer = styled.div`
  display: flex;
  gap: 80px;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 430px) {
    flex-direction: column-reverse;
    gap: 32px;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 430px) {
    align-content: center;
    justify-content: start;
    gap: 15px;
  }
`;

export const StyledLogo = styled.img`
  width: 100px;

  @media (max-width: 1024px) {
    width: 80px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 250px;
  height: auto;
  aspect-ratio: 1;

  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
