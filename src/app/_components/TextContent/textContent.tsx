"use client";
import { useTextContentStore } from "@/stores/useTextContentStore";

export const TextContent = () => {
  const { textContent } = useTextContentStore((state) => state);

  return (
    <div style={{ padding: "4rem 1rem", flex: 1 }}>
      <h1>Text Content Component</h1>
      <p>{textContent}</p>
    </div>
  );
};
