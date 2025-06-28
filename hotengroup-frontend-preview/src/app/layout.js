import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Client-side header
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hoten Group | Real Estate + AI SaaS",
  description: "Buy, Sell, Remodel, Build, Inspect, and Power Homes with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header /> {/* ✅ Reusable header across all pages */}
        <main className="p-0">{children}</main>
        <footer className="text-center p-4 text-sm text-gray-500 border-t mt-10">
          © {new Date().getFullYear()} Hoten Group. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
