import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Senzo Electric Vehicles. Contact us for inquiries, test rides, dealer information, or customer support. We're here to help you find the perfect electric vehicle.",
  openGraph: {
    title: "Contact Senzo Electric Vehicles",
    description: "Get in touch with Senzo Electric Vehicles for inquiries, test rides, or support.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
