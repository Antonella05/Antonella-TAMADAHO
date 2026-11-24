import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";
import "@fontsource/lora/latin-400-italic.css";
import "./globals.css";

const description =
  "Développeuse full-stack à Cotonou, Bénin. Je conçois des outils numériques pour la santé et la santé mentale, pensés pour les réalités du Bénin.";

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
    : undefined,
  title: "Antonella Tamadaho | Développeuse full-stack, tech de santé et de bien-être",
  description,
  openGraph: {
    title: "Antonella Tamadaho",
    description,
    type: "website",
    locale: "fr_BJ",
    siteName: "Antonella Tamadaho",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F100A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
