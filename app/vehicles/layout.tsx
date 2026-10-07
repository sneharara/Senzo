import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vehicles",
  description: "Explore Senzo's complete range of electric vehicles - Model A, Model S, Pro X, Cargo E, and Power. Find the perfect e-bike or e-scooter for your needs.",
  openGraph: {
    title: "Senzo Electric Vehicles - Complete Range",
    description: "Explore Senzo's complete range of electric vehicles - e-bikes and e-scooters.",
  },
};

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
