// store/usePublikationenStore.ts
import { create } from "zustand";

interface PublikationenState {
  searchValue: string;
  selectedTag: string;
  setSearchValue: (value: string) => void;
  setSelectedTag: (tag: string) => void;
  clearFilters: () => void;
}

const usePublikationenStore = create<PublikationenState>((set) => ({
  searchValue: "",
  selectedTag: "",
  setSearchValue: (value: string) => set({ searchValue: value }),
  setSelectedTag: (tag: string) => set({ selectedTag: tag }),
  clearFilters: () => set({ searchValue: "", selectedTag: "" }),
}));

export default usePublikationenStore;
