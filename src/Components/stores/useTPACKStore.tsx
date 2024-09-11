import { create } from "zustand";

// Zustand Store erweitern
interface TPACKState {
  selectedPath: string | null;
  headline: string;
  description: string;
  selectPath: (pathId: string, headline: string, description: string) => void;
  handlePathClick: (pathId: string) => void;
}

export const useTPACKStore = create<TPACKState>((set) => ({
  selectedPath: "path4",
  headline: "Technologisches Pädagogisches Inhaltswissen",
  description:
    "Dies ist das zentrale Konzept des TPACK-Rahmenmodells und beschreibt das optimale Zusammenspiel von Technologie (TK), Pädagogik (PK) und Fachwissen (CK) in der Unterrichtspraxis.",

  selectPath: (pathId, headline, description) =>
    set({ selectedPath: pathId, headline, description }),

  handlePathClick: (pathId) => {
    switch (pathId) {
      case "path1":
        set({
          selectedPath: pathId,
          headline: "Technological Knowledge",
          description:
            "Dies bezieht sich auf das Verständnis der Lehrkräfte über die Funktionsweise verschiedener Technologien, wie z.B. Software, Apps, und Hardware, und wie sie im Bildungskontext eingesetzt werden können.",
        });
        break;
      case "path2":
        set({
          selectedPath: pathId,
          headline: "Content Knowledge",
          description:
            "Dies umfasst das Fachwissen der Lehrkräfte in ihrem jeweiligen Fachbereich, einschließlich der grundlegenden Konzepte, Theorien und Praktiken.",
        });
        break;
      case "path3":
        set({
          selectedPath: pathId,
          headline: "Pedagogical Knowledge",
          description:
            "Hier geht es um das Verständnis der Lehrkräfte über pädagogische Prinzipien, Unterrichtsmethoden und -strategien, sowie ihre Fähigkeit, Lerninhalte effektiv zu vermitteln.",
        });
        break;
      case "path4":
        set({
          selectedPath: pathId,
          headline: "Technologisches Pädagogisches Inhaltswissen",
          description:
            "Dies ist das zentrale Konzept des TPACK-Rahmenmodells und beschreibt das optimale Zusammenspiel von Technologie (TK), Pädagogik (PK) und Fachwissen (CK) in der Unterrichtspraxis.",
        });
        break;
      case "path5":
        set({
          selectedPath: pathId,
          headline: "Pedagogical Content Knowledge",
          description:
            "PCK beschreibt das Verständnis der Lehrkräfte darüber, wie sie ihr Fachwissen (Content Knowledge) effektiv vermitteln können, indem sie pädagogische Strategien und Methoden einsetzen.",
        });
        break;
      case "path6":
        set({
          selectedPath: pathId,
          headline: "Technological Content Knowledge",
          description:
            "Hierbei handelt es sich um das Verständnis der Lehrkräfte darüber, wie Technologie genutzt werden kann, um das Fachwissen (Content Knowledge) besser zu vermitteln und zu verstehen.",
        });
        break;
      case "path7":
        set({
          selectedPath: pathId,
          headline: "Technological Pedagogical Knowledge",
          description:
            "TPK beschreibt das Verständnis der Lehrkräfte darüber, wie Technologie spezifisch in den pädagogischen Kontext integriert werden kann, um effektives Lehren und Lernen zu fördern.",
        });
        break;
      case "path8":
        set({
          selectedPath: pathId,
          headline: "New Headline for Path 8",
          description: "Description for Path 8.",
        });
        break;
    }
  },
}));
