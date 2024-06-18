// useHeaderStore.ts
import { create } from "zustand";

interface DarkModeState {
  isDarkModeOn: boolean;
  toggleDarkMode: () => void;

}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkModeOn: false,
  toggleDarkMode: () => set((state) => ({ isDarkModeOn: !state.isDarkModeOn })),

}));

export default useDarkModeStore;