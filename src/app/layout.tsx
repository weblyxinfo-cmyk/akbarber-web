import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
