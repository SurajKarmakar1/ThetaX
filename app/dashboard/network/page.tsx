"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function NetworkPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full font-sans antialiased ">
        <AppSidebar />
        <main className="flex flex-1 flex-col bg-background">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border border-dashed border-neutral-300 bg-background px-4 ml-6 mt-6 mr-6">
            <SidebarTrigger />
            <div className="flex-1 ">
              <h1 className="text-2xl font-semibold">Network Dashboard</h1>
            </div>
          </header>
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Network Status</h2>
                <p className="text-muted-foreground">All connections active</p>
              </div>
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Bandwidth Usage</h2>
                <p className="text-muted-foreground">Optimal performance</p>
              </div>
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Security</h2>
                <p className="text-muted-foreground">Protected</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
