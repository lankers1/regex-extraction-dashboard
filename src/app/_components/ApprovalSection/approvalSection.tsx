"use client";
import { useState } from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { List } from "@/components/ui/List";
import { ListItem } from "@/components/ui/ListItem";
import { useRegexExtractsStore } from "@/stores/useRegexExtractsStore";
import { useTextContentStore } from "@/stores/useTextContentStore";
import styles from "./styles.module.css";

export const ApprovalSection = () => {
  const [selectedRegex, setSelectedRegex] = useState("");
  const { regexExtracts } = useRegexExtractsStore();
  const { textContent } = useTextContentStore((state) => state);
  const found = textContent.match(
    RegExp(selectedRegex.slice(1, selectedRegex.length - 1), "g")
  );

  return (
    <div className={styles.container}>
      <Dropdown
        onSelect={(item: string) => setSelectedRegex(item)}
        label="Extracts"
        name="extract"
        items={regexExtracts}
      />
      <div className={styles.listContainer}>
        <h4>Matches</h4>
        {selectedRegex && (
          <List>
            {found?.map((extract, index) => (
              <ListItem key={extract + index}>{extract}</ListItem>
            ))}
          </List>
        )}
      </div>
      <button>approve</button>
    </div>
  );
};
