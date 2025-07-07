import { Tabs } from "@/components/ui/Tabs";
import { EditSection } from "../EditSection";

export const DrawerContent = () => {
  return (
    <Tabs
      buttonLabels={["Approval Mode", "Edit Mode"]}
      content={[<div>hello</div>, <EditSection />]}
    />
  );
};
