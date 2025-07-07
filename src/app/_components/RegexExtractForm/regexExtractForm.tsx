"use client";
import { useState } from "react";
import styles from "./styles.module.css";

interface RegexExtractFormProps {
  disabled?: boolean;
  handleSubmit: (text: RegExp) => void;
  label: string;
  submitButtonLabel: string;
  initialValue?: string;
}

export const RegexExtractForm = ({
  disabled,
  handleSubmit,
  label,
  initialValue = "",
  submitButtonLabel,
}: RegexExtractFormProps) => {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState(false);

  return (
    <form className={styles.form}>
      <label htmlFor="story">{label}</label>
      <textarea
        disabled={disabled}
        onChange={(event) => {
          setText(event.target.value);
        }}
        className={styles.textArea}
        value={text}
        id="story"
        name="story"
        rows={5}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          let regexExtract;
          try {
            regexExtract = new RegExp(text);
          } catch (e) {
            console.error("Invalid regex pattern:", e);
            setError(true);
          }
          if (regexExtract) {
            handleSubmit(regexExtract);
            setText("");
          }
        }}
      >
        {submitButtonLabel}
      </button>
      {error && (
        <p className={styles.errorText}>Error: Invalid regular expression</p>
      )}
    </form>
  );
};
