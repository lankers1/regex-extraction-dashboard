import styles from "./styles.module.css";

export const ListItem = ({ children }: React.PropsWithChildren) => {
  return <li className={styles.listItem}>{children}</li>;
};
