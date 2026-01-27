import type { Metadata } from "next";

// CSS
import "./globals.css";

// Imports
import clsx from "clsx";
import Navbar from "@/components/navbar/navbar";
import { fraunces, onest } from "@/components/global/data";
import SmoothScroll from "@/components/smooth-scroll/smooth-scroll";

// Metadata
export const metadata: Metadata = {
  title: "HoneyCoin: A world without borders.",
  description:
    "HC for Businesses: A turnkey solution for treasury, payments, lending, cards, virtual bank accounts, digital wallets, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "font-onest antialiased",
          onest.variable,
          fraunces.variable,
        )}
      >
        <SmoothScroll />
        <Navbar className="z-2" />
        <main id="root" className="relative z-1">
          {children}
        </main>
      </body>
    </html>
  );
}
