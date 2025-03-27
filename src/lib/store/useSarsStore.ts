import { create } from "zustand";

interface SarsStore {
  results: any | null; // Store API results
  setResults: (data: any) => void; // Function to update results
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useSarsStore = create<SarsStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
