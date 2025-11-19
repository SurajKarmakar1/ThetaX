"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";

export default function DashboardPage() {
  // We'll fetch the data from the JSON file
  const data = require("./data.json");

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border border-dashed border-neutral-300  px-4 ml-6 mt-6 mr-6 bg-background/50 backdrop-blur-lg">
        <SidebarTrigger />
        <div className="flex-1 ">
          <h1 className="text-2xl font-semibold">Main Dashboard</h1>
        </div>
      </header>
      <div className="p-6 ml-6 mr-6 mt-4">
        <DataTable data={data} />
      </div>
    </>
  );
}
