import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowSVG from "../UI/Buttons/ArrowSVG.tsx";

const FroschungNav = () => {
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
          <h3>Auf dieser Seite</h3>
          <NavPWrapper>
            <NavPContainer onClick={() => scrollToSection("forschungsfragen")}>
              <NavP>Forschungsfragen</NavP>
              <ArrowContainer>
                <StyledArrowSVG color="var(--leviko-blue)" />
              </ArrowContainer>
            </NavPContainer>
            <NavPContainer onClick={() => scrollToSection("methoden")}>
              <NavP>Methoden</NavP>
              <ArrowContainer>
                <StyledArrowSVG color="var(--leviko-blue)" />
              </ArrowContainer>
            </NavPContainer>
            <NavPContainer onClick={() => scrollToSection("modelle")}>
              <NavP>Modelle</NavP>
              <ArrowContainer>
                <StyledArrowSVG color="var(--leviko-blue)" />
              </ArrowContainer>
            </NavPContainer>
          </NavPWrapper>
          <p>
            Du willst mehr über den aktullen Stand erfahren? Dann besuche die
            folgende Seite.
          </p>
          <NavPContainer>
            <NavP as={Link} to="/team">
              Publikationen
            </NavP>
            <ArrowContainerPublikationen>
              <StyledArrowSVG color="var(--leviko-blue)" />
            </ArrowContainerPublikationen>
          </NavPContainer>
        </NavContainer>
        <h3>
          Unsere Forschung konzentriert sich auf eine Reihe zentraler Fragen,
          die den Einsatz von VR/AR im Musikunterricht betreffen. Dabei setzen
          wir auf eine vielfältige Methodik und nutzen bewährte Modelle aus der
          Bildungsforschung, um unseren Ansatz zu validieren und zu verfeinern.
        </h3>
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
    gap: 24px;
    margin-bottom: 80px;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    gap: 0;
    margin-bottom: 56px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: calc(33.33%);
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
`;

export const NavP = styled.p`
  font-size: 24px;
  color: var(--leviko-blue);
  text-decoration: none;

  &:hover {
    color: var(--leviko-black);
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
`;
