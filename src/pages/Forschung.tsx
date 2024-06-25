import HeroProjekt from "../Components/Hero/HeroProjekt";
import FroschungNav from "../Components/InfoText/ForschungNav";
import { Headline } from "../Components/UI/Headline.styled";
import FraumitBrille from "../assets/images/Frau_mit_Meta_Quest.webp";

const FroschungsPage = () => {
  return (
    <>
      <HeroProjekt
        $imgSrc={FraumitBrille}
        imgAlt="person who plays maestro VR"
        headline="Erkenntnisse gestalten: Die Forschung hinter LEVIKO XR "
        description="Erkenntnisse gestalten: Die Forschung hinter LEVIKO XR "
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="center 20%"
      />
      <FroschungNav />
      <Headline id="forschungsfragen"> Forschungsfragen</Headline>
      <Headline id="methoden"> Methoden</Headline>
      <Headline id="modelle"> Modelle</Headline>
    </>
  );
};

export default FroschungsPage;
