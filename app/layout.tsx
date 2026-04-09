import type { Metadata, Viewport } from "next"; // Tambahkan Viewport untuk optimasi mobile
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimasi loading font
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// 1. OPTIMASI VIEWPORT (Warna bar browser di HP)
export const viewport: Viewport = {
  themeColor: "#020617", // Menyesuaikan warna Navy Dark di Hero section kamu
  width: "device-width",
  initialScale: 1,
};

// 2. PENYEMPURNAAN METADATA (SEO & Social Media Sharing)
export const metadata: Metadata = {
  title: {
    default: "Kopkar Adis - Sejahtera Bersama Anggota",
    template: "%s | Kopkar Adis", // Biar otomatis jadi "Berita | Kopkar Adis" di halaman lain
  },
  description:
    "Website resmi Koperasi Karyawan PT Adis Dimension Footwear. Layanan Simpan Pinjam, Ritel modern Adis Mart, dan Pelatihan Kemandirian Anggota.",
  keywords: ["Koperasi", "PT Adis", "Simpan Pinjam", "Adis Mart", "Balaraja"],
  authors: [{ name: "Kopkar Adis" }],

  // Biar cakep pas di-share di WA/Social Media
  openGraph: {
    title: "Kopkar Adis - Sejahtera Bersama Anggota",
    description:
      "Ekosistem digital transparan untuk kesejahteraan karyawan PT Adis Dimension Footwear.",
    url: "https://kopkaradis.co.id", // Ganti dengan domain asli nanti
    siteName: "Koperasi Karyawan PT Adis",
    locale: "id_ID",
    type: "website",
  },

  // Integrasi Icon
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`} // Tambahkan scroll-smooth
    >
      <body className="min-h-full flex flex-col bg-white selection:bg-blue-600 selection:text-white">
        {/* 1. NAVIGATION BAR */}
        <Navbar />

        {/* 2. MAIN CONTENT AREA */}
        <main className="flex-grow pt-20">
          {" "}
          {/* Tambahkan padding-top agar konten tidak tertutup Navbar fixed */}
          {children}
        </main>

        {/* 3. FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
