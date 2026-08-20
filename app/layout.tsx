import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIConciergeWidget from "@/components/AIConciergeWidget";

export const metadata: Metadata = {
  title: "Opulent Vault | The Discerning Guardian of Luxury",
  description:
    "The UK's most trusted curated luxury lifestyle platform. Access to the exceptional.",
  keywords: ["luxury lifestyle", "private members club", "concierge", "OPV"],
  openGraph: {
    title: "Opulent Vault",
    description: "The Discerning Guardian of Luxury",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Hanken+Grotesk:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md selection:bg-secondary selection:text-primary-container">
        <Header />
        <main>{children}</main>
        <Footer />
        <AIConciergeWidget />
      </body>
    </html>
  );
}
