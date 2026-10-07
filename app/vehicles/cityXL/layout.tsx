import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senzo City XL",
  description: "Experience the Senzo City XL - premium electric vehicle with advanced technology, elegant design, and superior performance. The pinnacle of electric mobility.",
  openGraph: {
    title: "Senzo City XL - Premium Electric Vehicle",
    description: "Experience the Senzo City XL - premium electric vehicle with advanced technology and superior performance.",
  },
};

export default function CityXLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
