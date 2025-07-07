import { Button } from "../Button/button";
import styles from "./styles.module.css";

interface Props {
  onCancel: () => void;
  isOpen: boolean;
}

export const Modal = ({
  children,
  onCancel,
  isOpen,
}: React.PropsWithChildren<Props>) => {
  return (
    isOpen && (
      <div className={styles.modalContainer}>
        <dialog className={styles.modal} open={true}>
          {children}
          <Button handleClick={onCancel} label="Close" />
        </dialog>
      </div>
    )
  );
};
