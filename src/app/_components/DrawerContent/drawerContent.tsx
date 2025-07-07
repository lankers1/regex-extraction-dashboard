import { Tabs } from "@/components/ui/Tabs";
import { EditSection } from "../EditSection";
import { ApprovalSection } from "../ApprovalSection";

export const DrawerContent = () => {
  return (
    <Tabs
      buttonLabels={["Approval Mode", "Edit Mode"]}
      content={[<ApprovalSection />, <EditSection />]}
    />
  );
};
