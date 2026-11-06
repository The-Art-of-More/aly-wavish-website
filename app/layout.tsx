import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (not next/font/google): Cloudflare Pages' build sandbox has
// intermittently blocked the live fetch to fonts.googleapis.com that
// next/font/google needs at build time, failing the whole build. Vendoring
// the files removes that dependency entirely.
const playfair = localFont({
  src: [
    { path: "./fonts/playfair-variable-latin.woff2", weight: "500 600", style: "normal" },
    { path: "./fonts/playfair-italic-500-latin.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-playfair",
});

const inter = localFont({
  src: [{ path: "./fonts/inter-variable-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aly Wavish | Resilience, Applied",
  description:
    "Not the bounce-back kind of resilience. Aly Wavish teaches the re-solve Method — metacognitive endurance built from analysing systems under real pressure.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
