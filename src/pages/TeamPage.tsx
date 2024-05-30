import Team from "../assets/images/team.webp";
import UniOsna from "../assets/images/Strobeck_Universitat_Osnabruck_Architekturfotos-7.webp";
import UniTros from "../assets/images/hochschule_trossingen.webp";
import HSD from "../assets/images/Campus-2022-DSC_6972_web.webp";
import TeamAccordion from "../Components/Accordion/TeamAccordion.tsx";
import HeroTeam from "../Components/Hero/HeroTeam.tsx";
import { Headline } from "../Components/UI/Headline.styled";
import BildText from "../Components/InfoText/BildText.tsx";
import { TeamProfData } from "../Components/Accordion/TeamProfData.tsx";
import { TeamOsnaData } from "../Components/Accordion/ProjektOsnaData.tsx";
import { TeamTrosData } from "../Components/Accordion/ProjektTrosData.tsx";
import { TeamDusData } from "../Components/Accordion/ProjektDusData.tsx";

const TeamPage = () => (
  <>
    <HeroTeam
      $imgSrc={Team}
      imgAlt="person who plays maestro VR"
      headline="Erkunde die Zukunft des Musikunterrichts mit dem Team hinter LEVIKO XR"
      description="LEVIKO XR: Innovative Fortbildung für Musiklehrkräfte durch VR/AR"
      linkTo="/projekt"
      button="Erfahre mehr"
      $objectPosition="center 20%"
    />
    <Headline>Professoren</Headline>
    <TeamAccordion items={TeamProfData} />
    <Headline>Wissenschaftliche MitarbeiterInnen</Headline>
    <BildText
      imgSrc={UniOsna}
      imgAlt="Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik"
      headline="Universität Osnabrück"
      description="Die Universität Osnabrück ist eine öffentliche Universität in Osnabrück.

      Sie besteht seit 1974 und ist in der heutigen Form aus einer Pädagogischen Hochschule, der Adolf-Reichwein-Hochschule, hervorgegangen, die seit 1953 ihren Sitz im Osnabrücker Schloss hatte."
      linkTo="https://www.mtdml.uni-osnabrueck.de/"
      button="Erfahre mehr"
      $objectPosition="30%"
    />
    <TeamAccordion items={TeamOsnaData} />
    <BildText
      imgSrc={UniTros}
      imgAlt="Staatliche Hochschule für Musik Trossingen"
      headline="Staatliche Hochschule für Musik Trossingen"
      description="Die Staatliche Hochschule für Musik bietet ihren Studierenden den traditionellen Fächerkanon einer Musikhochschule. Besondere Schwerpunkte bilden das Studium der Alten Musik sowie der Studiengang Musikdesign in Kooperation mit der Hochschule Furtwangen. 
      
      Hier gestalten Studierende mit Hilfe neuer Medienformate Klänge der Zukunft und entwickeln neuartige Konzertformate – eine spannende Grundlage für den Aufbau des Landeszentrums MUSIK-DESIGN-PERFORMANCE."
      linkTo="https://www.hfm-trossingen.de/"
      button="Erfahre mehr"
      $objectPosition="90%"
    />
    <TeamAccordion items={TeamTrosData} />
    <BildText
      imgSrc={HSD}
      imgAlt="Hochschule Düsseldorf"
      headline="Hochschule Düsseldorf & MIREVI"
      description="Die Hochschule Düsseldorf ist eine staatliche Fachhochschule mit einem neuen Campus in Düsseldorf-Derendorf. Die HSD ging 1971 aus verschiedenen Ausbildungsstätten hervor.

      MIREVI (Mixed Reality and Visualization) gehört zur Medienabteilung der Hochschule Düsseldorf (HSD). Ob Gesundheit und Wohlbefinden, Kunst, Wirtschaft oder Ingenieurwesen – das vielfältige und kreative Team forscht, entwickelt und bietet Unterstützung in verschiedenen Bereichen, um diese mit wegweisenden Ideen zu verbessern und zu innovieren."
      linkTo="https://mirevi.de/"
      button="Erfahre mehr"
      $objectPosition="30%"
    />
    <TeamAccordion items={TeamDusData} />
  </>
);
export default TeamPage;
