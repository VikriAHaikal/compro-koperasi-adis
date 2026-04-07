import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Menggunakan alias @/ agar TypeScript lebih mudah menemukan filenya
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koperasi Adis - Company Profile",
  description: "Website resmi Koperasi Adis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* 1. BAGIAN ATAS (NAVBAR) */}
        <Navbar />

        {/* 2. BAGIAN TENGAH (ISI HALAMAN) */}
        <main className="flex-grow">{children}</main>

        {/* 3. BAGIAN BAWAH (FOOTER) */}
        <Footer />
      </body>
    </html>
  );
}
