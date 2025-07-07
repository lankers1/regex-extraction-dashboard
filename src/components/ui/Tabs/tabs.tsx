"use client";
import { ReactNode, useState } from "react";

interface TabsProps {
  buttonLabels: string[];
  content: ReactNode[];
}

export const Tabs = ({ buttonLabels, content }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <div>
        {buttonLabels.map((label, index) => (
          <button
            key={"tab" + label + index}
            onClick={() => setSelectedTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      {content[selectedTab]}
    </div>
  );
};
