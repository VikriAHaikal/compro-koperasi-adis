import Link from "next/link";
import {
  Building2,
  Download,
  CheckCircle2,
  FileText,
  ArrowLeft,
  ShieldCheck,
  Calculator,
  AlertTriangle,
  Info,
  ChevronRight,
} from "lucide-react";

export default function PinjamanRegularPage() {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Executive Professional */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/simpan-pinjam"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to USP Hub
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <Building2 className="w-4 h-4" /> Standard Institutional Loan
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Pinjaman{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Regular
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Fasilitas kredit plafon menengah bagi anggota dengan skema angsuran
            tetap dan proses yang akuntabel.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: INFO & REQUIREMENTS */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">
                Deskripsi <span className="text-blue-600">Layanan</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-blue-500 pl-8 mb-10">
                &quot;Pinjaman ini dirancang untuk memenuhi kebutuhan finansial
                anggota yang disesuaikan dengan golongan jabatan dan masa kerja,
                dengan plafon mulai dari **3.000.000 hingga 12.000.000
                Rupiah**.&quot;
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black uppercase text-xs">
                      Tabel Plafon
                    </h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      Update April 2026
                    </p>
                  </div>
                </div>
                <button className="w-full md:w-auto px-8 py-3 bg-slate-950 hover:bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>

            <div className="space-y-6 px-4">
              <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-[0.4em]">
                Syarat Administrasi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Fotokopi KTP (Suami/Istri)",
                  "Fotokopi Kartu Koperasi",
                  "Masa Kerja Minimum 1 Tahun",
                  "Slip Gaji Terakhir",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SETTLEMENT CONDITIONS */}
          <div className="lg:col-span-4">
            <div className="bg-slate-950 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <Calculator className="w-10 h-10 text-blue-500 mb-8" />
                <h3 className="text-xl font-black uppercase tracking-tighter mb-8 leading-tight">
                  Ketentuan <br />{" "}
                  <span className="text-blue-500">Pelunasan Cash</span>
                </h3>

                <div className="space-y-10">
                  <div className="relative pl-6 border-l border-slate-800">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-600 rounded-full border-4 border-slate-950"></div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">
                      Sudah 1/2 Masa Angsuran
                    </h4>
                    <p className="text-sm font-bold text-slate-200 italic">
                      Sisa Pokok + Bunga 1 Bulan
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-slate-800">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-amber-500 rounded-full border-4 border-slate-950"></div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">
                      Belum 1/2 Masa Angsuran
                    </h4>
                    <p className="text-sm font-bold text-slate-200 italic mb-2">
                      Sisa Pokok + Bunga 1 Bulan
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
                      <AlertTriangle className="w-3 h-3 text-amber-500" />
                      <span className="text-[9px] font-black text-amber-500 uppercase">
                        + 3% Pinalti Sisa Pokok
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800">
                  <p className="text-[9px] text-slate-500 leading-relaxed font-medium uppercase tracking-widest">
                    *Pencairan dana dilakukan secara rutin setiap satu minggu
                    sekali (Hari Kamis).
                  </p>
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
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Koperasi Karyawan PT Adis Dimension Footwear • Unit Simpan Pinjam
          </span>
        </div>
      </section>
    </div>
  );
}
