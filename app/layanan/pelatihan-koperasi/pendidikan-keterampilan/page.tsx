import Link from "next/link";
import {
  Wrench,
  Soup,
  CakeSlice,
  Sparkles,
  Lightbulb,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function PendidikanKeterampilanPage() {
  const skills = [
    {
      name: "Pembuatan Bakmi & Bakso",
      icon: <Soup className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Pembuatan Kue & Bakery",
      icon: <CakeSlice className="w-8 h-8" />,
      color: "from-indigo-500 to-violet-600",
    },
    {
      name: "Tata Rias & Kecantikan",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "Wirausaha Kreatif",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Executive Academy Style */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/pelatihan-koperasi"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Pelatihan
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <Wrench className="w-4 h-4" /> Vocational Excellence
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Keahlian{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Mandiri
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Membangun jiwa wirausaha dan kemandirian ekonomi anggota melalui
            pelatihan keterampilan praktis dan aplikatif.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: MISSION & PHILOSOPHY */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
                Lebih dari{" "}
                <span className="text-blue-600">Sekadar Anggota</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-blue-500 pl-8 mb-10">
                &quot;Kopkar ADIS memberikan pelatihan keterampilan agar anggota
                memiliki jiwa wirausaha dengan keahlian yang mumpuni,
                menciptakan peluang ekonomi baru di luar jam kerja.&quot;
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Kemandirian Ekonomi",
                    desc: "Menciptakan sumber pendapatan tambahan bagi keluarga.",
                  },
                  {
                    title: "Sertifikasi Internal",
                    desc: "Pengakuan kompetensi dari departemen pendidikan koperasi.",
                  },
                ].map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black uppercase text-slate-900">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Box (Premium Style) */}
            <div className="bg-slate-950 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/20">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-blue-400 font-black uppercase text-[10px] tracking-[0.3em] mb-1">
                    Empowerment Goal
                  </h4>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed font-semibold italic">
                    Wujud nyata kepedulian koperasi dalam membangun ketahanan
                    ekonomi keluarga besar PT Adis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SKILLS GRID (The 4 Pillars) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((item) => (
                <div
                  key={item.name}
                  className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                >
                  <div
                    className={`w-20 h-20 mx-auto rounded-[2rem] bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-widest leading-tight group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest flex items-center justify-center gap-2">
                      Learn Mastery <Briefcase className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
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
            Koperasi Karyawan PT Adis Dimension Footwear • Vocational Training
            Program
          </span>
        </div>
      </section>
    </div>
  );
}
