import useDarkModeStore from "../stores/useDarkModeStore.tsx";
// Import styled components from the separate file
import { ImageContainer, Headline } from "../UI/Hero/HeroTeam.styled.tsx";

interface HeroTeamProps {
  $imgSrc?: string;
  imgAlt: string;
  headline: string;
  description: string;
  linkTo: string;
  button: string;
  $objectPosition?: string;
}

const HeroTeam: React.FC<HeroTeamProps> = ({
  $imgSrc,
  imgAlt,
  headline,
  $objectPosition = "center",
}) => {
  const { isDarkModeOn } = useDarkModeStore();

  return (
    <>
      <ImageContainer
        $imgSrc={$imgSrc}
        $objectPosition={$objectPosition}
        aria-label={imgAlt}
        $isDarkModeOn={isDarkModeOn}
      >
        <Headline $isDarkModeOn={isDarkModeOn}>{headline}</Headline>
      </ImageContainer>
    </>
  );
};

export default HeroTeam;
