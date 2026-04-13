import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--ff-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--ff-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubham Goyal — Organic Growth & PLG Leader",
  description:
    "Portfolio of Shubham Goyal — Organic Growth Lead building scalable growth systems across SEO, product, and AI. Currently at Truemeds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--ff-body), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
