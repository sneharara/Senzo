import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Senzo Electric India",
  description:
    "Learn about Senzo Electric India Pvt. Ltd., an Indian electric two-wheeler manufacturing company established in 2021, focused on sustainable mobility and smart electric vehicles.",
  openGraph: {
    title: "About Senzo Electric India",
    description:
      "Discover Senzo Electric India Pvt. Ltd. and our mission to build sustainable electric mobility for India.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
