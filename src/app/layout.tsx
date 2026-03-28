import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fine Thai | Authentic Thai Cuisine in Brookfield, IL",
    template: "%s | Fine Thai",
  },
  description:
    "Experience authentic Thai cuisine at Fine Thai in Brookfield, IL. Fresh ingredients, traditional recipes, and convenient online ordering for pickup or delivery.",
  keywords: [
    "Thai food",
    "Thai restaurant",
    "Brookfield IL",
    "Thai cuisine",
    "Pad Thai",
    "Thai curry",
    "online ordering",
    "pickup",
    "delivery",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fine Thai",
    title: "Fine Thai | Authentic Thai Cuisine in Brookfield, IL",
    description:
      "Experience authentic Thai cuisine at Fine Thai in Brookfield, IL. Fresh ingredients, traditional recipes, and convenient online ordering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
