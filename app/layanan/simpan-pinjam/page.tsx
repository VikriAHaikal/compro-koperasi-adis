import Link from "next/link";
import {
  Banknote,
  Zap,
  Building2,
  Gem,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Info,
  Clock,
} from "lucide-react";

export default function SimpanPinjamHub() {
  const menus = [
    {
      title: "Dana Talangan",
      slug: "dana-talangan",
      desc: "Solusi likuiditas instan untuk kebutuhan mendesak atau urgensi anggota dengan proses kilat.",
      icon: <Zap className="w-8 h-8" />,
      tag: "Urgent Solution",
      color: "from-emerald-500 to-teal-600",
      stats: "Proses < 24 Jam",
    },
    {
      title: "Pinjaman Regular",
      slug: "pinjaman-regular",
      desc: "Pinjaman plafon menengah berdasarkan golongan dan masa kerja (3 - 12 Juta Rupiah).",
      icon: <Building2 className="w-8 h-8" />,
      tag: "Standard Loan",
      color: "from-blue-500 to-indigo-600",
      stats: "Tenor s/d 24 Bulan",
    },
    {
      title: "Pinjaman Multiguna",
      slug: "pinjaman-multi-guna",
      desc: "Plafon besar untuk kebutuhan strategis seperti pendidikan, renovasi rumah, atau kendaraan.",
      icon: <Gem className="w-8 h-8" />,
      tag: "Premium Facility",
      color: "from-indigo-600 to-violet-700",
      stats: "Plafon Maksimal",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HEADER SECTION (Executive Navy) */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <ShieldCheck className="w-4 h-4" /> Trusted Financial Partner
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Unit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Simpan Pinjam
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Layanan pinjaman yang transparan, fleksibel, dan didesain khusus
            untuk kesejahteraan anggota Kopkar ADIS.
          </p>
        </div>
      </section>

      {/* 2. GRID MENU SECTION */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menus.map((item, index) => (
            <Link
              href={`/layanan/simpan-pinjam/${item.slug}`}
              key={index}
              className="group"
            >
              <div className="bg-white h-full rounded-[3rem] p-10 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500 flex flex-col">
                {/* Icon & Tag */}
                <div className="flex justify-between items-start mb-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-3 py-1 rounded-full italic">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed font-medium italic mb-8 flex-grow">
                  &quot;{item.desc}&quot;
                </p>

                {/* Micro Stats */}
                <div className="flex items-center gap-3 py-4 border-t border-slate-50 mb-6">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {item.stats}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em]">
                  Pelajari Skema{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. INFO NOTE */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 relative overflow-hidden">
          <Banknote className="w-12 h-12 text-slate-200 mx-auto mb-6" />
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Prosedur Pengajuan
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed italic max-w-lg mx-auto">
            Seluruh proses pengajuan pinjaman dapat dipantau melalui aplikasi
            SISKOP atau datang langsung ke kantor sekretariat koperasi.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm border border-slate-100">
            <Info className="w-4 h-4 text-emerald-500" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              Pastikan Masa Kerja Mencukupi Syarat Minimum
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
