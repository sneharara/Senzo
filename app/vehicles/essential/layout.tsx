import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senzo Essential",
  description: "Meet the Senzo Essential - designed for daily commuting. Small and compact, perfect for city living.",
  openGraph: {
    title: "Senzo Essential - Daily Commuting Electric Vehicle",
    description: "Meet the Senzo Essential - designed for daily commuting with small and compact design.",
  },
};

export default function EssentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
