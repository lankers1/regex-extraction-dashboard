"use client";
import { useState } from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { List } from "@/components/ui/List";
import { ListItem } from "@/components/ui/ListItem";
import { useRegexExtractsStore } from "@/stores/useRegexExtractsStore";
import { useTextContentStore } from "@/stores/useTextContentStore";
import styles from "./styles.module.css";
import { matchTerms } from "@/utils/matchTerms";
import { useUpdateExtractedTerms } from "@/hooks/useUpdateExtractedTerms";
import { Button } from "@/components/ui/Button/button";

export const ApprovalSection = () => {
  const [selectedRegex, setSelectedRegex] = useState("");
  const { regexExtracts } = useRegexExtractsStore();
  const { textContent, generateNewContent, approveTextContent } =
    useTextContentStore((state) => state);
  const terms = matchTerms(selectedRegex, textContent);
  useUpdateExtractedTerms(regexExtracts);

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
            {terms?.map((extract, index) => (
              <ListItem key={extract + index}>{extract}</ListItem>
            ))}
          </List>
        )}
      </div>
      <Button
        handleClick={() => {
          approveTextContent(textContent);
          generateNewContent();
        }}
        label="Approve"
        variant="success"
      />
    </div>
  );
};
