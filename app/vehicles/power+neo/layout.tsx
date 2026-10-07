import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senzo Power + Neo",
  description: "Discover the Senzo Power + Neo - professional-grade electric vehicle built for reliability and high performance. Perfect for delivery services and commercial operations.",
  openGraph: {
    title: "Senzo Power + Neo - Professional Electric Vehicle",
    description: "Discover the Senzo Power + Neo - professional-grade electric vehicle built for reliability and high performance.",
  },
};

export default function PowerNeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
