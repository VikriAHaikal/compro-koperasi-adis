import {
  FileCheck,
  ShieldCheck,
  Gavel,
  Scale,
  CheckCircle2,
  FileText,
} from "lucide-react";

// 1. Tipe Data untuk Legalitas
interface LegalDoc {
  name: string;
  info: string;
  icon: React.ReactNode;
  category: string;
}

export default function LegalitasPage() {
  const docs: LegalDoc[] = [
    {
      name: "Badan Hukum Koperasi",
      info: "No: 1234/BH/M.KUKM.2/2026",
      icon: <Gavel className="w-6 h-6" />,
      category: "Akta Pendirian",
    },
    {
      name: "NIB (Nomor Induk Berusaha)",
      info: "No: 9120001234567",
      icon: <FileCheck className="w-6 h-6" />,
      category: "Identitas Berusaha",
    },
    {
      name: "Sertifikat Koperasi Sehat",
      info: "Predikat: Sangat Sehat (A)",
      icon: <ShieldCheck className="w-6 h-6" />,
      category: "Kinerja Organisasi",
    },
    {
      name: "Izin Usaha Simpan Pinjam",
      info: "Berlaku Secara Nasional",
      icon: <Scale className="w-6 h-6" />,
      category: "Izin Operasional",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      {/* 1. HERO SECTION (Synchronized Theme) */}
      <section className="relative bg-slate-950 pt-32 pb-48 text-white text-center overflow-hidden">
        {/* Pattern & Glow */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600 rounded-full blur-[120px] opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <CheckCircle2 className="w-4 h-4" />
            Verified & Certified
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Trust &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Legality
            </span>
          </h1>
        </div>
      </section>

      {/* 2. CONTENT SECTION (Floating Cards) */}
      <section className="max-w-4xl mx-auto -mt-24 px-6 relative z-20">
        <div className="space-y-4 md:space-y-6">
          {docs.map((doc, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                {/* Icon Box */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                  {doc.icon}
                </div>

                {/* Text Info */}
                <div>
                  <h4 className="text-blue-600 font-black uppercase text-[9px] tracking-[0.2em] mb-1">
                    {doc.category}
                  </h4>
                  <h3 className="text-slate-900 font-black text-lg md:text-xl uppercase tracking-tighter leading-none mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-slate-500 font-mono text-xs md:text-sm tracking-tight">
                    {doc.info}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 self-start md:self-center">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. FOOTER INFO */}
        <div className="mt-20 p-10 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-slate-300">
              <FileText className="w-8 h-8" />
            </div>
          </div>
          <p className="max-w-lg mx-auto text-slate-500 text-xs md:text-sm font-medium leading-relaxed italic">
            &quot;Seluruh kegiatan operasional Kopkar ADIS dijalankan
            berdasarkan regulasi pemerintah yang berlaku, menjamin keamanan dan
            transparansi bagi seluruh anggota.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
