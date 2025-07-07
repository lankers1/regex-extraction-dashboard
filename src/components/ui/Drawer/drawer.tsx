import styles from "./styles.module.css";

export const Drawer = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.drawer}>{children}</div>;
};
