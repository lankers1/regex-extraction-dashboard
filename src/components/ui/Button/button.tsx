import styles from "./styles.module.css";

interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  variant?: "success" | "error" | "default";
}

export const Button = ({
  handleClick,
  label,
  variant = "default",
}: ButtonProps) => {
  console.log(variant);
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
