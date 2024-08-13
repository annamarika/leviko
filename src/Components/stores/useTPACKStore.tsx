import { create } from "zustand";

interface TPACKState {
  selectedPath: string | null;
  headline: string;
  description: string;
  selectPath: (pathId: string, headline: string, description: string) => void;
}

export const useTPACKStore = create<TPACKState>((set) => ({
  selectedPath: "path4",
  headline: "Technologisches Pädagogisches Inhaltswissen",
  description:
    "Dies ist das zentrale Konzept des TPACK-Rahmenmodells und beschreibt das optimale Zusammenspiel von Technologie (TK), Pädagogik (PK) und Fachwissen (CK) in der Unterrichtspraxis.",
  selectPath: (pathId, headline, description) =>
    set({ selectedPath: pathId, headline, description }),
}));
