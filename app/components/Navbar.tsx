"use client"; // Wajib karena kita pakai State (useState)

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-[100]">
      <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        {/* 1. LOGO & IDENTITAS */}
        <Link
          href="/"
          className="flex items-center gap-4 hover:opacity-90 transition shrink-0"
        >
          <div className="relative w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-white rounded-full flex items-center justify-center p-1 shadow-md">
            <Image
              src="/kopkar_adis.png"
              alt="Logo"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-[10px] md:text-base font-extrabold uppercase tracking-wide">
              Koperasi Konsumen Karyawan
            </span>
            <span className="text-[8px] md:text-xs font-semibold text-blue-100 uppercase tracking-tighter md:tracking-normal">
              PT Adis Dimension Footwear
            </span>
          </div>
        </Link>

        {/* 2. HAMBURGER BUTTON (Hanya Muncul di Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 focus:outline-none hover:bg-blue-700 rounded-lg transition-colors"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span> // Icon Close
          ) : (
            <span className="text-2xl">☰</span> // Icon Menu
          )}
        </button>

        {/* 3. MENU DESKTOP (Sembunyi di Mobile) */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 text-[11px] xl:text-sm font-semibold items-center uppercase tracking-wider">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              HOME
            </Link>
          </li>

          {/* PROFILE DROPDOWN */}
          <li className="relative group py-2">
            <button className="hover:text-blue-200 transition flex items-center gap-1">
              PROFILE <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
              <ul className="bg-white text-gray-800 w-52 shadow-2xl rounded-xl border-t-4 border-blue-500 py-2">
                <li>
                  <Link
                    href="/profile/visi-misi"
                    className="block px-6 py-2.5 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Visi & Misi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/sejarah"
                    className="block px-6 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-50"
                  >
                    Sejarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/struktur-organisasi"
                    className="block px-6 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-50"
                  >
                    Struktur Organisasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/legalitas"
                    className="block px-6 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-50"
                  >
                    Legalitas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/prestasi"
                    className="block px-6 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-50"
                  >
                    Prestasi
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* LAYANAN DROPDOWN */}
          <li className="relative group py-2">
            <button className="hover:text-blue-200 transition flex items-center gap-1">
              LAYANAN <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
              <ul className="bg-white text-gray-800 w-80 shadow-2xl rounded-2xl border-t-4 border-blue-500 overflow-hidden">
                <li className="bg-gray-50 px-6 py-3 border-b">
                  <Link
                    href="/layanan/unit-ritel"
                    className="text-blue-600 font-black text-[10px] tracking-widest uppercase"
                  >
                    Unit Ritel
                  </Link>
                </li>
                <li className="bg-white pb-2">
                  <Link
                    href="/layanan/unit-ritel/adis-mart"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
                  >
                    🛒 Adis Mart
                  </Link>
                  <Link
                    href="/layanan/unit-ritel/bazar"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium"
                  >
                    🎁 Bazar Tahunan
                  </Link>
                </li>
                <li className="bg-gray-50 px-6 py-3 border-b border-t">
                  <Link
                    href="/layanan/simpan-pinjam"
                    className="text-blue-600 font-black text-[10px] tracking-widest uppercase"
                  >
                    Simpan Pinjam
                  </Link>
                </li>
                <li className="bg-white pb-2">
                  <Link
                    href="/layanan/simpan-pinjam/dana-talangan"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] font-medium"
                  >
                    💸 Dana Talangan
                  </Link>
                  <Link
                    href="/layanan/simpan-pinjam/pinjaman-regular"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] font-medium"
                  >
                    🏦 Pinjaman Regular
                  </Link>
                  <Link
                    href="/layanan/simpan-pinjam/pinjaman-multi-guna"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] font-medium"
                  >
                    💎 Pinjaman Multiguna
                  </Link>
                </li>
                <li className="bg-gray-50 px-6 py-3 border-b border-t">
                  <Link
                    href="/layanan/pelatihan-koperasi"
                    className="text-blue-600 font-black text-[10px] tracking-widest uppercase"
                  >
                    Pelatihan
                  </Link>
                </li>
                <li className="bg-white">
                  <Link
                    href="/layanan/pelatihan-koperasi/pendidikan-keterampilan"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] font-medium"
                  >
                    🛠️ Pendidikan Keterampilan
                  </Link>
                  <Link
                    href="/layanan/pelatihan-koperasi/pendidikan-dasar-anggota"
                    className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] font-medium"
                  >
                    📜 Pendidikan Dasar Anggota
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/berita" className="hover:text-blue-200 transition">
              BERITA
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="hover:text-blue-200 transition">
              KONTAK
            </Link>
          </li>
        </ul>
      </div>

      {/* 4. MOBILE MENU (Hanya Muncul saat isOpen = true) */}
      {isOpen && (
        <div className="lg:hidden bg-blue-700 border-t border-blue-500 overflow-y-auto max-h-[90vh]">
          <ul className="flex flex-col font-bold text-sm tracking-widest uppercase italic p-6 gap-6">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
            </li>

            {/* Mobile Profile Section */}
            <li className="space-y-4">
              <span className="text-blue-300 text-[10px] font-black italic">
                -- PROFILE
              </span>
              <div className="flex flex-col gap-3 pl-4 normal-case tracking-normal not-italic font-medium text-blue-50">
                <Link
                  href="/profile/visi-misi"
                  onClick={() => setIsOpen(false)}
                >
                  Visi & Misi
                </Link>
                <Link href="/profile/sejarah" onClick={() => setIsOpen(false)}>
                  Sejarah
                </Link>
                <Link
                  href="/profile/struktur-organisasi"
                  onClick={() => setIsOpen(false)}
                >
                  Struktur Organisasi
                </Link>
                <Link
                  href="/profile/legalitas"
                  onClick={() => setIsOpen(false)}
                >
                  Legalitas
                </Link>
                <Link href="/profile/prestasi" onClick={() => setIsOpen(false)}>
                  Prestasi
                </Link>
              </div>
            </li>

            {/* Mobile Layanan Section */}
            <li className="space-y-4">
              <span className="text-blue-300 text-[10px] font-black italic">
                -- LAYANAN
              </span>
              <div className="flex flex-col gap-3 pl-4 normal-case tracking-normal not-italic font-medium text-blue-50">
                <Link
                  href="/layanan/unit-ritel"
                  className="font-bold text-white"
                >
                  Unit Ritel
                </Link>
                <Link
                  href="/layanan/simpan-pinjam"
                  className="font-bold text-white"
                >
                  Simpan Pinjam
                </Link>
                <Link
                  href="/layanan/pelatihan-koperasi"
                  className="font-bold text-white"
                >
                  Pelatihan
                </Link>
              </div>
            </li>

            <li>
              <Link href="/berita" onClick={() => setIsOpen(false)}>
                BERITA
              </Link>
            </li>
            <li>
              <Link href="/kontak" onClick={() => setIsOpen(false)}>
                KONTAK
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
