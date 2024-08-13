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
import MethodenIntro from "../Components/Methoden/MethodenIntro.tsx";
import MethodenOutro from "../Components/Methoden/MethodenOutro.tsx";
import DBRDiagramm from "../Components/Methoden/DBRDiagramm.tsx";
import TPACKDiagramm from "../Components/Methoden/TPACKDiagramm.tsx";

const FroschungsPage = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);

  useStickyScroll([refOne, refTwo, refThree, refFour, refFive], {
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
        headline="Erkenntnisse gestalten: Die Forschung hinter LEVIKO-XR "
        description="Erkenntnisse gestalten: Die Forschung hinter LEVIKO-XR "
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="center 20%"
      />
      <FroschungNav />
      <Headline id="forschungsfragen"> Forschungsfragen</Headline>
      <ParallaxSection ref={refOne} className="sticky-section">
        <Forschungsfragen
          headline={
            "Durch welche messbaren Faktoren unterscheiden sich Lehr-Lern-Umgebungen in XR von Nicht-XR-Umgebungen und wie lassen sie sich differenzieren?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refTwo} className="sticky-section">
        <ForschungsfragenWhite
          headline={
            "Welche Lehr-Lern-Designs in verschiedenen Handlungsfeldern des Musikunterrichts sind aus didaktischer, (…), ethischer Sicht gut geeignet, und wie lassen sich diese dokumentieren und disseminieren?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refThree} className="sticky-section">
        <Forschungsfragen
          headline={
            "Wie können Grenzen und Potenziale des Einsatzes von XR Technologien im Musikunterricht aus didaktischer Perspektive eingeordnet werden?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refFour} className="sticky-section">
        <ForschungsfragenWhite
          headline={
            "Wie gelingt ästhetische Erfahrung und der Aufbau musikalischer Kompetenzen in musikbezogenen VR/AR-Lehr-Lern-Umgebungen?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refFive} className="sticky-section">
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
      <MethodenIntro
        headline="Design-Based Research (DBR)"
        description={
          <>
            <p>
              Bei LEVIKO XR verfolgen wir einen Design-Based Research
              (DBR)-Ansatz, im Bereich der angewandten Forschung.
            </p>
            <br />
            <p>
              Unser Ziel ist es, durch iteratives Design und stetige Reflexion
              Lehr-Lern-Designs zu entwickeln, die sowohl theoretisch fundiert
              als auch praktisch erprobt sind.
            </p>
          </>
        }
      />
      <DBRDiagramm
        headline={"Requirement"}
        description={
          <>
            <p>
              Diese Phase beinhaltet die Identifizierung der Bildungsbedürfnisse
              oder Probleme, die die Forschung adressieren möchte. Ziel ist es,
              zu verstehen, was innerhalb eines spezifischen Bildungskontextes
              verbessert oder innoviert werden muss.
            </p>
          </>
        }
      />
      <MethodenOutro
        description={
          "Der DBR-Ansatz ermöglicht es uns, Innovationen zu entwickeln, die sowohl in der Theorie verankert als auch in der Praxis bewährt sind. Die enge Verbindung von Forschung und Praxis führt zu realen Verbesserungen in der Musikpädagogik und bereichert die wissenschaftliche Gemeinschaft mit wertvollen Erkenntnissen."
        }
        linkTo={""}
        button={"Erfahre mehr"}
      />
      <KontaktTeaser
        headline="Interesse geweckt? Kontaktiere uns!"
        descriptionOne="Hast du Fragen zum Projekt LEVIKO XR oder möchtest du mehr über unsere Arbeit erfahren?"
        descriptionTwo="Wir sind offen für Anregungen, Feedback und Kooperationsmöglichkeiten und freuen uns darauf, von dir zu hören!"
        linkTo="/team"
        button="Team"
        $buttonVariant="tertiary"
      />
      <Headline id="modelle"> Modelle</Headline>
      <MethodenIntro
        headline="TPACK-Rahmenwerk"
        description={
          <>
            <p>
              Das Technological Pedagogical Content Knowledge (TPACK) ist ein
              zentrales Modell in unserer Forschung, das die Komplexität des
              Lehrens an der Schnittstelle von Technologie, Pädagogik und Inhalt
              versteht und adressiert.
            </p>
            <br />
            <p>
              LEVIKO XR nutzt dieses Rahmenwerk, um eine harmonische Integration
              von Musikpädagogik und digitaler Technologie zu erreichen.
            </p>
          </>
        }
        displayedSVG="tpack"
      />
      <TPACKDiagramm />
    </>
  );
};

export default FroschungsPage;
