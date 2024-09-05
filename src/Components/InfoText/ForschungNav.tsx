import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowSVG from "../UI/Buttons/ArrowSVG.tsx";
import useDarkModeStore from "../stores/useDarkModeStore";

interface DarkModeProps {
  $isDarkModeOn: boolean;
}

const FroschungNav = () => {
  const { isDarkModeOn } = useDarkModeStore();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <ForschungNavContainer>
        <NavContainer>
          <NavHeadline>Auf dieser Seite</NavHeadline>
          <NavPWrapper>
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
          <PublikationsTeaser>
            Du willst mehr über den aktullen Stand erfahren? Dann besuche die
            folgende Seite.
          </PublikationsTeaser>
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

export const ForschungNavContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  margin-bottom: 100px;
  gap: 32px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 32px;
    margin-bottom: 80px;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    gap: 32px;
    margin-bottom: 56px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: calc(33.33%);

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const NavHeadline = styled.h3`
  @media (max-width: 430px) {
    font-size: 32px;
  }
`;

export const NavPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const NavPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: calc(70%);
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const NavP = styled.p<DarkModeProps>`
  font-size: 24px;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  text-decoration: none;

  &:hover {
    color: ${({ $isDarkModeOn }) =>
      $isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"};
  }

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

export const PublikationsTeaser = styled.p`
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const StyledArrowSVG = styled(ArrowSVG)`
  &:hover {
    fill: var(--leviko-black);
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 430px) {
    width: 26px;
    height: 26px;
  }
`;

const ArrowContainerPublikationen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  transform: rotate(270deg);

  @media (max-width: 1024px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 430px) {
    width: 26px;
    height: 26px;
  }
`;

export const TextContainer = styled.h3`
  width: calc(66.66%);

  @media (max-width: 430px) {
    width: 100%;
  }
`;
