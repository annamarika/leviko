import ProjektAccordion from "../Components/Accordion/ProjektAccordion.tsx";
import HeroProjekt from "../Components/Hero/HeroProjekt.tsx";
import KontaktTeaser from "../Components/InfoText/KontaktTeaser.tsx";
import ProjektInfoParallax from "../Components/Parallax/ProjektInfoParallax.tsx";
import ProjektInfoParallaxWhite from "../Components/Parallax/ProjektInfoParallaxWhite.tsx";
import { Headline } from "../Components/UI/Headline.styled.tsx";
import ParallaxSection from "../Components/UI/ParallaxSection.styled.tsx";
import FraumitBrille from "../assets/images/frau_mit_VRBrille.webp";
import Frauspielt from "../assets/images/frau_spielt_VRSpiel.webp";
import Mannspielt from "../assets/images/Mann_mit_VRBrille.webp";
import MannspieltZwei from "../assets/images/Mann_mit_VRBrille_und_roten_Pulli.webp";
import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import styled from "styled-components";

const accordionData = [
  {
    id: "projektziel",
    title: "Projektziel",
    content: (
      <p>
        Das Hauptziel des Projekts "LEVIKO XR" ist es, zur Qualitätsentwicklung
        der Lehrkräftefortbildung bezüglich digitaler Kompetenzen für das Fach
        Musik im Bereich Extended Reality (XR) beitragen.
        <br /> <br />
        Dabei wird angestrebt, gut dokumentierte VR/AR Lehr-Lern-Designs für
        Musiklehrkräfte in allen Phasen der Lehrkräftebildung zu erstellen und
        zu validieren. Diese Designs sollen es Lehrkräften ermöglichen, die
        technischen und didaktischen Möglichkeiten sowie Grenzen des Einsatzes
        von VR/AR im Musikunterricht zu erkunden. <br /> <br /> Zusätzlich
        sollen die erstellten Prototypen und Designs in verschiedenen Szenarien
        einfach und intuitiv angewendet und weiterentwickelt werden können. Über
        Musikakademien, Landesinstitute und ein geplantes Symposium am Ende des
        Projekts wird eine hohe Dissemination der entwickelten
        Fortbildungsformate angestrebt.
      </p>
    ),
  },
  {
    id: "methodiken",
    title: "Methoden",
    content: (
      <p>
        Im Rahmen des Projekts werden verschiedene Methoden angewandt, um die
        Projektziele zu erreichen <br /> <br />
        Hierzu zählen unter anderem die Analyse und Identifikation möglicher
        Einsatzgebiete von VR/AR im Musikunterricht mithilfe von etablierten
        Modellen und Werkzeugen wie TPACK, SAMR, CAMIL sowie dem Modell nach
        Kerres et al. <br /> <br /> Die Entwicklung der Prototypen und
        Konzeption der VR/AR Lehr-Lern-Designs erfolgt in einem iterativen
        Prozess, der sich an Design-Based Research und dem
        S.P.E.C.I.A.L-Framework orientiert. Dabei wird kontinuierlich die User
        Experience betrachtet und die Designs entsprechend angepasst.
      </p>
    ),
  },
  {
    id: "fortschritt",
    title: "Fortschritt", //Projektstand //Projektstatus //Projektfortschritt //Projektphase
    content: (
      <p>
        Aktuell befindet sich das Projekt "LEVIKO XR" in einer fortgeschrittenen
        Phase der Prototypenentwicklung und Konzeption der Lehr-Lern-Designs.{" "}
        <br /> <br />
        Es wurden bereits umfangreiche Analysen durchgeführt, um die Potenziale
        von VR/AR im Musikunterricht zu identifizieren. Basierend auf diesen
        Erkenntnissen wurden mehrere Prototypen entwickelt und in einem
        iterativen Prozess evaluiert. <br /> <br />
        Die Rückmeldungen und Erfahrungen der Nutzer werden kontinuierlich
        genutzt, um die Designs zu optimieren und an die Bedürfnisse der
        Zielgruppe anzupassen.
        <br /> <br />
        Parallel dazu werden die wissenschaftlichen Erkenntnisse aus dem Projekt
        kontinuierlich dokumentiert und publiziert, um einen Beitrag zur
        Forschung auf diesem Gebiet zu leisten.
      </p>
    ),
  },
];

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
      <ProjektAccordion items={accordionData} />
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
