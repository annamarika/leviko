import styled from "styled-components";

interface HeroTeamProps {
  $imgSrc?: string;
  imgAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
  $objectPosition?: string;
}

interface ImageContainerProps {
  $imgSrc?: string;
  $objectPosition?: string;
}

const HeroTeam: React.FC<HeroTeamProps> = ({
  $imgSrc,
  imgAlt,
  headline,
  $objectPosition = "center",
}) => {
  return (
    <>
      <ImageContainer
        $imgSrc={$imgSrc}
        $objectPosition={$objectPosition}
        aria-label={imgAlt}
      >
        <Headline>{headline}</Headline>
      </ImageContainer>
    </>
  );
};

export default HeroTeam;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  justify-content: start;
  align-items: start;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 200px;
  margin-bottom: 100px;
  overflow: hidden;
  background-image: url(${(props) => props.$imgSrc});
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

  @media (max-width: 1024px) {
    margin-bottom: 80px;
  }
  @media (max-width: 430px) {
    margin-bottom: 56px;
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
    margin: 0 20px;
    width: 100%;
  }
`;
