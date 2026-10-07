import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import FloatingButton from "./components/FloatingButton";
import { Libre_Baskerville, Inter, Playfair_Display } from "next/font/google";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Senzo Electric Vehicles | Premium E-Bikes & E-Scooters",
    template: "%s | Senzo Electric Vehicles",
  },
  description: "Discover Senzo's premium electric vehicles - high-performance e-bikes and e-scooters built for sustainability, reliability, and style. Explore our range of eco-friendly mobility solutions.",
  keywords: ["electric vehicles", "e-bikes", "e-scooters", "electric bikes", "sustainable transportation", "Senzo"],
  authors: [{ name: "Senzo Motocorp Pvt. Ltd." }],
  creator: "Senzo Motocorp Pvt. Ltd.",
  publisher: "Senzo Electric Vehicles",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senzo.com",
    siteName: "Senzo Motocorp Pvt. Ltd.",
    title: "Senzo Electric Vehicles | Premium E-Bikes & E-Scooters",
    description: "Discover Senzo's premium electric vehicles - high-performance e-bikes and e-scooters built for sustainability, reliability, and style.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Senzo Motocorp Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senzo Electric Vehicles | Premium E-Bikes & E-Scooters",
    description: "Discover Senzo's premium electric vehicles - high-performance e-bikes and e-scooters.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libre.variable} ${playfair.variable} font-sans flex flex-col min-h-screen m-0 p-0`}>
        <ScrollProgress />
        <Header />
        <main
          className="flex-grow"
          style={{ paddingTop: "var(--header-height)" }}
        >
          {children}
        </main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
