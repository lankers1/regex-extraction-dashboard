"use client";
import { useTextContentStore } from "@/stores/useTextContentStore";
import { useEffect } from "react";

export const TextContent = () => {
  const { textContent, generateNewContent } = useTextContentStore(
    (state) => state
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage?.getItem("text-content-storage")) {
        generateNewContent();
      }
    }
  }, []);

  return (
    <div style={{ padding: "4rem 1rem", flex: 1 }}>
      <h1>Text Content Component</h1>
      <p>{textContent}</p>
    </div>
  );
};
