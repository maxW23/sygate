import type { Metadata } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "SYGATE — منصة الثقة للمغترب السوري",
  description: "منصة خدمات موثوقة للمغتربين Syrianos en el exterior - Airport pickup, SIM cards, trusted stay, and family support in Syria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-main text-ink font-arabic antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}