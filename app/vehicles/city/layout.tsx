import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senzo City",
  description: "Explore the Senzo City - a perfect balance of performance, efficiency, and style. Ideal for city commuting with powerful motor and long-range battery.",
  openGraph: {
    title: "Senzo City - Perfect City Commuter",
    description: "Explore the Senzo City - perfect for city commuting with powerful motor and long-range battery.",
  },
};

export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
