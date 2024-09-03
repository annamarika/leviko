import { create } from "zustand";

interface KerresState {
  activeBox: number;
  setActiveBox: (boxIndex: number) => void;
  activeBoxText: number | null;
  setActiveBoxText: (boxTextId: number | null) => void;
  visibleContainers: { [key: number]: boolean };
  toggleContainerVisibility: (boxId: number) => void;
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
