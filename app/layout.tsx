import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Kopkar Adis - Mensejahterakan Anggota & Membangun Kemandirian",
  description:
    "Website resmi Koperasi Karyawan PT Adis Dimension Footwear. Layanan Simpan Pinjam, Ritel, dan Pelatihan Anggota.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id" // Ubah ke Indonesia untuk SEO lokal yang lebih baik
      suppressHydrationWarning // Menghindari warning font di console browser
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white selection:bg-blue-100 selection:text-blue-900">
        {/* 1. NAVIGATION BAR */}
        <Navbar />

        {/* 2. MAIN CONTENT AREA */}
        {/* flex-grow di sini memastikan footer tetap di bawah meski konten pendek */}
        <main className="flex-grow">{children}</main>

        {/* 3. FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
