import { Tabs } from "@/components/ui/Tabs";

export const DrawerContent = () => {
  return (
    <Tabs
      buttonLabels={["Approval Mode", "Edit Mode"]}
      content={[<div>hello</div>, <div>world</div>]}
    />
  );
};
