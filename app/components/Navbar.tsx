"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Info,
  Newspaper,
  ShoppingBag,
  Banknote,
  GraduationCap,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-sm py-3 shadow-2xl"
          : "bg-slate-950 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* 1. LOGO & IDENTITAS */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-0">
            <Image
              src="/kopkar_adis.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-sm md:text-base font-extrabold uppercase tracking-tighter text-white">
              Koperasi Karyawan
            </span>
            <span className="text-[9px] md:text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em]">
              PT Adis Dimension Footwear
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          <li>
            <Link
              href="/"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1.5 text-slate-300 group-hover:text-blue-400 transition-colors">
              Profile{" "}
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full pt-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ul className="w-56 bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                {[
                  "Visi Misi",
                  "Sejarah",
                  "Struktur Organisasi",
                  "Legalitas",
                  "Prestasi",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/profile/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-bold uppercase text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Info className="w-4 h-4 opacity-50" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* LAYANAN MEGA MENU (KATEGORI SEKARANG BISA DIKLIK) */}
          <li className="relative group">
            <button className="flex items-center gap-1.5 text-slate-300 group-hover:text-blue-400 transition-colors">
              Layanan{" "}
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-[680px] bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl grid grid-cols-3 gap-8 backdrop-blur-xl">
                {/* Unit Ritel (Clickable Header) */}
                <div className="space-y-4">
                  <Link href="/layanan/unit-ritel" className="block group/head">
                    <h4 className="text-blue-500 font-black text-[9px] tracking-widest uppercase border-b border-slate-800 pb-2 flex items-center gap-2 group-hover/head:text-white transition-colors">
                      <ShoppingBag className="w-3 h-3" /> Unit Ritel
                    </h4>
                  </Link>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/layanan/unit-ritel/adis-mart"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Adis Mart
                    </Link>
                    <Link
                      href="/layanan/unit-ritel/bazar"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Bazar Tahunan
                    </Link>
                  </div>
                </div>

                {/* Simpan Pinjam (Clickable Header) */}
                <div className="space-y-4 border-x border-slate-800 px-6">
                  <Link
                    href="/layanan/simpan-pinjam"
                    className="block group/head"
                  >
                    <h4 className="text-emerald-400 font-black text-[9px] tracking-widest uppercase border-b border-slate-800 pb-2 flex items-center gap-2 group-hover/head:text-white transition-colors">
                      <Banknote className="w-3 h-3" /> Simpan Pinjam
                    </h4>
                  </Link>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/layanan/simpan-pinjam/dana-talangan"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Dana Talangan
                    </Link>
                    <Link
                      href="/layanan/simpan-pinjam/pinjaman-regular"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Pinjaman Regular
                    </Link>
                    <Link
                      href="/layanan/simpan-pinjam/pinjaman-multi-guna"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Pinjaman Multi-Guna
                    </Link>
                  </div>
                </div>

                {/* Pelatihan (Clickable Header) */}
                <div className="space-y-4">
                  <Link
                    href="/layanan/pelatihan-koperasi"
                    className="block group/head"
                  >
                    <h4 className="text-indigo-400 font-black text-[9px] tracking-widest uppercase border-b border-slate-800 pb-2 flex items-center gap-2 group-hover/head:text-white transition-colors">
                      <GraduationCap className="w-3 h-3" /> Pelatihan
                    </h4>
                  </Link>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/layanan/pelatihan-koperasi/pendidikan-dasar-anggota"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Dasar Anggota
                    </Link>
                    <Link
                      href="/layanan/pelatihan-koperasi/pendidikan-keterampilan"
                      className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      Keterampilan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/berita"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Berita
            </Link>
          </li>
          <li>
            <Link
              href="/kontak"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg shadow-blue-600/20"
            >
              Kontak
            </Link>
          </li>
        </ul>

        {/* 3. MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* 4. MOBILE DRAWER (NO ITALIC & CLICKABLE HEADERS) */}
      <div
        className={`fixed inset-0 bg-slate-950 z-[99] transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-10 pt-32 flex flex-col gap-10 h-full overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black text-white uppercase tracking-tighter"
          >
            Home
          </Link>

          <div className="space-y-4">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">
              -- Profile
            </span>
            <div className="flex flex-col gap-4 pl-4 border-l border-slate-800 text-slate-300 font-bold text-lg">
              <Link href="/profile/visi-misi" onClick={() => setIsOpen(false)}>
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
              <Link href="/profile/legalitas" onClick={() => setIsOpen(false)}>
                Legalitas
              </Link>
              <Link href="/profile/prestasi" onClick={() => setIsOpen(false)}>
                Prestasi
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">
              -- Layanan Kami
            </span>

            <div className="flex flex-col gap-8 pl-4 border-l border-slate-800">
              {/* Unit Ritel (Clickable Head) */}
              <div className="space-y-3">
                <Link
                  href="/layanan/unit-ritel"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] text-slate-500 uppercase font-black tracking-widest hover:text-blue-400 block"
                >
                  Unit Ritel
                </Link>
                <div className="flex flex-col gap-3 text-slate-200 font-bold">
                  <Link
                    href="/layanan/unit-ritel/adis-mart"
                    onClick={() => setIsOpen(false)}
                  >
                    Adis Mart
                  </Link>
                  <Link
                    href="/layanan/unit-ritel/bazar"
                    onClick={() => setIsOpen(false)}
                  >
                    Bazar Tahunan
                  </Link>
                </div>
              </div>
              {/* Simpan Pinjam (Clickable Head) */}
              <div className="space-y-3">
                <Link
                  href="/layanan/simpan-pinjam"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] text-slate-500 uppercase font-black tracking-widest hover:text-blue-400 block"
                >
                  Simpan Pinjam
                </Link>
                <div className="flex flex-col gap-3 text-slate-200 font-bold">
                  <Link
                    href="/layanan/simpan-pinjam/dana-talangan"
                    onClick={() => setIsOpen(false)}
                  >
                    Dana Talangan
                  </Link>
                  <Link
                    href="/layanan/simpan-pinjam/pinjaman-regular"
                    onClick={() => setIsOpen(false)}
                  >
                    Pinjaman Regular
                  </Link>
                  <Link
                    href="/layanan/simpan-pinjam/pinjaman-multi-guna"
                    onClick={() => setIsOpen(false)}
                  >
                    Pinjaman Multi-Guna
                  </Link>
                </div>
              </div>
              {/* Pelatihan (Clickable Head) */}
              <div className="space-y-3">
                <Link
                  href="/layanan/pelatihan-koperasi"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] text-slate-500 uppercase font-black tracking-widest hover:text-blue-400 block"
                >
                  Pelatihan
                </Link>
                <div className="flex flex-col gap-3 text-slate-200 font-bold">
                  <Link
                    href="/layanan/pelatihan-koperasi/pendidikan-dasar-anggota"
                    onClick={() => setIsOpen(false)}
                  >
                    Dasar Anggota
                  </Link>
                  <Link
                    href="/layanan/pelatihan-koperasi/pendidikan-keterampilan"
                    onClick={() => setIsOpen(false)}
                  >
                    Keterampilan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-6 border-t border-slate-900">
            <Link
              href="/berita"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-white uppercase tracking-tighter"
            >
              Berita
            </Link>
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-blue-500 uppercase tracking-tighter"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
