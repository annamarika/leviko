import { create } from "zustand";

interface AccordionState {
  expanded: string | null;
  setExpanded: (itemId: string | null) => void;
}

const useAccordionStore = create<AccordionState>((set) => ({
  expanded: null,
  setExpanded: (itemId) => set({ expanded: itemId }),
}));

export default useAccordionStore;
