import { Drawer } from "@/components/ui/Drawer";

import styles from "./page.module.css";
import { DrawerContent } from "./_components/DrawerContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <Drawer>
        <DrawerContent />
      </Drawer>
      hello world
    </main>
  );
}
