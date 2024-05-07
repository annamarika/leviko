// useHeaderStore.ts
import { create } from "zustand";

interface HeaderState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  visible: boolean;
  lastScrollY: number;
  setVisible: (visible: boolean) => void;
  setLastScrollY: (lastScrollY: number) => void;
}

const useHeaderStore = create<HeaderState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  visible: true,
  lastScrollY: 0,
  setVisible: (visible) => set(() => ({ visible })),
  setLastScrollY: (lastScrollY) => set(() => ({ lastScrollY })),
}));

export default useHeaderStore;
