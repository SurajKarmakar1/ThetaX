import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Theta-X",
  description: "Theta-X Dashboard - Monitor and manage your network operations",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
