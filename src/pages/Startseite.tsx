import MarqueeBanner from "../Components/Banner/MarqueeBanner";
import HeroStartseite from "../Components/Hero/HeroStartseite";
import BildText from "../Components/InfoText/BildText";
import TextBild from "../Components/InfoText/TextBild";
import Institutionen from "../Components/Paralax/Institutionen";
import InstitutionenWhite from "../Components/Paralax/InstitutionenWhite";
import ImageFrau from "../assets/images/Frau_mit_Meta_Quest.webp";
import ImageBrille from "../assets/images/Meta_Quest_Brille.webp";
import ImageTablet from "../assets/images/Tablet_Zeichnung.webp";
import ImageMaestro from "../assets/images/person_plays_maestro.jpg";
import MireviWhite from "../assets/images/MIREVI_weiss.webp";
import HSDWhite from "../assets/images/HSD_Marke_v1_HSD_weiss.png";
import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import ParallaxSection from "../Components/UI/ParallaxSection.styled";
import KontaktTeaser from "../Components/InfoText/KontaktTeaser";
import { Headline } from "../Components/UI/Headline.styled";
import MarqueePraxispartner from "../Components/Banner/MarqueePraxispartner";
import LogoOsna from "../assets/images/UOS-Logo_Grau_1C_v01.webp";
import LogoTros from "../assets/images/hfm-trossingen-logo550x274.webp";
import Chris from "../assets/images/CGEI.webp";
import Phil from "../assets/images/Philipp Ahner.webp";

const Startseite = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);

  useStickyScroll([refOne, refTwo, refThree, refFour], {
    start: "top top",
    endTrigger: (element) => `+=${element.offsetHeight}`,
    pinSpacing: false,
  });

  return (
    <>
      <HeroStartseite
        imgSrc={ImageMaestro}
        imgAlt="person who plays maestro VR"
        headline="Erschliesse neue Klangwelten"
        description="LEVIKO XR: Digitale Innovation im Musikunterricht."
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="70%"
      />
      <MarqueeBanner />
      <BildText
        imgSrc={ImageFrau}
        imgAlt="women who wears vr glasses"
        headline="Unsere Ziele sind klar"
        description="Innovative VR/AR Lehr-Lern-Designs entwickeln, technische Möglichkeiten im Musikunterricht aufzeigen und eine breite Anwendung durch Partnerschaften sicherstellen. Begleite uns auf dem Weg zu einer bahnbrechenden musikalischen Bildung!"
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="30%"
      />
      <TextBild
        imgSrc={ImageBrille}
        imgAlt="VR glasses and controller"
        headline="Neue Wege im Musikunterricht"
        description="Mit einem fundierten Ansatz analysieren wir Einsatzmöglichkeiten von
        VR/AR im Musikunterricht, konzipieren Lehr-Lern-Designs und evaluieren
        kontinuierlich unter Berücksichtigung der User Experience."
        linkTo="/projekt"
        button="Erfahre mehr"
        $objectPosition="30%"
      />
      <BildText
        imgSrc={ImageTablet}
        imgAlt="tablet with sketch"
        headline="ComPleTT: Lehrkräftefortbildung"
        description="Im Zukunft kannst du unsere Lehr-Lern-Designs auf ComPleTT Moodle entdecken – der zentralen Kooperationsplattform für Lehrkräftefortbildung.
        Als ein gemeinsames Angebot aller Bundesländer bietet ComPleTT eine vielseitige und umfassende Auswahl an Lehrinhalten für Lehrkräfte aus allen Bereichen."
        linkTo="https://lms.complett.bildungsserver.de/"
        button="zu ComPleTT"
        $objectPosition="30%"
      />
      <Headline>Institutionen</Headline>
      <ParallaxSection ref={refOne} className="sticky-section">
        <Institutionen
          imgSrc={ImageTablet}
          imgAlt="tablet with sketch"
          logoOneSrc={LogoOsna}
          logoOneAlt="Osnabrück Logo"
          logoTwoSrc=""
          logoTwoAlt=""
          headline="Verbundkoordination Prof. Dr. Michael Oehler"
          description="Universität Osnabrück
        Institut für Musikwissenschaft und Musikpädagogik
        Music Technology & Digital Musicology Lab (MTDML)"
          linkTo="mailto:michael.oehler@uos.de"
          button="E-Mail"
          $objectPosition="30%"
          $buttonVariant="secondary"
        />
      </ParallaxSection>
      <ParallaxSection ref={refTwo} className="sticky-section">
        <InstitutionenWhite
          imgSrc={Phil}
          imgAlt="tablet with sketch"
          logoOneSrc={LogoTros}
          logoOneAlt="Logo Osnabrück"
          logoTwoSrc=""
          logoTwoAlt=""
          headline="Verbundpartner Prof. Dr. Philipp Ahner"
          description="Staatliche Hochschule für Musik Trossingen
        Landeszentrum MUSIK–DESIGN–PERFORMANCE"
          linkTo="mailto:p.ahner@doz.hfm-trossingen.de"
          button="E-Mail"
          $objectPosition="30%"
        />
      </ParallaxSection>
      <ParallaxSection ref={refThree} className="sticky-section">
        <Institutionen
          imgSrc={Chris}
          imgAlt="tablet with sketch"
          logoOneSrc={MireviWhite}
          logoOneAlt="Mirevi Logo in White"
          logoTwoSrc={HSDWhite}
          logoTwoAlt="HSD Logo in White"
          headline="Verbundpartner Prof. Dr. Christian Geiger"
          description="Hochschule Düsseldorf
        MIREVI (Mixed Reality and Visualization)"
          linkTo="mailto:geiger@hs-duesseldorf.de"
          button="E-Mail"
          $objectPosition="30%"
          $buttonVariant="secondary"
        />
      </ParallaxSection>
      <ParallaxSection ref={refFour} className="sticky-section">
        <KontaktTeaser
          headline="Lerne unser Team kennen!"
          descriptionOne="Hinter der Verbundkoordination und den Verbundpartnern steckt ein starkes Team aus wissenschaftlichen MitarbeiterInnen."
          descriptionTwo="Wir sind offen für Anregungen, Feedback und Kooperationsmöglichkeiten und freuen uns darauf, von dir zu hören!"
          linkTo="/team"
          button="Team"
          $buttonVariant="tertiary"
        />
      </ParallaxSection>
      <Headline>Praxispartner</Headline>
      <MarqueePraxispartner />
    </>
  );
};
export default Startseite;
