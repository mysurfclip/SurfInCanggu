import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Surfing in Canggu – 12 Years Capturing Waves",
  description: "Professional surf photography and videography in Canggu, Bali. Daily surf clips, surf lessons, and travel photo & video services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJ9SSSS37D"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJ9SSSS37D', { send_page_view: true });
          `}
        </Script>
      </head>
      <body>
        {/* <ScrollReveal /> */}
        {children}
      </body>
    </html>
  );
}
