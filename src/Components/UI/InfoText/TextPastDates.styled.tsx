import styled from "styled-components";

// Container für das gesamte Element mit Flexbox
export const DateHeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 160px; // Abstand wie im vorigen Beispiel

  @media (max-width: 1330px) {
    margin: 24px; // Weniger Margin für kleinere Bildschirme
  }

  @media (max-width: 430px) {
    flex-direction: column; // Bei kleinen Bildschirmen untereinander anordnen
    align-items: flex-start; // Linksbündig
    margin: 16px 24px; // Margin anpassen
  }
`;

// Stil für das Datum
export const DateContainer = styled.h4`
  font-weight: bold;
  width: 30%; // Breite für das Datum (30% des Containers)

  @media (max-width: 430px) {
    width: auto; // Vollbreite auf kleinen Bildschirmen
    margin-bottom: 8px; // Abstand unter dem Datum
  }
`;

// Stil für die Überschrift (h3)
export const HeadlineContainer = styled.h4`
  margin: 0; // Standardmäßigen Margin entfernen
  width: 70%; // Breite für die Headline (70% des Containers)

  @media (max-width: 430px) {
    width: auto; // Vollbreite auf kleinen Bildschirmen
  }
`;