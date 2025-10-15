import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import VapiWidget from "./components/VapiWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halo Smart Glass - Innovation meets design",
  description: "Halo Smart Glass merges engineering with craft, creating intelligent surfaces that control privacy, display content, and elevate architecture. From penthouses to storefronts, transform windows into living experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {/* Page Content */}
        {children}

        {/* Vapi Widget Script */}
        <Script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          async
          type="text/javascript"
        />

        {/* Vapi Chatbot */}
        <VapiWidget />
      </body>
    </html>
  );
}
