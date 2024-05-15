import HeroProjekt from "../Components/Hero/HeroProjekt.tsx";
import FraumitBrille from "../assets/images/frau_mit_VRBrille.webp";

const ProjektPage = () => (
  <>
    <HeroProjekt
      imgSrc={FraumitBrille}
      imgAlt="person who plays maestro VR"
      headline="LEVIKO XR: 
      Innovative Fortbildung für Musiklehrkräfte durch VR/AR"
      description="LEVIKO XR: 
      Innovative Fortbildung für Musiklehrkräfte durch VR/AR"
      linkTo="/projekt"
      button="Erfahre mehr"
      $objectPosition="center 20%"
    />
  </>
);
export default ProjektPage;
