import styles from "./styles.module.css";

interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  variant?: string;
}

export const Button = ({ handleClick, label, variant }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};
