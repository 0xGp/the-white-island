import type { Metadata, Viewport } from "next";
import { Archivo_Black, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "The White Island — $ELYSIUM",
  description: "There is a shore the maps forgot. A community meme token on salt-white paper.",
};
export const viewport: Viewport = { themeColor: "#F2F1EC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
