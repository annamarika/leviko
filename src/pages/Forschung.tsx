import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import ParallaxSection from "../Components/UI/Parallax/ParallaxSection.styled.tsx";
import Forschungsfragen from "../Components/Parallax/Forschungsfragen.tsx";
import HeroProjekt from "../Components/Hero/HeroProjekt";
import FroschungNav from "../Components/InfoText/ForschungNav";
import { Headline } from "../Components/UI/Headline.styled";
import FraumitBrille from "../assets/images/Frau_mit_Meta_Quest.webp";
import ForschungsfragenWhite from "../Components/Parallax/ForschungsfragenWhite.tsx";
import KontaktTeaser from "../Components/InfoText/KontaktTeaser.tsx";
import DiagrammIntro from "../Components/Diagramme/DiagrammIntro.tsx";
import DiagrammOutro from "../Components/Diagramme/DiagrammOutro.tsx";
import DBRDiagramm from "../Components/Diagramme/DBRDiagramm.tsx";
import TPACKDiagramm from "../Components/Diagramme/TPACKDiagramm.tsx";
import SAMRDiagramm from "../Components/Diagramme/SAMRDiagramm.tsx";
import CAMILDiagramm from "../Components/Diagramme/CAMILDiagramm.tsx";
import DiagrammIntroText from "../Components/Diagramme/DiagrammIntroText.tsx";
import KerresDiagramm from "../Components/Diagramme/KerresDiagramm.tsx";
import MarqueeNews from "../Components/Banner/MarqueeNews.tsx";

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
        $objectPosition="center 70%"
      />
      <FroschungNav />
      <Headline id="forschungsfragen"> Forschungsfragen</Headline>
      <ParallaxSection ref={refOne} className="sticky-section">
        <Forschungsfragen
          headline={
            "Durch welche messbaren Faktoren unterscheiden sich Lehr-Lern-Umgebungen in XR von Nicht-XR-Umgebungen und wie lassen sich diese differenzieren?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refTwo} className="sticky-section">
        <ForschungsfragenWhite
          headline={
            "Welche Lehr-Lern-Designs in verschiedenen Handlungsfeldern des Musikunterrichts sind aus didaktischer, technologischer und ethischer Sicht geeignet? Wie lassen sich diese dokumentieren und disseminieren?"
          }
        />
      </ParallaxSection>
      <ParallaxSection ref={refThree} className="sticky-section">
        <Forschungsfragen
          headline={
            "Wie können die Grenzen und Potenziale des Einsatzes von XR-Technologien im Musikunterricht aus didaktischer Perspektive eingeordnet werden?"
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
          linkTo="/publikationen"
          button="Publikationen"
          $buttonVariant="tertiary"
        />
      </ParallaxSection>
      <Headline id="methoden"> Methode</Headline>
      <DiagrammIntroText
        headline="Design-Based Research"
        description={
          <>
            <p>
              Bei LEVIKO XR verfolgen wir einen Design-Based Research
              (DBR)-Ansatz, im Bereich der angewandten Forschung.
            </p>
            <br />
            <p>
              Unser Ziel ist es, durch iteratives Design und kontinuierliche
              Reflexion Lehr-Lern-Designs zu entwickeln, die sowohl
              wissenschaftlich? fundiert als auch praktisch erprobt sind.
            </p>
          </>
        }
      />
      <DBRDiagramm />
      <DiagrammOutro
        description={
          "Der DBR-Ansatz ermöglicht es uns, Innovationen zu entwickeln, die sowohl in der Theorie verankert als auch in der Praxis bewährt sind. Die enge Verbindung von Forschung und Praxis führt zu realen Verbesserungen in der Musikpädagogik und bereichert die wissenschaftliche Gemeinschaft mit wertvollen Erkenntnissen."
        }
        linkTo={""}
        button={"Erfahre mehr"}
      />
      <Headline>Newsticker</Headline>
      <MarqueeNews />
      <Headline id="modelle"> Modelle</Headline>
      <DiagrammIntro
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
              LEVIKO-XR nutzt dieses Rahmenwerk, um eine harmonische Integration
              von Musikpädagogik und digitaler Technologie zu erreichen.
            </p>
          </>
        }
        displayedSVG="tpack"
      />
      <TPACKDiagramm />
      <DiagrammOutro
        description={
          "Das TPACK-Modell ermöglicht uns, die Wechselwirkungen zwischen technologischen, pädagogischen und inhaltlichen Aspekten im Musikunterricht präzise zu analysieren und zu optimieren. Durch die Anwendung dieses Rahmenwerks streben wir bei LEVIKO-XR danach, eine innovative und effektive Nutzung von VR/AR-Technologien zu gewährleisten, die sowohl die Lehrqualität als auch das Lernumfeld im Musikunterricht bereichert."
        }
        linkTo={""}
        button={"Erfahre mehr"}
      />
      <DiagrammIntro
        headline="SAMR"
        description={
          <>
            <p>
              Das SAMR-Modell, entwickelt von Ruben Puentedura, dient als
              Rahmenkonzept zur Beschreibung und Bewertung der Integration von
              Technologie in den Unterricht.
            </p>
            <br />
            <p>
              Bei LEVIKO XR nutzen wir dieses Modell, um sicherzustellen, dass
              die Integration von VR/AR-Anwendungen einen bedeutungsvollen
              Mehrwert für Lehrende und Lernende bietet.
            </p>
          </>
        }
        displayedSVG="box"
      />
      <SAMRDiagramm />
      <DiagrammOutro
        description={
          "Das SAMR-Modell dient Lehrkräften als Werkzeug, um zu reflektieren, wie sie Technologie in ihren Unterricht integrieren. Es hilft sicherzustellen, dass Technologie nicht nur als Ersatz für herkömmliche Methoden genutzt wird, sondern tatsächlich transformative Lernerfahrungen geschaffen werden."
        }
        linkTo={""}
        button={"Erfahre mehr"}
      />
      <DiagrammIntroText
        headline="CAMIL"
        description={
          <>
            <p>
              Das CAMIL-Modell ist ein Rahmenkonzept, das von Punya Mishra und
              Matthew Koehler entwickelt wurde und sich auf die Integration von
              Technologie in die Lehrerausbildung konzentriert.
            </p>
            <br />
            <p>
              Bei LEVIKO-XR nutzen wir dieses Modell, um sicherzustellen, dass
              die Integration von VR/AR-Anwendungen einen bedeutungsvollen
              Mehrwert für Lehrende und Lernende bietet.
            </p>
          </>
        }
      />
      <CAMILDiagramm />
      <DiagrammOutro
        description={
          "Das CAMIL-Modell bietet Lehrkräften einen umfassenden Rahmen, um die Integration von Technologie in ihren Unterricht zu planen, zu gestalten und zu evaluieren, wobei der Fokus auf den Lernbedürfnissen der Schülerinnen und Schüler liegt."
        }
        linkTo={""}
        button={"Erfahre mehr"}
      />
      <DiagrammIntroText
        headline="Rahmenmodell der Mediendidaktik (Kerres)"
        description={
          <>
            <p>
              Das Rahmenmodell der Mediendidaktik visualisiert das Erleben
              visueller Informationen im Kontext des Lernens mit Virtual Reality
              (VR) und Augmented Reality (AR).
            </p>
            <br />
            <p>
              Es zeigt die Beziehungen zwischen den technischen Merkmalen der
              verwendeten Technologien, den subjektiven Erlebniselementen, den
              kognitiven und emotionalen Lernprozessen sowie den daraus
              resultierenden Lernergebnissen.
            </p>
          </>
        }
      />
      <KerresDiagramm />
      <DiagrammOutro
        description={
          "Diese Struktur bietet eine Grundlage, um gezielte Forschungsfragen zu den Implikationen des Immersionserlebens zu formulieren und die mediendidaktische Gestaltung von Lernumgebungen zu optimieren."
        }
        linkTo={""}
        button={"Erfahre mehr"}
      />
    </>
  );
};

export default FroschungsPage;
