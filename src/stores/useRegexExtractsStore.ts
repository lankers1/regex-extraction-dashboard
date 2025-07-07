import { create } from "zustand";
import { persist } from "zustand/middleware";

type RegexExtractsStore = {
  regexExtracts: string[];
  addExtracts: (extract: RegExp) => void;
};

export const useRegexExtractsStore = create<RegexExtractsStore>()(
  persist(
    (set, get) => ({
      regexExtracts: [],
      addExtracts: (extract: RegExp) => {
        set({ regexExtracts: [...get().regexExtracts, extract.toString()] });
      },
    }),
    {
      name: "regex-extracts-storage",
    }
  )
);
