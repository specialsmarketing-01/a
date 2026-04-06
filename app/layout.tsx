import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TEMPLATE_STYLESHEETS } from "@/lib/templateCss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Hari1090 Indisches Restaurant Wien | Fine Dining & Catering",
  description: "Hari1090 by Kumar's Kitchen – Restaurant Wien",
  authors: [{ name: "Thememarch" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040D10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/img/Fav-hari1090.png" />
        {TEMPLATE_STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>
        <div id="minicircle"></div>
        <Header />
        <div id="scrollsmoother-container">
          {children}
          <div className="ak-height-150 ak-height-lg-60"></div>
          <Footer />
        </div>
        <SiteChrome />
      </body>
    </html>
  );
}
