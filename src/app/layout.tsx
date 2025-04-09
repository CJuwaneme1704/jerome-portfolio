import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css"; // 👈 Adjusted the import path to use absolute imports
import Navbar from "@/components/Navbar"; // 👈 Adjusted the import path to use absolute imports
import Footer from "@/components/Footer"; // 👈 Import the Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JeromeUwaneme.ca",
  description: "The interactive portfolio of Jerome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <div className="bg-gray-900 min-h-screen flex flex-col">
          <Navbar /> {/* 👈 Navbar appears on all pages */}
          <main className="flex-grow pt-20 px-4 max-w-6xl mx-auto">{children}</main>
          <Footer /> {/* 👈 Footer added to all pages */}
        </div>
      </body>
    </html>
  );
}
