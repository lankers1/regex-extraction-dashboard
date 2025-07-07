import { create } from "zustand";
import { persist } from "zustand/middleware";

type RegexExtractsStore = {
  regexExtracts: string[];
  addExtract: (extract: RegExp) => void;
  deleteExtract: (index: number) => void;
};

export const useRegexExtractsStore = create<RegexExtractsStore>()(
  persist(
    (set, get) => ({
      regexExtracts: [],
      addExtract: (extract: RegExp) => {
        set({ regexExtracts: [...get().regexExtracts, extract.toString()] });
      },
      deleteExtract: (index: number) => {
        set({
          regexExtracts: get().regexExtracts?.filter(
            (_, extractIndex) => extractIndex !== index
          ),
        });
      },
    }),
    {
      name: "regex-extracts-storage",
    }
  )
);
