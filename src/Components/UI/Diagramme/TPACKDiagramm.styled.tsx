// TPACKDiagramm.styled.ts
import styled from "styled-components";

// Wrapper für das gesamte Diagramm und die Infoabschnitte
export const DiagrammWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-right: 160px;
  margin-left: 160px;
  margin-top: -100px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
    margin-top: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 430px) {
    padding: 0;
    align-items: start;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

// Wrapper für den Informationsbereich
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
`;

// Container für die Infos, die den Text enthalten
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Wrapper für den Infotext mit Hintergrundfarbe
export const InfoTextWrapper = styled.div`
  display: flex;
  align-items: start;
  background-color: var(--leviko-green);
  color: var(--leviko-black);
`;

// Container für den Text und die Überschrift
export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 40px 64px;
  gap: 28px;

  @media (max-width: 1330px) {
    padding: 24px 20px 24px 64px;
  }

  @media (max-width: 430px) {
    padding: 15px 10px 20px 10px;
  }
`;

// Stil für den vertikalen Text neben dem Informationsbereich
export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  @media (max-width: 430px) {
    padding: 10px 10px;
  }
`;

// Wrapper für das TPACK-Diagramm
export const TPACKDiagrammWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

// Container für das Diagramm
export const DiagrammContainer = styled.div`
  position: relative;
  width: 100vw;
`;
