import Team from "../assets/images/team.webp";
import TeamAccordion from "../Components/Accordion/TeamAccordion.tsx";
import HeroTeam from "../Components/Hero/HeroTeam.tsx";
import { Headline } from "../Components/UI/Headline.styled";
import BildText from "../Components/InfoText/BildText.tsx";
import ImageTablet from "../assets/images/Tablet_Zeichnung.webp";
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
      imgSrc={ImageTablet}
      imgAlt="Universität Osnabrück"
      headline="Universität Osnabrück"
      description="Die Universität Osnabrück ist eine öffentliche Universität in Osnabrück.

      Sie besteht seit 1974 und ist in der heutigen Form aus einer Pädagogischen Hochschule, der Adolf-Reichwein-Hochschule, hervorgegangen, die seit 1953 ihren Sitz im Osnabrücker Schloss hatte."
      linkTo="https://www.musik.uni-osnabrueck.de/studieninteressierte/studienangebot/musikwissenschaft.html"
      button="Erfahre mehr"
      $objectPosition="30%"
    />
    <TeamAccordion items={TeamOsnaData} />
    <BildText
      imgSrc={ImageTablet}
      imgAlt="Staatliche Hochschule für Musik Trossingen"
      headline="Staatliche Hochschule für Musik Trossingen"
      description="Die Staatliche Hochschule für Musik Trossingen ist eine von 24 Musikhochschulen in Deutschland. 
      
      Sie liegt im baden-württembergischen Trossingen und befindet sich in staatlicher Trägerschaft. Sie ist die Musikhochschule der Euregio Bodensee und seit Januar 2009 Mitglied der Internationalen Bodensee-Hochschule."
      linkTo="https://www.hfm-trossingen.de/"
      button="Erfahre mehr"
      $objectPosition="30%"
    />
    <TeamAccordion items={TeamTrosData} />
    <BildText
      imgSrc={ImageTablet}
      imgAlt="Hochschule Düsseldorf"
      headline="Hochschule Düsseldorf & MIREVI"
      description="Die Hochschule Düsseldorf – bis Mai 2015 Fachhochschule Düsseldorf – ist eine staatliche Fachhochschule mit einem neuen Campus in Düsseldorf-Derendorf. Die HSD ging 1971 aus verschiedenen Ausbildungsstätten hervor.

      MIREVI (Mixed Reality and Visualization) gehört zur Medienabteilung der Hochschule Düsseldorf (HSD). Ob Gesundheit und Wohlbefinden, Kunst, Wirtschaft oder Ingenieurwesen – das vielfältige und kreative Team forscht, entwickelt und bietet Unterstützung in verschiedenen Bereichen, um diese mit wegweisenden Ideen zu verbessern und zu innovieren."
      linkTo="https://mirevi.de/"
      button="Erfahre mehr"
      $objectPosition="30%"
    />
    <TeamAccordion items={TeamDusData} />
  </>
);
export default TeamPage;
