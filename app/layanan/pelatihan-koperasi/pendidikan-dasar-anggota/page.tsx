import Link from "next/link";
import {
  BookOpen,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Quote,
  Users,
  ExternalLink,
  Info,
} from "lucide-react";

export default function PendidikanDasarPage() {
  const prinsip = [
    "Keanggotaan bersifat sukarela dan terbuka",
    "Pengelolaan dilakukan secara demokratis",
    "Pembagian SHU dilakukan secara adil sebanding jasa usaha masing-masing anggota",
    "Pemberian balas jasa yang terbatas terhadap modal",
    "Kemandirian",
    "Pendidikan perkoperasian",
    "Kerjasama antar koperasi",
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Sync with "The Core" Design */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/pelatihan-koperasi"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Pelatihan
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <BookOpen className="w-4 h-4" /> Foundational Education
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Dasar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Koperasi
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Mengenal akar, landasan, dan tujuan strategis perjuangan ekonomi
            anggota Kopkar ADIS.
          </p>
        </div>
      </section>

      {/* 2. VISION & DIGITALIZATION SECTION */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visi Pengurus Card */}
          <div className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <Quote className="w-12 h-12 text-blue-100 mb-8" />
            <h2 className="relative z-10 text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
              Visi <span className="text-blue-600">Kesejahteraan</span>
            </h2>
            <p className="relative z-10 text-slate-500 text-lg md:text-xl leading-relaxed font-medium italic mb-10">
              &quot;Koperasi adalah milik anggota Kopkar Adis dan harus
              digunakan agar lebih bermanfaat dan mensejahterakan para anggota
              serta dapat memenuhi kebutuhan anggota.&quot;
            </p>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 font-black italic">
                P
              </div>
              <div>
                <h4 className="text-slate-900 font-black uppercase text-xs">
                  Bapak Pardiman
                </h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Wakil Ketua 2 Kopkar ADIS
                </p>
              </div>
            </div>
          </div>

          {/* SISKOP Online Card */}
          <div className="lg:col-span-5 bg-blue-600 p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl shadow-blue-600/20 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <Smartphone className="w-12 h-12 mb-8 text-blue-200 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6 leading-tight">
              Digitalisasi <br /> SISKOP Online
            </h3>
            <p className="text-blue-50 text-sm leading-relaxed font-medium mb-10 opacity-80">
              Monitoring simpanan pokok, wajib, dan sukarela secara transparan
              dan real-time langsung melalui smartphone anggota.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl w-fit">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest">
                Monitoring Transparan & Akurat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 7 PRINCIPLES SECTION */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <div className="text-center mb-20">
          <h2 className="text-slate-900 font-black text-4xl md:text-5xl uppercase tracking-tighter italic mb-4">
            7 Prinsip <span className="text-blue-600">Koperasi</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-100"></div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
              UU NO. 25 TAHUN 1992
            </p>
            <div className="h-px w-12 bg-slate-100"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prinsip.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 hover:bg-white rounded-3xl border border-transparent hover:border-blue-100 hover:shadow-2xl transition-all duration-500 flex flex-col gap-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                0{index + 1}
              </div>
              <p className="text-slate-700 font-bold text-sm leading-relaxed uppercase tracking-tight">
                {item}
              </p>
            </div>
          ))}

          {/* Source/Narasumber Card */}
          <div className="p-8 bg-slate-900 rounded-3xl flex flex-col justify-center items-center text-center group">
            <Users className="w-8 h-8 text-blue-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">
              Narasumber Lapenkop
            </p>
            <h4 className="text-white font-bold text-xs leading-relaxed">
              Bapak Taufiqurrohman
            </h4>
            <p className="text-blue-400 font-black text-[8px] uppercase tracking-widest mt-1">
              Provinsi Banten
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER IDENTITY */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="h-px bg-slate-100 w-full mb-16"></div>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Koperasi Karyawan PT Adis Dimension Footwear • Departemen Pendidikan
            & Pelatihan
          </span>
        </div>
      </section>
    </div>
  );
}
