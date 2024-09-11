// DiagrammIntroText.styled.ts
import styled from "styled-components";

// Container für den gesamten Abschnitt des Methoden-Intros
export const MethodenIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 160px;
  margin-left: 160px;
  padding-top: 50px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    padding-bottom: 24px;
  }

  @media (max-width: 430px) {
    padding: 0;
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    align-items: stretch;
  }
`;

// Stil für die Beschreibung im Methoden-Intro-Bereich
export const Description = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    margin-bottom: 0px;
  }

  @media (max-width: 430px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
