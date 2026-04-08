import Link from "next/link";
import {
  GraduationCap,
  Wrench,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Users,
  ChevronRight,
} from "lucide-react";

export default function PelatihanHub() {
  const programs = [
    {
      title: "Pendidikan Keterampilan",
      slug: "pendidikan-keterampilan",
      desc: "Program workshop praktis mulai dari wirausaha kuliner, tata rias, hingga keahlian teknis untuk kemandirian ekonomi.",
      icon: <Wrench className="w-8 h-8" />,
      tag: "Skill Development",
      color: "from-indigo-600 to-blue-700",
      stats: "Sertifikasi Internal",
    },
    {
      title: "Pendidikan Dasar Anggota",
      slug: "pendidikan-dasar-anggota",
      desc: "Pendalaman prinsip perkoperasian, hak kewajiban anggota, serta literasi digital penggunaan sistem SISKOP.",
      icon: <BookOpen className="w-8 h-8" />,
      tag: "Foundational",
      color: "from-blue-600 to-cyan-700",
      stats: "Wajib Anggota Baru",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Executive Academy Style */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <GraduationCap className="w-4 h-4" /> Human Capital Development
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Pusat{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Pelatihan
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Membangun SDM anggota yang mandiri, terampil, dan memahami tata
            kelola ekonomi kerakyatan secara profesional.
          </p>
        </div>
      </section>

      {/* 2. PROGRAM GRID: Premium Cards */}
      <section className="max-w-6xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((prog, index) => (
            <Link
              href={`/layanan/pelatihan-koperasi/${prog.slug}`}
              key={index}
              className="group"
            >
              <div className="bg-white h-full rounded-[3.5rem] p-10 md:p-14 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500 flex flex-col">
                {/* Header Card */}
                <div className="flex justify-between items-start mb-12">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}
                  >
                    {prog.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-4 py-1.5 rounded-full">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6 group-hover:text-blue-600 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium italic mb-10 flex-grow">
                  &quot;{prog.desc}&quot;
                </p>

                {/* Footer Card */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {prog.stats}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">
                    Materi{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100/50 blur-3xl rounded-full"></div>
          <Lightbulb className="w-12 h-12 text-slate-200 mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic mb-6">
            Visi Pemberdayaan
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium italic max-w-xl mx-auto">
            Kami percaya bahwa kekuatan koperasi tidak hanya terletak pada modal
            finansial, tetapi pada kualitas intelektual dan keterampilan teknis
            setiap anggotanya.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="px-6 py-2 bg-white rounded-full shadow-sm border border-slate-100 inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Pendidikan Berkelanjutan Sejak 1991
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER IDENTITY */}
      <section className="mt-24 text-center px-6">
        <div className="h-px bg-slate-100 w-full mb-12"></div>
        <div className="flex items-center justify-center gap-2 text-slate-400">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em]">
            Koperasi Karyawan PT Adis Dimension Footwear • Departemen Pendidikan
          </span>
        </div>
      </section>
    </div>
  );
}
