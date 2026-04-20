import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Pet",
  description: "Meu Pet - Cuidados e serviços para seu animal de estimação",
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
