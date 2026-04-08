"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Info,
  ShoppingBag,
  Banknote,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // 1. Fix ESLint: Update state asinkron untuk performa & terminal bersih
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const initialTrigger = setTimeout(() => {
      setScrolled(window.scrollY > 20);
    }, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initialTrigger);
    };
  }, []);

  // 2. Prevent scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveAccordion(null);
  };

  return (
    // Kita pastikan NAV utama selalu di puncak (z-[100])
    <nav className="fixed top-0 w-full z-[100] font-sans">
      {/* BACKGROUND LAYER: Terpisah agar tidak mengganggu transparansi Drawer */}
      <div
        className={`absolute inset-0 transition-all duration-500 -z-10 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl py-8"
            : "bg-slate-950 py-10"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between relative h-20">
        {/* 1. LOGO & IDENTITAS */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          onClick={closeMenu}
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
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
            <span className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
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

          <li className="relative group text-left">
            <button className="flex items-center gap-1.5 text-slate-300 group-hover:text-blue-400 transition-colors uppercase">
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

          <li className="relative group text-left">
            <button className="flex items-center gap-1.5 text-slate-300 group-hover:text-blue-400 transition-colors uppercase">
              Layanan{" "}
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-[680px] bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl grid grid-cols-3 gap-8 backdrop-blur-xl">
                <div className="space-y-4 text-left">
                  <Link
                    href="/layanan/unit-ritel"
                    className="block font-black text-[9px] text-blue-500 uppercase border-b border-slate-800 pb-2 flex items-center gap-2"
                  >
                    <ShoppingBag className="w-3 h-3" /> Unit Ritel
                  </Link>
                  <div className="flex flex-col gap-3 text-[10px] font-bold text-slate-400">
                    <Link
                      href="/layanan/unit-ritel/adis-mart"
                      className="hover:text-white transition-colors"
                    >
                      Adis Mart
                    </Link>
                    <Link
                      href="/layanan/unit-ritel/bazar"
                      className="hover:text-white transition-colors"
                    >
                      Bazar Tahunan
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 border-x border-slate-800 px-6 text-left">
                  <Link
                    href="/layanan/simpan-pinjam"
                    className="block font-black text-[9px] text-emerald-400 uppercase border-b border-slate-800 pb-2 flex items-center gap-2"
                  >
                    <Banknote className="w-3 h-3" /> Simpan Pinjam
                  </Link>
                  <div className="flex flex-col gap-3 text-[10px] font-bold text-slate-400">
                    <Link
                      href="/layanan/simpan-pinjam/dana-talangan"
                      className="hover:text-white transition-colors"
                    >
                      Dana Talangan
                    </Link>
                    <Link
                      href="/layanan/simpan-pinjam/pinjaman-regular"
                      className="hover:text-white transition-colors"
                    >
                      Pinjaman Regular
                    </Link>
                    <Link
                      href="/layanan/simpan-pinjam/pinjaman-multi-guna"
                      className="hover:text-white transition-colors"
                    >
                      Pinjaman Multi-Guna
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <Link
                    href="/layanan/pelatihan-koperasi"
                    className="block font-black text-[9px] text-indigo-400 uppercase border-b border-slate-800 pb-2 flex items-center gap-2"
                  >
                    <GraduationCap className="w-3 h-3" /> Pelatihan
                  </Link>
                  <div className="flex flex-col gap-3 text-[10px] font-bold text-slate-400">
                    <Link
                      href="/layanan/pelatihan-koperasi/pendidikan-dasar-anggota"
                      className="hover:text-white transition-colors"
                    >
                      Dasar Anggota
                    </Link>
                    <Link
                      href="/layanan/pelatihan-koperasi/pendidikan-keterampilan"
                      className="hover:text-white transition-colors"
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
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg"
            >
              Kontak
            </Link>
          </li>
        </ul>

        {/* 3. MOBILE BUTTON (Z-Index tertinggi agar tidak tertimpa) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white relative z-[200] p-2 bg-slate-900 rounded-xl"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* 4. MOBILE DRAWER: Fixed Z-Index & Opacity */}
      <div
        className={`fixed inset-0 bg-slate-950 transition-all duration-500 ease-in-out lg:hidden z-[150] ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="p-8 pt-32 flex flex-col h-full overflow-y-auto bg-slate-950">
          <ul className="flex flex-col gap-8 text-left">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="text-4xl font-black text-white uppercase tracking-tighter"
              >
                Home
              </Link>
            </li>

            {/* Profile Accordion */}
            <li className="border-t border-slate-900 pt-6 text-left">
              <button
                onClick={() => toggleAccordion("profile")}
                className="w-full flex justify-between items-center text-3xl font-black text-white uppercase tracking-tighter"
              >
                Profile
                <ChevronRight
                  className={`w-8 h-8 transition-transform duration-300 ${activeAccordion === "profile" ? "rotate-90 text-blue-500" : "text-slate-800"}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${activeAccordion === "profile" ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="flex flex-col gap-5 pl-4 border-l-2 border-blue-600 text-slate-400 font-bold text-lg uppercase tracking-widest">
                  <Link href="/profile/visi-misi" onClick={closeMenu}>
                    Visi & Misi
                  </Link>
                  <Link href="/profile/sejarah" onClick={closeMenu}>
                    Sejarah
                  </Link>
                  <Link href="/profile/struktur-organisasi" onClick={closeMenu}>
                    Struktur Organisasi
                  </Link>
                  <Link href="/profile/legalitas" onClick={closeMenu}>
                    Legalitas
                  </Link>
                  <Link href="/profile/prestasi" onClick={closeMenu}>
                    Prestasi
                  </Link>
                </div>
              </div>
            </li>

            {/* Layanan Accordion (Lengkap) */}
            <li className="border-t border-slate-900 pt-6 text-left">
              <button
                onClick={() => toggleAccordion("layanan")}
                className="w-full flex justify-between items-center text-3xl font-black text-white uppercase tracking-tighter"
              >
                Layanan
                <ChevronRight
                  className={`w-8 h-8 transition-transform duration-300 ${activeAccordion === "layanan" ? "rotate-90 text-emerald-500" : "text-slate-800"}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${activeAccordion === "layanan" ? "max-h-[1200px] mt-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="flex flex-col gap-10 pl-4 border-l-2 border-emerald-500">
                  {/* Unit Ritel */}
                  <div className="space-y-4">
                    <Link
                      href="/layanan/unit-ritel"
                      onClick={closeMenu}
                      className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.3em]"
                    >
                      Unit Ritel
                    </Link>
                    <div className="flex flex-col gap-4 text-slate-300 font-bold text-lg uppercase tracking-widest">
                      <Link
                        href="/layanan/unit-ritel/adis-mart"
                        onClick={closeMenu}
                      >
                        Adis Mart
                      </Link>
                      <Link
                        href="/layanan/unit-ritel/bazar"
                        onClick={closeMenu}
                      >
                        Bazar Tahunan
                      </Link>
                    </div>
                  </div>
                  {/* Simpan Pinjam */}
                  <div className="space-y-4">
                    <Link
                      href="/layanan/simpan-pinjam"
                      onClick={closeMenu}
                      className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.3em]"
                    >
                      Simpan Pinjam
                    </Link>
                    <div className="flex flex-col gap-4 text-slate-300 font-bold text-lg uppercase tracking-widest">
                      <Link
                        href="/layanan/simpan-pinjam/dana-talangan"
                        onClick={closeMenu}
                      >
                        Dana Talangan
                      </Link>
                      <Link
                        href="/layanan/simpan-pinjam/pinjaman-regular"
                        onClick={closeMenu}
                      >
                        Pinjaman Regular
                      </Link>
                      <Link
                        href="/layanan/simpan-pinjam/pinjaman-multi-guna"
                        onClick={closeMenu}
                      >
                        Pinjaman Multi-Guna
                      </Link>
                    </div>
                  </div>
                  {/* Pelatihan */}
                  <div className="space-y-4">
                    <Link
                      href="/layanan/pelatihan-koperasi"
                      onClick={closeMenu}
                      className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.3em]"
                    >
                      Pelatihan
                    </Link>
                    <div className="flex flex-col gap-4 text-slate-300 font-bold text-lg uppercase tracking-widest">
                      <Link
                        href="/layanan/pelatihan-koperasi/pendidikan-dasar-anggota"
                        onClick={closeMenu}
                      >
                        Dasar Anggota
                      </Link>
                      <Link
                        href="/layanan/pelatihan-koperasi/pendidikan-keterampilan"
                        onClick={closeMenu}
                      >
                        Keterampilan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="border-t border-slate-900 pt-6">
              <Link
                href="/berita"
                onClick={closeMenu}
                className="text-4xl font-black text-white uppercase tracking-tighter block mb-8"
              >
                Berita
              </Link>
              <Link
                href="/kontak"
                onClick={closeMenu}
                className="text-4xl font-black text-blue-500 uppercase tracking-tighter block"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
