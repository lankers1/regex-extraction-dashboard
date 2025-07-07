import { LoremIpsum } from "lorem-ipsum";
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

export const useTextContentStore = create<TextContentStore>()(
  persist(
    (set, get) => ({
      textContent: "",
      approvedTextContent: [],
      generateNewContent: () => {
        const textContent = generateTextContent();
        set({ textContent });
      },
      approveTextContent: (approvedContent: string) => {
        set({
          approvedTextContent: [...get().approvedTextContent, approvedContent],
        });
      },
    }),
    {
      storage: createJSONStorage(() => localStorage),
      name: "text-content-storage",
    }
  )
);
