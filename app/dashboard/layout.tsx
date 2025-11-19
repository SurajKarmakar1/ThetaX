import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Theta-X",
  description: "Theta-X Dashboard - Monitor and manage your network operations",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full font-sans antialiased">
        <AppSidebar />
        <main className="flex flex-1 flex-col bg-background">{children}</main>
      </div>
    </SidebarProvider>
  );
}
