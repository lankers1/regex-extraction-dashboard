"use client";
import { ReactNode, useState } from "react";
import styles from "./styles.module.css";

interface TabsProps {
  buttonLabels: string[];
  content: ReactNode[];
}

export const Tabs = ({ buttonLabels, content }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className={styles.tabContainer}>
      <div role="tablist" className={styles.tabs}>
        {buttonLabels.map((label, index) => (
          <button
            key={"tab" + label + index}
            onClick={() => setSelectedTab(index)}
            className={styles.tab}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel} role="tabpanel">
        {content[selectedTab]}
      </div>
    </div>
  );
};
