"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // 1. Jalankan interval untuk update setiap detik
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 2. Initial trigger asinkron (delay 0ms) agar ESLint tidak error
    const initialTrigger = setTimeout(() => {
      setTime(new Date());
    }, 0);

    return () => {
      clearInterval(timer);
      clearTimeout(initialTrigger);
    };
  }, []);

  const getStatusLayanan = () => {
    if (!time) return { label: "LOADING...", color: "bg-slate-500" };
    const day = time.getDay();
    const hours = time.getHours();

    // Senin (1) - Jumat (5), Jam 08:00 - 16:59
    const isWorkDay = day >= 1 && day <= 5;
    const isWorkHour = hours >= 8 && hours < 17;

    if (isWorkDay && isWorkHour)
      return { label: "OPEN", color: "bg-emerald-500" };
    return { label: "CLOSED", color: "bg-rose-500" };
  };

  const status = getStatusLayanan();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 rounded-t-[4rem] relative overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mt-32 font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 text-left">
          {/* 1. BRANDING & SOCIAL MEDIA */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <Image
                  src="/kopkar_adis.png"
                  alt="Logo"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-sm uppercase tracking-tighter leading-none text-white">
                  Kopkar ADIS
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1 italic leading-none">
                  Official Compro
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium italic pr-10">
              &quot;Membangun kemandirian ekonomi seluruh karyawan PT Adis
              Dimension Footwear melalui ekosistem digital yang transparan dan
              profesional sejak 1991.&quot;
            </p>

            {/* Social Media Link Resmi */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/kopkaradis_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@koperasiadis2278"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Globe className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div>
            <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-slate-900 pb-4">
              Pintasan Strategis
            </h4>
            <ul className="space-y-4">
              {[
                "Visi Misi",
                "Unit Bisnis Ritel",
                "Simpan Pinjam",
                "Pusat Berita",
                "Kontak Layanan",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group transition-all"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />{" "}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-10 border-b border-slate-900 pb-4">
              Kontak Utama
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400 text-xs leading-relaxed font-medium italic">
                  Jl. Raya Serang Km. 24, Balaraja, <br /> Tangerang, Banten
                  15610.
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-black tracking-tight leading-none">
                    (021) 595 1660
                  </p>
                  <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-2">
                    Layanan Cepat Anggota
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400 text-xs font-bold leading-none">
                  info@kopkaradis.co.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: Minimalist Clock & Signature */}
        <div className="mt-24 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 opacity-40">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em]">
                © 2026 KOPKAR ADIS
              </p>
            </div>

            {/* Real-time Status Badge */}
            <div className="flex items-center gap-3 px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full shadow-inner">
              <span className="text-[10px] font-black text-white tabular-nums tracking-widest">
                {time
                  ? time.toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "--:--"}
              </span>
              <div className="h-3 w-px bg-slate-800"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full animate-pulse ${status.color}`}
                ></div>
                <span
                  className={`text-[8px] font-black uppercase tracking-widest ${status.color.replace("bg-", "text-")}`}
                >
                  {status.label}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest leading-none">
              Architected by
            </span>
            <span className="px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 shadow-xl leading-none">
              Vikri A. Haikal, S.Kom
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
