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
import MireviBlack from "../assets/images/MIREVI.webp";
import HSDBlack from "../assets/images/HSD_Marke_v1_HSD_Schw.png";

const Startseite = () => {
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
        imgAlt="person who plays maestro VR"
        headline="VR glasses and controller"
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
      <Institutionen
        imgSrc={ImageTablet}
        imgAlt="tablet with sketch"
        logoOneSrc={MireviWhite}
        logoOneAlt="Mirevi Logo in White"
        logoTwoSrc={HSDWhite}
        logoTwoAlt="HSD Logo in White"
        headline="Verbundkoordination Prof. Dr. Michael Oehler"
        description="Universität Osnabrück
        Institut für Musikwissenschaft und Musikpädagogik
        Music Technology & Digital Musicology Lab (MTDML)"
        linkTo="mailto:michael.oehler@uos.de"
        button="E-Mail"
        $objectPosition="30%"
        $buttonVariant="secondary"
      />
      <InstitutionenWhite
        imgSrc={ImageTablet}
        imgAlt="tablet with sketch"
        logoOneSrc={MireviBlack}
        logoOneAlt="Mirevi Logo in White"
        logoTwoSrc={HSDBlack}
        logoTwoAlt="HSD Logo in White"
        headline="Verbundpartner Prof. Dr. Philipp Ahner"
        description="Staatliche Hochschule für Musik Trossingen
        Landeszentrum MUSIK–DESIGN–PERFORMANCE"
        linkTo="mailto:p.ahner@doz.hfm-trossingen.de"
        button="E-Mail"
        $objectPosition="30%"
      />
      <Institutionen
        imgSrc={ImageTablet}
        imgAlt="tablet with sketch"
        logoOneSrc={MireviWhite}
        logoOneAlt="Mirevi Logo in White"
        logoTwoSrc={HSDWhite}
        logoTwoAlt="HSD Logo in White"
        headline="Verbundkoordination Prof. Dr. Christian Geiger"
        description="Hochschule Düsseldorf
        MIREVI (Mixed Reality and Visualization)"
        linkTo="mailto:michael.oehler@uos.de"
        button="E-Mail"
        $objectPosition="30%"
        $buttonVariant="secondary"
      />
    </>
  );
};
export default Startseite;
