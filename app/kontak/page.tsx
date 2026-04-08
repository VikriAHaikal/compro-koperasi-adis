"use client"; // Wajib untuk fitur Real-time Clock

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Headset,
  ShieldCheck,
  Circle,
} from "lucide-react";
import Link from "next/link";

export default function KontakPage() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // 1. Jalankan interval untuk update setiap detik
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 2. Initial trigger asinkron agar tidak kena warning cascading render
    const trigger = setTimeout(() => {
      setTime(new Date());
    }, 0);

    return () => {
      clearInterval(timer);
      clearTimeout(trigger);
    };
  }, []);

  // Logika Status Layanan (Senin-Jumat, 08:00 - 17:00)
  const getStatusLayanan = () => {
    if (!time) return { label: "Memuat...", color: "text-slate-500" };

    const day = time.getDay();
    const hours = time.getHours();

    const isWorkDay = day >= 1 && day <= 5;
    const isWorkHour = hours >= 8 && hours < 17;

    if (isWorkDay && isWorkHour) {
      return { label: "KANTOR BUKA", color: "text-emerald-400" };
    }
    return { label: "KANTOR TUTUP", color: "text-rose-500" };
  };

  const status = getStatusLayanan();

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO HEADER: Executive Navy Style */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <Headset className="w-4 h-4" /> Support Center
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6 text-white">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Kami
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Layanan Komunikasi Cepat, Transparan, dan Responsif untuk Seluruh
            Anggota Kopkar ADIS.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 2. LEFT COLUMN: CONTACT INFO & DYNAMIC HOURS */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50 group">
              <h3 className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-12 border-b border-slate-50 pb-4 text-left">
                Informasi Kantor
              </h3>

              <div className="space-y-12">
                <div className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-500 text-slate-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2">
                      Alamat Utama
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium italic">
                      Jl. Raya Serang No.Km 24, Balaraja, <br /> Tangerang,
                      Banten 15610.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-500 text-slate-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2">
                      Telepon & WA
                    </h4>
                    <p className="text-blue-600 font-black text-xl leading-tight">
                      (021) 595 1660
                    </p>
                    <p className="text-slate-400 text-[9px] font-bold mt-1 uppercase tracking-widest">
                      CS: 0812-3456-7890
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-500 text-slate-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2">
                      Email Support
                    </h4>
                    <p className="text-slate-500 text-sm font-bold tracking-tight">
                      info@kopkaradis.co.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* JAM LAYANAN CARD: Live & Dynamic Status */}
            <div className="bg-slate-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl transition-colors"></div>

              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Jam Layanan
              </h3>

              <div className="mb-10 text-left border-l-2 border-blue-600/30 pl-6">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">
                  Waktu Lokal
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white tracking-tighter tabular-nums leading-none">
                    {time
                      ? time.toLocaleTimeString("id-ID", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })
                      : "--:--:--"}
                  </span>
                  <span className="text-[10px] font-bold text-blue-400 uppercase">
                    WIB
                  </span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest opacity-60">
                  {time
                    ? time.toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })
                    : "Memuat..."}
                </p>
              </div>

              <div className="space-y-6">
                <div
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-inner`}
                >
                  <Circle
                    className={`w-2.5 h-2.5 fill-current animate-pulse ${status.color}`}
                  />
                  <span
                    className={`text-xs font-black uppercase tracking-[0.2em] ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4 text-left">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Senin - Jumat</span>
                    <span className="text-white italic">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Sabtu - Minggu</span>
                    <span className="text-rose-500 italic">TUTUP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: MESSAGE FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50 h-full relative overflow-hidden">
              <div className="mb-16 text-left">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
                  Kirim <span className="text-blue-600">Pesan</span>
                </h2>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.3em]">
                  Estimasi Respons 1x24 Jam Kerja
                </p>
              </div>

              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 block">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Vikri Haikal"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-sm font-bold outline-none transition-all duration-500 shadow-sm"
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 block">
                      NIK / No. Anggota
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan 6 Digit NIK"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-sm font-bold outline-none transition-all duration-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 block">
                    Subjek Layanan
                  </label>
                  <select className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-8 py-5 text-sm font-bold outline-none transition-all duration-500 cursor-pointer shadow-sm appearance-none">
                    <option>Unit Simpan Pinjam (USP)</option>
                    <option>Unit Ritel (Adis Mart / Bazar)</option>
                    <option>Pendidikan & Pelatihan</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Pesan Strategis
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Sampaikan kebutuhan atau pertanyaan Anda..."
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-[2.5rem] px-8 py-6 text-sm font-bold outline-none transition-all duration-500 resize-none shadow-sm"
                  ></textarea>
                </div>

                <button className="group w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-6 rounded-[2.5rem] uppercase tracking-[0.3em] text-[10px] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl">
                  Kirim Pesan Sekarang{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4. GOOGLE MAPS SECTION */}
        <div className="mt-32">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="font-black text-2xl uppercase tracking-tighter text-slate-900">
              Lokasi <span className="text-blue-600">Kami</span>
            </h3>
            <div className="h-px bg-slate-100 flex-grow"></div>
          </div>

          <div className="w-full h-[550px] rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.492530566073!2d106.45436559999999!3d-6.1985636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42016ffb687f43%3A0x23a2683f461f89c4!2sPT.%20Adis%20Dimension%20Footwear!5e0!3m2!1sid!2sid!4v1775668523549!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <a
                href="http://googleusercontent.com/maps.google.com/4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-600" /> Navigasi Google
                Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER BRANDING */}
      <section className="mt-32 text-center px-6">
        <div className="h-px bg-slate-100 w-full max-w-4xl mx-auto mb-16"></div>
        <div className="flex flex-col items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-blue-600 opacity-40" />
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.5em] leading-relaxed">
            Halaman Resmi Koperasi Karyawan PT Adis Dimension Footwear <br />©
            2026 Internal Compro System
          </p>
        </div>
      </section>
    </div>
  );
}
