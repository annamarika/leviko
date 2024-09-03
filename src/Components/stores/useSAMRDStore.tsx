import { create } from "zustand";

interface StoreSAMRDState {
  clickedId: string | null; // Store the ID of the clicked InfoContainer
  setClickedId: (id: string | null) => void; // Function to set the clicked ID
}

export const useSAMRDStore = create<StoreSAMRDState>((set) => ({
  clickedId: "container1",
  setClickedId: (id: string | null) => set({ clickedId: id }),
}));
