import { useExtractedTermsStore } from "@/stores/useExtractedTermStore";
import { useTextContentStore } from "@/stores/useTextContentStore";
import { matchTerms } from "@/utils/matchTerms";
import { useEffect } from "react";

export const useUpdateExtractedTerms = (regexExtracts: string[]) => {
  const textContent = useTextContentStore((state) => state.textContent);
  const saveExtractedTerms = useExtractedTermsStore(
    (state) => state.saveExtractedTerms
  );
  useEffect(() => {
    if (textContent) {
      saveExtractedTerms(
        regexExtracts
          .map((regex) => matchTerms(regex, textContent))
          .flat()
          .filter((term) => !!term)
      );
    }
  }, [regexExtracts]);
};
