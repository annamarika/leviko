import { create } from "zustand";

interface CAMILState {
  activeCircle: number;
  setActiveCircle: (circleIndex: number) => void;
  title: string;
  content: string;
}

export const useCAMILStore = create<CAMILState>((set) => ({
  activeCircle: 1,
  title: "Content (Inhalt)",
  content:
    "Dies bezieht sich auf den Lehrplan oder die Lernziele, die vermittelt werden sollen. Die Integration von Technologie sollte den Lehrplan unterstützen und die Lerninhalte verbessern oder erweitern.",

  setActiveCircle: (circleIndex: number) =>
    set({
      activeCircle: circleIndex,
      ...getContentForCircle(circleIndex),
    }),
}));

function getContentForCircle(circleIndex: number): {
  title: string;
  content: string;
} {
  switch (circleIndex) {
    case 1:
      return {
        title: "Content (Inhalt)",
        content:
          "Dies bezieht sich auf den Lehrplan oder die Lernziele, die vermittelt werden sollen. Die Integration von Technologie sollte den Lehrplan unterstützen und die Lerninhalte verbessern oder erweitern.",
      };
    case 2:
      return {
        title: "Audience (Zielgruppe)",
        content:
          "Hier geht es um die Schülerinnen und Schüler oder Lernenden, für die der Unterricht gestaltet wird. Lehrkräfte müssen berücksichtigen, wer ihre Zielgruppe ist und wie diese am besten von der Integration von Technologie profitieren kann.",
      };
    case 3:
      return {
        title: "Media (Medien)",
        content:
          "Dies bezieht sich auf die verschiedenen Arten von Technologien oder Medien, die im Unterricht eingesetzt werden können, wie z.B. interaktive Whiteboards, Tablets, Lern-Apps usw. Es ist wichtig, Medien auszuwählen, die den Lernzielen und den Bedürfnissen der Schülerinnen und Schüler entsprechen.",
      };
    case 4:
      return {
        title: "Implementation (Implementierung)",
        content:
          "Dies bezieht sich darauf, wie die Technologie tatsächlich in den Unterricht integriert wird. Lehrkräfte müssen sicherstellen, dass die Technologie effektiv genutzt wird und den Unterricht unterstützt, anstatt ihn zu behindern.",
      };
    case 5:
      return {
        title: "Learning (Lernen)",
        content:
          "Schließlich steht beim CAMIL-Modell das Lernen der Schülerinnen und Schüler im Mittelpunkt. Lehrkräfte müssen sicherstellen, dass die Integration von Technologie das Lernen verbessert und die Lernziele erreicht werden.",
      };
    default:
      return {
        title: "Content (Inhalt)",
        content:
          "Dies bezieht sich auf den Lehrplan oder die Lernziele, die vermittelt werden sollen. Die Integration von Technologie sollte den Lehrplan unterstützen und die Lerninhalte verbessern oder erweitern.",
      };
  }
}
