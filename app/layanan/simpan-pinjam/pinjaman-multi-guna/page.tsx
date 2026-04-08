import Link from "next/link";
import {
  Gem,
  Home,
  GraduationCap,
  Download,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  FileSearch,
} from "lucide-react";

export default function PinjamanMultigunaPage() {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: The Prestigious Peak */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/simpan-pinjam"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to USP Hub
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <Gem className="w-4 h-4" /> High-Limit Facility
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Pinjaman{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-300">
              Multiguna
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Fasilitas pembiayaan plafon tertinggi untuk mendukung rencana
            strategis dan masa depan keluarga Anda.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT: RANGE & DOWNLOAD (Visual Card) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] text-center flex flex-col items-center justify-center">
              <h3 className="text-violet-600 font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                Rentang Pinjaman
              </h3>
              <div className="flex flex-col items-center mb-10">
                <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                  6 - 35
                </span>
                <span className="text-lg font-black text-slate-400 uppercase tracking-widest mt-2">
                  Juta Rupiah
                </span>
              </div>
              <div className="w-full h-px bg-slate-50 mb-10"></div>
              <button className="w-full py-5 bg-slate-950 hover:bg-violet-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3">
                <Download className="w-5 h-5" /> Download Tabel Skema
              </button>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="w-5 h-5 text-slate-400" />
                <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest">
                  Persyaratan
                </h4>
              </div>
              {/* FIX: Menggunakan &quot; untuk tanda petik agar tidak error ESLint */}
              <p className="text-slate-500 text-xs leading-relaxed font-medium italic">
                &quot;Silakan ambil formulir pengajuan di kantor sekretariat
                dengan menunjukkan ID Card (Peneng) aktif Anda.&quot;
              </p>
            </div>
          </div>

          {/* RIGHT: PURPOSES & CATATAN (Premium Dark Style) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 h-full p-10 md:p-16 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full"></div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-12">
                  Solusi Kebutuhan{" "}
                  <span className="text-violet-500">Strategis</span>
                </h3>

                <div className="space-y-12">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                      <Home className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2">
                        Properti & Renovasi
                      </h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                        Dukungan dana untuk renovasi rumah atau biaya tambahan
                        uang muka hunian impian.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2">
                        Pendidikan Keluarga
                      </h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                        Solusi pembiayaan pendidikan berkelanjutan bagi
                        putra-putri anggota di semua jenjang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-4 text-slate-500 font-bold uppercase text-[9px] tracking-[0.4em]">
                  <CheckCircle2 className="w-4 h-4 text-violet-500" />{" "}
                  Authorized Member Facility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER BRANDING */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="h-px bg-slate-100 w-full mb-16"></div>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-violet-500" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Koperasi Karyawan PT Adis Dimension Footwear • High-Limit Security
            Audit
          </span>
        </div>
      </section>
    </div>
  );
}
