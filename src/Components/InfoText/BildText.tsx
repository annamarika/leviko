import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button.styled";

interface BildTextProps {
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

const BildText: React.FC<BildTextProps> = ({
  imgSrc,
  imgAlt,
  headline,
  description,
  linkTo,
  button,
  $objectPosition = "center",
}) => {
  return (
    <BildTextContainer>
      <ImageContainer>
        <StyledImage
          src={imgSrc}
          alt={imgAlt}
          $objectPosition={$objectPosition}
        />
      </ImageContainer>
      <HeadlineContainer>
        <h3>{headline}</h3>
        <p>{description}</p>
        <Button as={Link} to={linkTo}>
          {button}
        </Button>
      </HeadlineContainer>
    </BildTextContainer>
  );
};

export default BildText;

export const BildTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  margin-bottom: 100px;
  gap: 33px;

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
    flex-direction: column-reverse;
    align-items: start;
    gap: 0;
    margin-bottom: 56px;
  }
`;

export const HeadlineContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 32px;
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
