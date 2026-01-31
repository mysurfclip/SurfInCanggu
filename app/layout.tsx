import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surfing in Canggu - 12 Years Capturing Waves",
  description: "Professional surf photography and videography in Canggu, Bali. Daily surf clips, surf lessons, and travel photo & video services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
