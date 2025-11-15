import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network | Theta-X",
  description:
    "Theta-X Network Dashboard - Monitor and manage your network operations",
};

export default function NetworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
