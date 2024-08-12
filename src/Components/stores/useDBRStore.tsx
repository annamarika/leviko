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
  selectedBox: "Requirements",
  selectBox: (boxName) => set({ selectedBox: boxName }),
  contentMap: {
    Requirements: {
      headline: "Requirements",
      description: (
        <p>
          Diese Phase beinhaltet die Identifizierung der Bildungsbedürfnisse
          oder Probleme, die die Forschung adressieren möchte. Ziel ist es, zu
          verstehen, was innerhalb eines spezifischen Bildungskontextes
          verbessert oder innoviert werden muss.
        </p>
      ),
    },
    Design: {
      headline: "Design",
      description: (
        <p>
          In der Designphase werden Lösungsansätze und Prototypen entwickelt,
          die die zuvor identifizierten Anforderungen erfüllen sollen.
        </p>
      ),
    },
    Theory: {
      headline: "Theory",
      description: (
        <p>
          Diese Phase fokussiert sich auf die theoretische Fundierung der
          vorgeschlagenen Lösungen und deren Implikationen.
        </p>
      ),
    },
    Analysis: {
      headline: "Analysis",
      description: (
        <p>
          Die Analysephase dient der Evaluierung und Reflexion der
          implementierten Lösungen, um deren Wirksamkeit zu überprüfen.
        </p>
      ),
    },
    Implementation: {
      headline: "Implementation",
      description: (
        <p>
          In dieser Phase erfolgt die praktische Umsetzung der entwickelten
          Designs und deren Anpassung an den realen Bildungsprozess.
        </p>
      ),
    },
    ReDesign: {
      headline: "Re-Design",
      description: (
        <p>
          Basierend auf den Analyseergebnissen wird das Design angepasst und
          optimiert, um den Anforderungen besser gerecht zu werden.
        </p>
      ),
    },
    ImplicationOfTheory: {
      headline: "Implication of Theory",
      description: (
        <p>
          Diese Phase verbindet die theoretischen Erkenntnisse mit der Praxis,
          um nachhaltige Bildungsinnovationen zu schaffen.
        </p>
      ),
    },
  },
}));
