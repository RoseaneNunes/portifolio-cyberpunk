import type { Metadata } from "next";
import { Quantico, Montserrat } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Portfólio Cyberpunk",
  description: "Portfólio pessoal com estética cyberpunk",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${quantico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
