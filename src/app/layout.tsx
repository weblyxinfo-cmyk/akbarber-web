import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AK BARBERS – Provozovny",
    template: "%s | AK BARBERS",
  },
  description:
    "AK Barbers najdete ve více městech po celém Česku a Slovensku. Navštivte naši síť prémiových provozoven.",
  metadataBase: new URL("https://www.akbarber.com"),
  openGraph: {
    title: "AK BARBERS – Provozovny",
    description:
      "AK Barbers najdete ve více městech po celém Česku a Slovensku.",
    url: "https://www.akbarber.com",
    siteName: "AK BARBERS",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://www.akbarber.com/wp-content/uploads/2023/06/social-image-1.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
