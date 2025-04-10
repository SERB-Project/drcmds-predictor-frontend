import { create } from "zustand";

interface SarsResult {
  prediction: string;
  spdi: string;
  consequences: string[];
  mutations: Array<{
    position: number;
    reference: string;
    variant: string;
  }>;
}

interface SarsStore {
  results: SarsResult | null; // Store API results
  setResults: (data: SarsResult) => void; // Function to update results
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useSarsStore = create<SarsStore>((set) => ({
  results: null,
  setResults: (data) => set({ results: data }),
  activeTab: "analysis",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
