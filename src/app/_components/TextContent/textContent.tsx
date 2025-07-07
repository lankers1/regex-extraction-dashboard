"use client";
import { useEffect } from "react";
import { useTextContentStore } from "@/stores/useTextContentStore";
import styles from "./styles.module.css";

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
    <div className={styles.container}>
      <p>{textContent}</p>
    </div>
  );
};
