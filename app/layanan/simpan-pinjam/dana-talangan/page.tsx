import Link from "next/link";
import {
  Zap,
  CheckCircle2,
  FileText,
  CreditCard,
  ArrowLeft,
  Clock,
  ShieldCheck,
  AlertCircle,
  Banknote,
} from "lucide-react";

export default function DanaTalanganPage() {
  const plafon = ["100.000", "200.000", "300.000", "400.000", "500.000"];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Executive Navy & Emerald Glow */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/simpan-pinjam"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to USP Hub
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <Zap className="w-4 h-4 fill-current" /> Instant Liquidity
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Dana{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Talangan
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Solusi dana tunai instan untuk kebutuhan urgensi anggota dengan
            proses pencairan di hari yang sama.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: PROCEDURES & REQUIREMENTS */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8 text-emerald-500" /> Proses{" "}
                <span className="text-emerald-500">Kilat</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-emerald-500 pl-8 mb-12">
                &quot;Program ini dirancang khusus untuk membantu anggota dalam
                menghadapi kebutuhan mendesak yang jumlahnya tidak terlalu
                besar, tanpa prosedur administrasi yang rumit.&quot;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Formulir Kuning",
                    desc: "Ambil dan isi form kuning khusus di kantor sekretariat.",
                    icon: <FileText />,
                  },
                  {
                    title: "Identitas Resmi",
                    desc: "Sertakan ID Card (Peneng) atau Kartu Koperasi aktif.",
                    icon: <CreditCard />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 transition-all"
                  >
                    <div className="text-emerald-600 mb-4">{item.icon}</div>
                    <h4 className="text-slate-900 font-black uppercase text-xs mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Note */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.3em] mb-2">
                    Jaminan Keamanan
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                    Pengajuan diproses secara transparan dengan potongan
                    administrasi yang minimal, memastikan anggota tetap
                    mendapatkan nilai dana yang optimal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PLAFON SELECTION */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 shadow-inner">
              <div className="text-center mb-10">
                <Banknote className="w-10 h-10 text-emerald-500 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                  Pilihan Plafon
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Nominal Rupiah (IDR)
                </p>
              </div>

              <div className="space-y-3">
                {plafon.map((val) => (
                  <div
                    key={val}
                    className="bg-white p-5 rounded-2xl shadow-sm flex justify-between items-center border-2 border-transparent hover:border-emerald-500 transition-all group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-slate-400 font-black text-xs group-hover:text-emerald-600 transition-colors">
                        IDR
                      </span>
                    </div>
                    <span className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 group-hover:scale-105 transition-all">
                      {val}
                      <span className="text-slate-300 group-hover:text-emerald-200">
                        ,-
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-[10px] text-amber-800 leading-relaxed font-bold uppercase tracking-wider">
                  Batas maksimal plafon dapat berubah sesuai dengan kebijakan
                  terbaru pengurus koperasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER BRANDING */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="h-px bg-slate-100 w-full mb-16"></div>
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em]">
          Official Financial Service of Koperasi Karyawan PT Adis Dimension
          Footwear
        </p>
      </section>
    </div>
  );
}
