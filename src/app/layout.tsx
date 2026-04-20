import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
// Centraliza a origem e o basePath para manter URLs de SEO consistentes entre ambientes.
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://ricardo-dev-00.github.io";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/petdev";
const siteUrl = `${siteOrigin}${siteBasePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Meu Pet",
  description: "Meu Pet - Cuidados e serviços para seu animal de estimação",
  alternates: {
    // Gera a canonical final a partir de metadataBase + caminho.
    canonical: siteBasePath || "/",
  },
  authors: [{ name: "Meu Pet", url: siteUrl }],
  keywords: [
    "meu pet",
    "cuidados para animais de estimação",
    "serviços para pets",
    "veterinário",
    "banho e tosa",
    "adestramento de cães",
    "alimentação para pets",
    "brinquedos para animais de estimação",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // Define o card de compartilhamento para WhatsApp, LinkedIn e Facebook.
  openGraph: {
    title: "Meu Pet",
    description: "Meu Pet - Cuidados e serviços para seu animal de estimação",
    type: "website",
    locale: "pt_BR",
    url: siteBasePath || "/",
    siteName: "Meu Pet",
    images: [
      {
        url: `${siteBasePath}/petdev.png`,
        width: 1200,
        height: 630,
        alt: "Meu Pet - Cuidados e serviços para seu animal de estimação",
      },
    ],
  },
  // Define o card de compartilhamento para o X (Twitter).
  twitter: {
    card: "summary_large_image",
    title: "Meu Pet",
    description: "Meu Pet - Cuidados e serviços para seu animal de estimação",
    images: [`${siteBasePath}/petdev.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <AosInit />
      </body>
    </html>
  );
}
