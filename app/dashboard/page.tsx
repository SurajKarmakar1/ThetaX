"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full font-sans antialiased ">
        <AppSidebar />
        <main className="flex flex-1 flex-col bg-background">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border border-dashed border-neutral-300 bg-background px-4 ml-6 mt-6 mr-6">
            <SidebarTrigger />
            <div className="flex-1 ">
              <h1 className="text-2xl font-semibold">Main Dashboard</h1>
            </div>
          </header>
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Total Revenue</h2>
                <p className="text-2xl font-bold">$45,231.89</p>
                <p className="text-muted-foreground text-sm">
                  +20.1% from last month
                </p>
              </div>
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Subscriptions</h2>
                <p className="text-2xl font-bold">+2350</p>
                <p className="text-muted-foreground text-sm">
                  +180.1% from last month
                </p>
              </div>
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Active Users</h2>
                <p className="text-2xl font-bold">+12,234</p>
                <p className="text-muted-foreground text-sm">
                  +19% from last month
                </p>
              </div>
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-2">Network Status</h2>
                <p className="text-2xl font-bold">9.9%</p>
                <p className="text-muted-foreground text-sm">Uptime</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">New user registration</p>
                      <p className="text-sm text-muted-foreground">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Security scan completed</p>
                      <p className="text-sm text-muted-foreground">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Network update deployed</p>
                      <p className="text-sm text-muted-foreground">
                        3 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 border border-dashed border-neutral-300">
                <h2 className="text-lg font-medium mb-4">System Status</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Database</span>
                    <span className="text-green-500">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>API Server</span>
                    <span className="text-green-500">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cache Layer</span>
                    <span className="text-green-500">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Storage</span>
                    <span className="text-green-500">Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
