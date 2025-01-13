"use client";

import NavigationTabs from "./NavigationTabs";
import HeaderSection from "./HeaderSection";
import GridComponent from "./GridComponent";

export default function DataGrid() {
  return (
    <div className="bg-white border rounded-lg space-y-[12.85px]">
      <NavigationTabs />
      <div className="mx-[16px] border rounded-md">
        <HeaderSection />
        <GridComponent />
      </div>
    </div>
  );
}
