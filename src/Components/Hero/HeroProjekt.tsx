import styled from "styled-components";

interface HeroProjektProps {
  imgSrc: string;
  imgAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
  $objectPosition?: string;
}

interface ImageContainerProps {
  imgSrc: string;
  $objectPosition?: string;
}

const HeroProjekt: React.FC<HeroProjektProps> = ({
  imgSrc,
  imgAlt,
  headline,
  $objectPosition = "center",
}) => {
  return (
    <>
      <ImageContainer
        imgSrc={imgSrc}
        $objectPosition={$objectPosition}
        aria-label={imgAlt}
      >
        <Headline>{headline}</Headline>
      </ImageContainer>
    </>
  );
};

export default HeroProjekt;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 98px;
  overflow: hidden;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: ${(props) => props.$objectPosition || "center center"};
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    mix-blend-mode: lighten;
    z-index: 1;
  }
`;

export const Headline = styled.h1`
  z-index: 2;
  color: var(--leviko-black);
  margin: 0 160px;
  width: 60%;

  @media (max-width: 1330px) {
    margin: 0 24px;
    width: 80%;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;
