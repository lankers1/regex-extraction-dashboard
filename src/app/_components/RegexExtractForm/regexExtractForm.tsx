"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@/components/ui/Button/button";

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

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
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
  }

  return (
    <form className={styles.form}>
      <label htmlFor="pattern-input">{label}</label>
      <div className={styles.inputWrapper}>
        <p>/</p>
        <input
          disabled={disabled}
          onChange={(event) => {
            setText(event.target.value);
          }}
          className={styles.textArea}
          value={text}
          id="pattern-input"
          name="pattern-input"
        />
        <p>/gi</p>
      </div>
      <Button handleClick={onSubmit} label={submitButtonLabel} />
      {error && (
        <p className={styles.errorText}>Error: Invalid regular expression</p>
      )}
    </form>
  );
};
