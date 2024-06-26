import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import ParallaxSection from "../Components/UI/ParallaxSection.styled";
import Forschungsfragen from "../Components/Parallax/Forschungsfragen.tsx";
import HeroProjekt from "../Components/Hero/HeroProjekt";
import FroschungNav from "../Components/InfoText/ForschungNav";
import { Headline } from "../Components/UI/Headline.styled";
import FraumitBrille from "../assets/images/Frau_mit_Meta_Quest.webp";
import ForschungsfragenWhite from "../Components/Parallax/ForschungsfragenWhite.tsx";
import KontaktTeaser from "../Components/InfoText/KontaktTeaser.tsx";

const FroschungsPage = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);
  const refSix = useRef<HTMLDivElement>(null);

  useStickyScroll([refOne, refTwo, refThree, refFour, refFive, refSix], {
    onEnter: (entry) => {
      entry.target.classList.add("sticky");
    },
    onLeave: (entry) => {
      entry.target.classList.remove("sticky");
    },
  });

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
      <ParallaxSection ref={refOne} className="sticky-section">
        <Forschungsfragen
          headline={
            "Wie kann die VR-/AR-Technologie effektiv in die Lehrkräftefortbildung im Fach Musik integriert werden?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refTwo} className="sticky-section">
        <ForschungsfragenWhite
          headline={
            "Welche technischen und didaktischen Möglichkeiten bietet VR/AR im Musikunterricht, und wie können diese optimal genutzt werden?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refThree} className="sticky-section">
        <Forschungsfragen
          headline={
            "Welche Auswirkungen hat der Einsatz von VR/AR auf das Lernverhalten und die Leistung der Schülerinnen und Schüler im Musikunterricht?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refFour} className="sticky-section">
        <ForschungsfragenWhite
          headline={
            "Wie können Lehr-Lern-Designs auf VR-/AR-Basis entwickelt werden, um den Musikunterricht interaktiver und faszinierender zu gestalten?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refFive} className="sticky-section">
        <Forschungsfragen
          headline={
            "Welche Rolle spielen Modelle wie TPACK, SAMR und CAMIL bei der Gestaltung und Implementierung von VR/AR-Anwendungen im Musikunterricht?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refSix} className="sticky-section">
        <KontaktTeaser
          headline="Entdecke unsere Publikationen!"
          descriptionOne="Diese Forschungsfragen bilden das Fundament unserer Arbeit und führen uns auf unserem Weg zur Neugestaltung der musikalischen Bildung durch den Einsatz innovativer Technologien."
          descriptionTwo="Wir laden dich ein, mehr über unsere Forschungsarbeit zu erfahren und sich gemeinsam mit uns auf diese spannende Reise zu begeben."
          linkTo="/team"
          button="Publikationen"
          $buttonVariant="tertiary"
        />
      </ParallaxSection>
      <Headline id="methoden"> Methoden</Headline>
      <Headline id="modelle"> Modelle</Headline>
    </>
  );
};

export default FroschungsPage;
