import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senzo Power",
  description: "Discover the Senzo Power - a high-performance electric vehicle with 1200W motor, 70-80km range, and advanced features. Perfect for professionals and daily commuters.",
  openGraph: {
    title: "Senzo Power - High-Performance Electric Vehicle",
    description: "Discover the Senzo Power - a high-performance electric vehicle with 1200W motor and 70-80km range.",
  },
};

export default function PowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
