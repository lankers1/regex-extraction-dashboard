import { create } from "zustand";
import { persist } from "zustand/middleware";

type ExtractTerms = (string | null)[];

type ExtractedTermsStore = {
  extractedTerms: ExtractTerms;
  termsExtract: boolean;
  saveExtractedTerms: (extractedTerms: ExtractTerms) => void;
};

export const useExtractedTermsStore = create<ExtractedTermsStore>()(
  persist(
    (set) => ({
      extractedTerms: [],
      termsExtract: false,
      saveExtractedTerms: (extractedTerms: ExtractTerms) => {
        set({ extractedTerms });
      },
    }),
    {
      name: "extracted-terms-storage",
    }
  )
);
