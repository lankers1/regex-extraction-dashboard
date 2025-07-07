import Image from "next/image";
import styles from "./styles.module.css";

interface IconButtonProps {
  handleClick: () => void;
  iconSrc: string;
  altTxt: string;
}

export const IconButton = ({
  handleClick,
  iconSrc,
  altTxt,
}: IconButtonProps) => {
  return (
    <button className={styles.iconButton} onClick={handleClick}>
      <Image src={iconSrc} alt={altTxt} width={20} height={20} />
    </button>
  );
};
