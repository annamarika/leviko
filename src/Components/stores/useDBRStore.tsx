import { create } from "zustand";

interface DBRStoreState {
  selectedBox: string;
  selectBox: (boxName: string) => void;
  contentMap: {
    [key: string]: {
      headline: string;
      description: JSX.Element;
    };
  };
}

export const useDBRStore = create<DBRStoreState>((set) => ({
  selectedBox: "Requirements", // Default selection
  selectBox: (boxName) => {
    const key = boxName.replace(/-/g, ""); // Remove hyphens from box names
    set({ selectedBox: key });
  },
  contentMap: {
    Requirements: {
      headline: "Requirements",
      description: (
        <p>
          Diese Phase beinhaltet die Identifizierung der Bildungsbedürfnisse
          oder Probleme, die durch die Forschung adressiert werden sollen. Das
          Ziel ist es, zu verstehen, welche Verbesserungen oder Innovationen in
          einem spezifischen Bildungskontext notwendig sind.
        </p>
      ),
    },
    Design: {
      headline: "Design",
      description: (
        <p>
          In der Designphase werden Lösungsansätze und Prototypen entwickelt,
          die darauf abzielen, die zuvor identifizierten Anforderungen zu
          erfüllen.
        </p>
      ),
    },
    Theory: {
      headline: "Theory",
      description: (
        <p>
          Diese Phase fokussiert sich auf die theoretische Fundierung der
          vorgeschlagenen Lösungen und deren potenzielle Implikationen.
        </p>
      ),
    },
    Analysis: {
      headline: "Analysis",
      description: (
        <p>
          Die Analysephase dient der Evaluierung und Reflexion der
          implementierten Lösungen, um deren Wirksamkeit zu überprüfen und
          Erkenntnisse für weitere Verbesserungen zu gewinnen.
        </p>
      ),
    },
    Implementation: {
      headline: "Implementation",
      description: (
        <p>
          In dieser Phase erfolgt die praktische Umsetzung der entwickelten
          Designs und deren Anpassung an den realen Bildungsprozess, um eine
          effektive Integration in den Unterricht zu gewährleisten.
        </p>
      ),
    },
    ReDesign: {
      headline: "Re-Design",
      description: (
        <p>
          Basierend auf den Analyseergebnissen wird das Design angepasst und
          optimiert, um den Anforderungen noch besser gerecht zu werden und
          kontinuierlich Verbesserungen zu erzielen
        </p>
      ),
    },
    ImplicationofTheory: {
      headline: "Implication of Theory",
      description: (
        <p>
          Diese Phase verbindet theoretische Erkenntnisse mit der Praxis, um
          nachhaltige Bildungsinnovationen zu schaffen, die langfristig wirksam
          sind.
        </p>
      ),
    },
  },
}));
