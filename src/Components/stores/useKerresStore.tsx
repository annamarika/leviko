import { create } from "zustand";

interface BoxContent {
  boxId: number;
  title: string;
  items: Array<{ id: number; title: string; content: string }>;
}

interface KerresState {
  activeBox: number;
  setActiveBox: (boxIndex: number) => void;
  activeBoxText: number | null;
  setActiveBoxText: (boxTextId: number | null) => void;
  visibleContainers: { [key: number]: boolean };
  toggleContainerVisibility: (boxId: number) => void;
  boxContents: BoxContent[];
  title: string;
  content: string;
}

export const useKerresStore = create<KerresState>((set) => ({
  activeBox: 1,
  title: "Technische Merkmale",
  content:
    "Diese umfassen die Eigenschaften der eingesetzten Technologie, die die Darbietung und Interaktion mit visuellen Informationen beeinflussen:",
  setActiveBox: (boxIndex: number) =>
    set({
      activeBox: boxIndex,
      ...getContentForBox(boxIndex),
    }),
  activeBoxText: null,
  setActiveBoxText: (boxTextId: number | null) =>
    set({ activeBoxText: boxTextId }),
  visibleContainers: {},
  toggleContainerVisibility: (boxId: number) =>
    set((state) => ({
      visibleContainers: {
        ...state.visibleContainers,
        [boxId]: !state.visibleContainers[boxId],
      },
    })),
  // Inhalte der Boxen und deren TextContainer
  boxContents: [
    {
      boxId: 1,
      title: "Technische Merkmale",
      items: [
        {
          id: 2,
          title: "Kodierung",
          content: "Art der Informationen (Text, Zahl, Ton, Bild)",
        },
        {
          id: 3,
          title: "Darstellungsqualität / Auflösung",
          content: "Detailgenauigkeit und Klarheit der visuellen Präsentation.",
        },
        {
          id: 4,
          title: "Interaktion",
          content:
            "Möglichkeiten der Nutzer zur Interaktion mit der Technologie.",
        },
        {
          id: 5,
          title: "Perspektive",
          content:
            "Unterscheidung zwischen Third-Person und First-Person-Ansicht.",
        },
      ],
    },
    {
      boxId: 6,
      title: "Erlebniselemente",
      items: [
        {
          id: 7,
          title: "Realitätsempfinden",
          content: "Wahrnehmung der Realitätsnähe der Darstellung.",
        },
        {
          id: 8,
          title: "Agieren vs. Rezipieren",
          content:
            "Unterschied zwischen aktiver Teilnahme und passiver Rezeption.",
        },
        {
          id: 9,
          title: "Soziale Präsenz",
          content:
            "Gefühl der Anwesenheit anderer Personen in der virtuellen Umgebung.",
        },
        {
          id: 10,
          title: "Ko-Präsenz",
          content: "Gefühl der Zusammenarbeit mit anderen Personen.",
        },
        {
          id: 11,
          title: "Raumerleben",
          content:
            "Gefühl, sich in einem dreidimensionalen Raum zu befinden und sich darin bewegen zu können.",
        },
        {
          id: 12,
          title: "Immersion",
          content: "Intensität des Eintauchens in die virtuelle Welt.",
        },
        {
          id: 13,
          title: "Bewegung",
          content:
            "Wahrnehmung eigener Bewegungen innerhalb der virtuellen Welt.",
        },
        {
          id: 14,
          title: "First-/Third-Person-Perspektive",
          content: "Einfluss der Perspektive auf das Erleben.",
        },
      ],
    },
    {
      boxId: 15,
      title: "Lernprozesse",
      items: [
        {
          id: 16,
          title: "Cognitive Load",
          content:
            "Kognitive Belastung und Beanspruchung des Arbeitsgedächtnisses.",
        },
        {
          id: 17,
          title: "Cognitive Engagement",
          content:
            "Kognitive Einbindung und aktive Auseinandersetzung mit dem Lerninhalt.",
        },
        {
          id: 18,
          title: "Motivation",
          content: "Lernmotivation und Interesse am Lerninhalt.",
        },
        {
          id: 19,
          title: "Emotion",
          content: "Emotionale Reaktionen auf den Lerninhalt.",
        },
        {
          id: 20,
          title: "Flow",
          content: "Zustand des völligen Aufgehens in der Lernaktivität.",
        },
        {
          id: 21,
          title: "Affective Engagement",
          content: "Emotionale Einbindung in den Lernprozess.",
        },
        {
          id: 22,
          title: "Self-Regulation",
          content:
            "Fähigkeit zur Selbststeuerung und -organisation beim Lernen.",
        },
        {
          id: 23,
          title: "Behavioral Engagement",
          content: "Beobachtbares Verhalten und Teilnahme am Lernprozess.",
        },
      ],
    },
    {
      boxId: 24,
      title: "Lernergebnisse",
      items: [
        {
          id: 25,
          title: "Wissen",
          content: "Erworbenes Wissen und Verständnis.",
        },
        {
          id: 26,
          title: "Fertigkeiten",
          content: "Erlernte Fähigkeiten und Kompetenzen.",
        },
        {
          id: 27,
          title: "Einstellungen",
          content:
            "Veränderungen in den Einstellungen und Haltungen der Lernenden.",
        },
      ],
    },
  ],
}));

function getContentForBox(boxIndex: number): {
  title: string;
  content: string;
} {
  switch (boxIndex) {
    case 1:
      return {
        title: "Technische Merkmale",
        content:
          "Diese umfassen die Eigenschaften der eingesetzten Technologie, die die Darbietung und Interaktion mit visuellen Informationen beeinflussen.",
      };
    case 6:
      return {
        title: "Erlebniselemente",
        content:
          "Diese beschreiben die subjektiven Wahrnehmungen und Erfahrungen der Nutzer.",
      };
    case 15:
      return {
        title: "Lernprozesse",
        content:
          "Diese Merkmale beschreiben die kognitiven und emotionalen Prozesse während des Lernens.",
      };
    case 24:
      return {
        title: "Lernergebnisse",
        content: "Diese betreffen die Endresultate des Lernprozesses.",
      };
    default:
      return {
        title: "Technische Merkmale",
        content:
          "Diese umfassen die Eigenschaften der eingesetzten Technologie, die die Darbietung und Interaktion mit visuellen Informationen beeinflussen.",
      };
  }
}
