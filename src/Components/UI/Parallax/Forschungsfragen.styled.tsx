// Forschungsfragen.styled.ts
import styled from "styled-components";

// Wrapper für den gesamten Parallax-Bereich
export const ParalaxWrapper = styled.div`
  background-color: var(--leviko-blue);

  @media (max-width: 430px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

// Container für den Inhalt des Parallax-Bereichs
export const ParalaxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;
  background-color: var(--leviko-blue);
  color: var(--leviko-white);

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
  }

  @media (max-width: 430px) {
    padding: 0;
    flex-direction: column;
    align-items: start;
    gap: 0;
    margin-bottom: 0;
  }
`;

// Container für die Überschrift im Parallax-Bereich
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 38px;
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

// Container für den Text unterhalb der Überschrift
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
  }
`;