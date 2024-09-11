import { Link } from "react-router-dom";
import {
  ForschungNavContainer,
  NavContainer,
  NavHeadline,
  NavPWrapper,
  NavPContainer,
  NavP,
  PublikationsTeaser,
  StyledArrowSVG,
  ArrowContainer,
  ArrowContainerPublikationen,
  TextContainer,
} from "../UI/InfoText/ForschungNav.styled.tsx";
import useDarkModeStore from "../stores/useDarkModeStore";

// Funktionale Komponente für die Navigation auf der Forschungsseite
const FroschungNav = () => {
  const { isDarkModeOn } = useDarkModeStore(); // Zustand für Dark Mode abrufen

  // Funktion zum Scrollen zu einer bestimmten Sektion
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ForschungNavContainer>
        {/* Navigationsbereich */}
        <NavContainer>
          <NavHeadline>Auf dieser Seite</NavHeadline>
          <NavPWrapper>
            {/* Navigationspunkte */}
            <NavPContainer onClick={() => scrollToSection("forschungsfragen")}>
              <NavP $isDarkModeOn={isDarkModeOn}>Forschungsfragen</NavP>
              <ArrowContainer>
                <StyledArrowSVG
                  color={
                    isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"
                  }
                />
              </ArrowContainer>
            </NavPContainer>
            <NavPContainer onClick={() => scrollToSection("methoden")}>
              <NavP $isDarkModeOn={isDarkModeOn}>Methode</NavP>
              <ArrowContainer>
                <StyledArrowSVG
                  color={
                    isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"
                  }
                />
              </ArrowContainer>
            </NavPContainer>
            <NavPContainer onClick={() => scrollToSection("modelle")}>
              <NavP $isDarkModeOn={isDarkModeOn}>Modelle</NavP>
              <ArrowContainer>
                <StyledArrowSVG
                  color={
                    isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"
                  }
                />
              </ArrowContainer>
            </NavPContainer>
          </NavPWrapper>

          {/* Teaser für Publikationen */}
          <PublikationsTeaser>
            Du willst mehr über den aktuellen Stand erfahren? Dann besuche die
            folgende Seite.
          </PublikationsTeaser>

          {/* Link zu Publikationen */}
          <NavPContainer>
            <NavP $isDarkModeOn={isDarkModeOn} as={Link} to="/publikationen">
              Publikationen
            </NavP>
            <ArrowContainerPublikationen>
              <StyledArrowSVG
                color={
                  isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"
                }
              />
            </ArrowContainerPublikationen>
          </NavPContainer>
        </NavContainer>

        {/* Beschreibungstext */}
        <TextContainer>
          Unsere Forschung konzentriert sich auf eine Reihe zentraler Fragen,
          die den Einsatz von VR/AR im Musikunterricht betreffen. Dabei setzen
          wir auf eine vielfältige Methodik und nutzen bewährte Modelle aus der
          Bildungsforschung, um unseren Ansatz zu validieren und zu verfeinern.
        </TextContainer>
      </ForschungNavContainer>
    </>
  );
};

export default FroschungNav;
