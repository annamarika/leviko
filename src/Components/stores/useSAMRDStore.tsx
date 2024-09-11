import { create } from "zustand";

interface InfoBoxContent {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
}

interface StoreSAMRDState {
  clickedId: string | null; // Store the ID of the clicked InfoContainer
  setClickedId: (id: string | null) => void; // Function to set the clicked ID
  content: InfoBoxContent[]; // Store the content for each InfoBox
}

export const useSAMRDStore = create<StoreSAMRDState>((set) => ({
  clickedId: "container1",
  setClickedId: (id: string | null) => set({ clickedId: id }),
  content: [
    {
      id: "container1",
      title: "Substitution",
      shortText: "Ersatz",
      fullText:
        "Technologie ist direkter Ersatz für Arbeitsmittel, ohne funktionale Änderung.",
    },
    {
      id: "container2",
      title: "Augmentation",
      shortText: "Erweiterung",
      fullText:
        "Technologie ersetzt bestehende Aktivitäten ohne wesentliche Änderung.",
    },
    {
      id: "container3",
      title: "Modification",
      shortText: "Änderung",
      fullText:
        "Technologie führt zu einer grundlegenden Umgestaltung der Lernaktivität, z.B. durch multimediale Gruppenpräsentationen.",
    },
    {
      id: "container4",
      title: "Redefinition",
      shortText: "Neudefinition",
      fullText:
        "Technologie ermöglicht völlig neue Lernaktivitäten, z.B. neue Formen der Zusammenarbeit, Kreativität und Kommunikation.",
    },
  ],
}));
