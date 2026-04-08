import Link from "next/link";

export default function PelatihanHub() {
  const programs = [
    {
      title: "Pendidikan Keterampilan",
      desc: "Pelatihan pembuatan bakmi, kue, tata rias, dan keahlian wirausaha lainnya.",
      link: "/layanan/pelatihan-koperasi/pendidikan-keterampilan",
      icon: "🛠️",
      bg: "bg-orange-500",
    },
    {
      title: "Pendidikan Dasar Anggota",
      desc: "Mengenal prinsip dasar koperasi, landasan, dan monitoring tabungan via SISKOP.",
      link: "/layanan/pelatihan-koperasi/pendidikan-dasar-anggota",
      icon: "📜",
      bg: "bg-blue-800",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Pusat Pelatihan Anggota
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto px-6">
          Wujud kepedulian Kopkar ADIS dalam membangun SDM anggota yang mandiri,
          terampil, dan paham tata kelola ekonomi rakyat.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((prog) => (
            <Link
              href={prog.link}
              key={prog.title}
              className="group relative overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <div
                className={`${prog.bg} p-12 text-white h-full flex flex-col justify-end min-h-[400px] relative z-10`}
              >
                <span className="text-6xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">
                  {prog.icon}
                </span>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">
                  {prog.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  {prog.desc}
                </p>
                <div className="bg-white text-black w-fit px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                  Pelajari Materi
                </div>
              </div>
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
