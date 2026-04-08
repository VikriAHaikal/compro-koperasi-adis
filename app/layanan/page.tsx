import Link from "next/link";
import {
  ShoppingBag,
  Banknote,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ChevronRight,
  PhoneCall,
} from "lucide-react";

export default function LayananPage() {
  const mainServices = [
    {
      title: "Unit Ritel",
      slug: "unit-ritel",
      desc: "Penyediaan kebutuhan konsumsi berkualitas melalui Adis Mart dan program Bazar berkala dengan harga yang kompetitif bagi anggota.",
      icon: <ShoppingBag className="w-8 h-8" />,
      features: ["Adis Mart Modern", "Bazar 3x Setahun", "Sistem Potong Gaji"],
      color: "from-blue-600 to-indigo-700",
      lightColor: "bg-blue-50 text-blue-600",
    },
    {
      title: "Simpan Pinjam",
      slug: "simpan-pinjam",
      desc: "Solusi keuangan amanah dan transparan, mulai dari dana talangan instan hingga pinjaman plafon besar untuk masa depan.",
      icon: <Banknote className="w-8 h-8" />,
      features: [
        "Dana Talangan Cepat",
        "Pinjaman Reguler",
        "Pinjaman Multiguna",
      ],
      color: "from-emerald-600 to-teal-700",
      lightColor: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pelatihan Koperasi",
      slug: "pelatihan-koperasi",
      desc: "Program pengembangan SDM untuk membangun kemandirian ekonomi melalui pelatihan keterampilan praktis dan dasar organisasi.",
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        "Workshop Wirausaha",
        "Pendidikan Anggota",
        "Literasi Digital",
      ],
      color: "from-violet-600 to-purple-700",
      lightColor: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Deep Navy Executive */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <Layers className="w-4 h-4 text-blue-400" /> Integrated Ecosystem
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Layanan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Strategis
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Mensejahterakan Anggota Melalui Ekosistem Ekonomi yang Transparan,
            Profesional, dan Berbasis Teknologi Terintegrasi.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mainServices.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col"
            >
              {/* Icon Area */}
              <div
                className={`w-16 h-16 ${item.lightColor} rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>

              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium italic">
                &quot;{item.desc}&quot;
              </p>

              {/* Sub-features List */}
              <div className="space-y-4 mb-12 flex-grow">
                {item.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <Link href={`/layanan/${item.slug}`}>
                <button className="w-full py-5 bg-slate-950 hover:bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-3">
                  Eksplorasi Unit{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA: CONTACT SECTION */}
      <section className="max-w-5xl mx-auto mt-40 px-6">
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Butuh Konsultasi <span className="text-blue-500">Layanan?</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-12 font-medium uppercase tracking-widest leading-relaxed">
              Tim sekretariat kami siap memberikan informasi detail mengenai
              pendaftaran dan prosedur layanan anggota.
            </p>

            <Link href="/kontak">
              <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 mx-auto">
                <PhoneCall className="w-4 h-4" /> Hubungi Admin Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOOTER NOTE */}
      <section className="mt-24 text-center px-6">
        <div className="h-px bg-slate-100 w-full mb-12"></div>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-slate-400" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Seluruh Layanan Dikelola Secara Profesional oleh Koperasi Karyawan
            PT Adis Dimension Footwear
          </span>
        </div>
      </section>
    </div>
  );
}
