import { create } from "zustand";
import { persist } from "zustand/middleware";

type RegexExtractsStore = {
  regexExtracts: string[];
  addExtract: (extract: RegExp) => void;
  deleteExtract: (index: number) => void;
  editExtract: (index: number, editedExtract: RegExp) => void;
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
      editExtract: (index: number, editedExtract: RegExp) => {
        set({
          regexExtracts: get().regexExtracts?.map((extract, extractIndex) => {
            if (extractIndex === index) return editedExtract.toString();
            return extract;
          }),
        });
      },
    }),
    {
      name: "regex-extracts-storage",
    }
  )
);
