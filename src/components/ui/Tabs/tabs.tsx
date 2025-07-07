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
    <div>
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
      <div role="tabpanel">{content[selectedTab]}</div>
    </div>
  );
};
