import styles from "./styles.module.css";

export const List = ({ children }: React.PropsWithChildren) => {
  return <ul className={styles.list}>{children}</ul>;
};
