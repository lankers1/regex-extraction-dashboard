"use client";

import { useState } from "react";
import Image from "next/image";
import { useRegexExtractsStore } from "@/stores/useRegexExtractsStore";
import { List } from "@/components/ui/List";
import { ListItem } from "@/components/ui/ListItem";
import styles from "./styles.module.css";

export const EditSection = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const { addExtract, deleteExtract, regexExtracts } = useRegexExtractsStore();

  function addNewExtract(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let regexExtract;
    try {
      regexExtract = new RegExp(text);
    } catch (e) {
      console.error("Invalid regex pattern:", e);
      setError(true);
    }
    if (regexExtract) {
      addExtract(regexExtract);
      setText("");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="story">Add a new regex extract</label>
          <textarea
            onChange={(event) => {
              setText(event.target.value);
            }}
            className={styles.textArea}
            value={text}
            id="story"
            name="story"
            rows={5}
          />
          <button onClick={addNewExtract}>Add regex extract</button>
          {error && (
            <p className={styles.errorText}>
              Error: Invalid regular expression
            </p>
          )}
        </form>
        <div className={styles.listContainer}>
          <h4>Regex extracts</h4>
          <List>
            {regexExtracts.map((extract, index) => (
              <ListItem key={extract + index}>
                <div className={styles.listItemContent}>
                  <p className={styles.listItemText}>{extract}</p>
                  <div className={styles.listItemButtonContainer}>
                    <button>
                      <Image
                        src="/edit.svg"
                        alt="Edit icon"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button onClick={() => deleteExtract(index)}>
                      <Image
                        src="/bin.svg"
                        alt="Edit icon"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};
