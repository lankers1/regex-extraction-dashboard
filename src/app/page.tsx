import { Drawer } from "@/components/ui/Drawer";
import { Tabs } from "@/components/ui/Tabs";
import { TextContent } from "./_components/TextContent";
import { ApprovalSection } from "./_components/ApprovalSection";
import { EditSection } from "./_components/EditSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Drawer>
        <Tabs
          buttonLabels={["Approval Mode", "Edit Mode"]}
          content={[
            <ApprovalSection key="approvalSection" />,
            <EditSection key="editSection" />,
          ]}
        />
      </Drawer>
      <TextContent />
    </main>
  );
}
