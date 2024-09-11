import ProjektAccordion from "../Components/Accordion/ProjektAccordion.tsx";
import HeroProjekt from "../Components/Hero/HeroProjekt.tsx";
import KontaktTeaser from "../Components/InfoText/KontaktTeaser.tsx";
import ProjektInfoParallax from "../Components/Parallax/ProjektInfoParallax.tsx";
import ProjektInfoParallaxWhite from "../Components/Parallax/ProjektInfoParallaxWhite.tsx";
import { Headline } from "../Components/UI/Headline.styled.tsx";
import ParallaxSection from "../Components/UI/Parallax/ParallaxSection.styled.tsx";
import FraumitBrille from "../assets/images/frau_mit_VRBrille.webp";
import Frauspielt from "../assets/images/frau_spielt_VRSpiel.webp";
import Mannspielt from "../assets/images/Mann_mit_VRBrille.webp";
import MannspieltZwei from "../assets/images/Mann_mit_VRBrille_und_roten_Pulli.webp";
import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll.tsx";
import styled from "styled-components";
import { ProjektAccordionData } from "../Components/Accordion/ProjektAccordionData.tsx"; // Hier importieren

const ProjektPage = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);

  useStickyScroll([refOne, refTwo, refThree], {
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
        headline="LEVIKO XR: 
      Innovative Fortbildung für Musiklehrkräfte durch VR/AR"
        description="LEVIKO XR: 
      Innovative Fortbildung für Musiklehrkräfte durch VR/AR"
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="center 20%"
      />
      <Headline>Projektübersicht</Headline>
      <ProjektAccordion items={ProjektAccordionData} />
      <KontaktTeaser
        headline="Interesse geweckt? Kontaktiere uns!"
        descriptionOne="Hast du Fragen zum Projekt LEVIKO XR oder möchtest du mehr über unsere Arbeit erfahren?"
        descriptionTwo="Wir sind offen für Anregungen, Feedback und Kooperationsmöglichkeiten und freuen uns darauf, von dir zu hören!"
        linkTo="/team"
        button="Team"
        $buttonVariant="tertiary"
      />
      <Headline>Das solltest du wissen!</Headline>
      <ParallaxSection ref={refOne} className="sticky-section">
        <ProjektInfoParallax
          headline={"Im Hier und Jetzt: Virtuelle und Erweiterbare Realität"}
          imgAlt="Frau spielt eine VR Anwendung"
          imgSrc={Frauspielt}
          linkTo="https://www.digitale-technologien.de/DT/Redaktion/DE/Standardartikel/Smarte-Datenwirtschaft-Technologien/SDW_Virtual-Reality_Augmented-Reality.html"
          button="Erfahre mehr"
          $buttonVariant="secondary"
          description={
            <p>
              Virtual Reality (VR) und Augmented Reality (AR) sind innovative
              Technologien, die die Art und Weise verändern, wie wir mit
              digitalen Inhalten interagieren. <br /> <br />
              Bei VR wird der Nutzer in eine komplett virtuelle Umgebung
              versetzt, während bei AR digitale Elemente in die reale Umgebung
              des Nutzers integriert werden. <br /> <br />
              Beide Technologien bieten ein immersives Erlebnis und haben
              Anwendungen in verschiedenen Bereichen wie Unterhaltung, Bildung,
              Gesundheitswesen und Industrie.
            </p>
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refTwo} className="sticky-section">
        <ProjektInfoParallaxWhite
          headline={"VR/AR im musisch-kreativen Kontext"}
          imgAlt="Frau spielt eine VR Anwendung"
          imgSrc={Mannspielt}
          $objectPosition="center"
          linkTo="https://www.uni-potsdam.de/ru/nachrichten/detail/2022-08-31-virtual-reality-im-musikunterricht-studierende-haben-vr-fuer-den-schuleinsatz-erprobt"
          button="Erfahre mehr"
          description={
            <p>
              Im Bereich musisch-kreativer Fächer wie Musik spielten VR und AR
              bislang eine geringe Rolle. <br /> <br />
              Dennoch bieten diese Technologien ein enormes Potenzial, um das
              Lernen und die kreative Entfaltung in diesem Bereich zu
              bereichern. <br /> <br />
              Durch die Integration von VR/AR können Schülerinnen und Schüler
              interaktive und immersiven Erfahrungen im Musikunterricht machen,
              die das Verständnis und die Wertschätzung für musikalische
              Konzepte und Praktiken vertiefen.
            </p>
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refThree} className="sticky-section">
        <ProjektInfoParallax
          headline={"Unsere Erwartungen für die Zukunft von VR/AR"}
          imgAlt="Frau spielt eine VR Anwendung"
          imgSrc={MannspieltZwei}
          linkTo="https://elearningindustry.com/all-inclusive-insights-on-the-metaverse-technology-and-its-future-potential"
          button="Erfahre mehr"
          $buttonVariant="secondary"
          description={
            <p>
              Wir erwarten, dass VR und AR in naher Zukunft zu einem integralen
              Bestandteil unseres Alltags werden. <br /> <br />
              Mit der kontinuierlichen Weiterentwicklung der Technologie werden
              VR/AR-Anwendungen immer zugänglicher und vielseitiger. <br />
              <br />
              In Bildungseinrichtungen könnten VR/AR-basierte Lehr- und
              Lernmethoden zunehmend eingesetzt werden, um das Lernen zu
              individualisieren und zu personalisieren.
              <br /> <br />
              Darüber hinaus könnten VR und AR neue Möglichkeiten für kreative
              Ausdrucksformen und kollaboratives Arbeiten in verschiedenen
              Bereichen eröffnen, was zu einem tieferen Verständnis und einer
              breiteren Akzeptanz dieser Technologien führt.
            </p>
          }
        />
      </ParallaxSection>
      <EmptyDiv />
    </>
  );
};

export default ProjektPage;

export const EmptyDiv = styled.div`
  background-color: var(--leviko-blue);
  width: 100%;
  height: 100px;
  position: relative;

  @media (max-width: 1024px) {
    height: 80px;
  }

  @media (max-width: 430px) {
    height: 56px;
  }
`;
