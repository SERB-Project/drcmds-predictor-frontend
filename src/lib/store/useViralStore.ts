import { create } from "zustand";

interface ViralStore {
  results: any | null; 
  setResults: (data: any) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useViralStore = create<ViralStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis", 
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
