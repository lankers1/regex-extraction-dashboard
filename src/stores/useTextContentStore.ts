import { LoremIpsum } from "lorem-ipsum";
import { useEffect } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type TextContentStore = {
  textContent: string;
  approvedTextContent: string[];
  generateNewContent: () => void;
  approveTextContent: (approvedTextContent: string) => void;
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function generateTextContent() {
  return lorem.generateSentences(5);
}

export const useTextContentStore = (
  selector: (state: TextContentStore) => TextContentStore
) => {
  const textContentStore = create<TextContentStore>()(
    persist(
      (set, get) => ({
        textContent: "",
        approvedTextContent: [],
        generateNewContent: () => {
          set({ textContent: generateTextContent() });
        },
        approveTextContent: (approvedContent: string) => {
          set({ approvedTextContent: [...get().textContent, approvedContent] });
        },
      }),
      {
        storage: createJSONStorage(() => localStorage),
        name: "text-content-storage",
      }
    )
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage?.getItem("text-content-storage")) {
        textContentStore().generateNewContent();
      }
    }
  }, []);

  return textContentStore(selector);
};
