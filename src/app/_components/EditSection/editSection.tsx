"use client";
import { useState } from "react";
import Image from "next/image";
import { useRegexExtractsStore } from "@/stores/useRegexExtractsStore";
import { List } from "@/components/ui/List";
import { ListItem } from "@/components/ui/ListItem";
import styles from "./styles.module.css";
import { Modal } from "@/components/ui/Modal";
import { RegexExtractForm } from "../RegexExtractForm";
import { useUpdateExtractedTerms } from "@/hooks/useUpdateExtractedTerms";

export const EditSection = () => {
  const [editExtractIndex, setEditExtractIndex] = useState<number | null>(null);
  const { addExtract, deleteExtract, editExtract, regexExtracts } =
    useRegexExtractsStore();
  useUpdateExtractedTerms(regexExtracts);

  return (
    <>
      <div className={styles.container}>
        <RegexExtractForm
          label="Add a new regex extract"
          submitButtonLabel="Add regex extract"
          handleSubmit={(extract: RegExp) => {
            addExtract(extract);
          }}
          disabled={editExtractIndex !== null}
        />
        <div className={styles.listContainer}>
          <h4>Regex extracts</h4>
          <List>
            {regexExtracts.map((extract, index) => (
              <ListItem key={extract + index}>
                <div className={styles.listItemContent}>
                  <p className={styles.listItemText}>{extract}</p>
                  <div className={styles.listItemButtonContainer}>
                    <button
                      onClick={() => {
                        setEditExtractIndex(index);
                      }}
                    >
                      <Image
                        src="/edit.svg"
                        alt="Edit icon"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      onClick={() => {
                        deleteExtract(index);
                      }}
                    >
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
      <Modal
        isOpen={editExtractIndex !== null}
        onCancel={() => setEditExtractIndex(null)}
      >
        <RegexExtractForm
          initialValue={regexExtracts[editExtractIndex as number]?.slice(
            1,
            regexExtracts[editExtractIndex as number]?.length - 1
          )}
          label="Edit this regex extract"
          submitButtonLabel="Update regex extract"
          handleSubmit={(regexExtract) => {
            {
              if (editExtractIndex !== null) {
                editExtract(editExtractIndex, regexExtract);
                setEditExtractIndex(null);
              }
            }
          }}
        />
      </Modal>
    </>
  );
};
