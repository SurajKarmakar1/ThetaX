"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { GlobeToMapTransform } from "@/components/globe-to-map-transform";

export default function NetworkPage() {
  return (
    <div className="flex min-h-screen w-full font-sans antialiased ">
      <main className="flex flex-1 flex-col bg-background">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border border-dashed border-neutral-300  px-4 ml-6 mt-6 mr-6 bg-background/50 backdrop-blur-lg">
          <SidebarTrigger />
          <div className="flex-1 ">
            <h1 className="text-2xl font-semibold">Network Dashboard</h1>
          </div>
        </header>
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-card p-6 border border-dashed border-neutral-300">
              <h2 className="text-lg font-medium mb-2">Total Connections</h2>
              <p className="text-2xl font-bold">1,248</p>
              <p className="text-muted-foreground text-sm">
                +12.5% from last month
              </p>
            </div>
            <div className="bg-card p-6  border border-dashed border-neutral-300">
              <h2 className="text-lg font-medium mb-2">Bandwidth Usage</h2>
              <p className="text-2xl font-bold">68%</p>
              <p className="text-muted-foreground text-sm">
                12.4 TB of 18.2 TB
              </p>
            </div>
            <div className="bg-card p-6  border border-dashed border-neutral-300">
              <h2 className="text-lg font-medium mb-2">Active Nodes</h2>
              <p className="text-2xl font-bold">42</p>
              <p className="text-muted-foreground text-sm">
                3 down, 39 operational
              </p>
            </div>
            <div className="bg-card p-6  border border-dashed border-neutral-300">
              <h2 className="text-lg font-medium mb-2">Network Status</h2>
              <p className="text-2xl font-bold text-green-600">99.9%</p>
              <p className="text-muted-foreground text-sm">Uptime</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-card p-6  border border-dashed border-neutral-300">
              <h2 className="text-lg font-medium mb-4">Connection Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary w-2 h-2 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">New connection established</p>
                    <p className="text-sm text-muted-foreground">
                      2 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Data transfer completed</p>
                    <p className="text-sm text-muted-foreground">
                      15 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">High latency detected</p>
                    <p className="text-sm text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6  border border-dashed border-neutral-300">
              <h2 className="text-lg font-medium mb-4">Network Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Core Router</span>
                  <span className="text-green-500">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Load Balancer</span>
                  <span className="text-green-500">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Firewall</span>
                  <span className="text-green-500">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>VPN Gateway</span>
                  <span className="text-green-500">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DNS Server</span>
                  <span className="text-yellow-500">Degraded</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 border border-dashed border-neutral-300 mb-6">
            <h2 className="text-lg font-medium mb-4">
              Global Network Visualization
            </h2>
            <div className="h-96 flex items-center justify-center bg-muted  ">
              <GlobeToMapTransform />
            </div>
          </div>

          <div className="bg-card p-6  border border-dashed border-neutral-300">
            <h2 className="text-lg font-medium mb-4">Network Traffic</h2>
            <div className="h-64 flex items-center justify-center bg-muted border border-dashed border-neutral-300 ">
              <p className="text-muted-foreground">
                Network traffic visualization chart would go here
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
