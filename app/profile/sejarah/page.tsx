import {
  PlayCircle,
  Award,
  Landmark,
  TrendingUp,
  History,
  ArrowRightCircle,
} from "lucide-react";

export default function SejarahPage() {
  const milestones = [
    {
      year: "1991",
      title: "Kopkar Berdiri",
      desc: "Awal mula perjalanan dedikasi untuk karyawan PT Adis.",
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      year: "1998",
      title: "Omset 1M",
      desc: "Pencapaian milestone keuangan pertama yang signifikan.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
    {
      year: "2012",
      title: "Gedung Utama",
      desc: "Peresmian gedung pertama sebagai pusat layanan anggota.",
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
    {
      year: "2018",
      title: "Penghargaan Nasional",
      desc: "Ekspansi fasilitas dan meraih Penghargaan Nasional ke-3.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-amber-500",
    },
    {
      year: "2020",
      title: "Omset 100M",
      desc: "Pertumbuhan aset luar biasa di tengah tantangan global.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-rose-500",
    },
    {
      year: "2022",
      title: "Golden Age",
      desc: "Tiga dekade lebih melayani dan menyejahterakan anggota.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      {/* 1. HERO SECTION (Sync with Visi Misi) */}
      <section className="relative bg-slate-950 pt-32 pb-48 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <History className="w-4 h-4" />
            Our Legacy & Journey
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Sejarah &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Milestone
            </span>
          </h1>
        </div>
      </section>

      {/* 2. VIDEO SECTION (Floating Glassmorphism) */}
      <section className="max-w-5xl mx-auto -mt-24 px-6 relative z-20">
        <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit px-5 py-2 rounded-full border border-white/20 shadow-xl mx-auto md:mx-0">
          <PlayCircle className="w-5 h-5 text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">
            Official Video Profile
          </span>
        </div>

        <div className="bg-slate-900 rounded-[3.5rem] p-3 md:p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-slate-800">
          <div className="relative w-full pb-[56.25%] h-0 rounded-[2.5rem] overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/W0KIOCt_VA0?si=ajjWCHKdffEF5_pW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. NARASI SECTION (Sync Grid Style) */}
      <section className="max-w-6xl mx-auto mt-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-slate-100 text-9xl font-black -z-10 opacity-50">
              “
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight mb-6">
              Membangun <span className="text-blue-600">Kepercayaan</span> Sejak
              1991
            </h2>
            <div className="h-2 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
            <p>
              Koperasi Konsumen Karyawan PT Adis Dimension Footwear didirikan
              atas semangat kekeluargaan untuk meningkatkan kesejahteraan
              karyawan.
            </p>
            <p>
              Tiga dekade berlalu, kami telah bertransformasi menjadi entitas
              ekonomi modern yang mengintegrasikan digitalisasi dengan unit
              bisnis ritel yang mandiri.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MILESTONE TIMELINE (Premium Style) */}
      <section className="max-w-6xl mx-auto mt-40 px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4">
            Timeline
          </h2>
          <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
            Jejak Langkah
          </h3>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot Icon */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-2xl ${item.color} text-white shadow-xl shadow-current/30 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:rotate-12 transition-all duration-500 z-10`}
              >
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-50 p-8 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-blue-600 text-3xl tracking-tighter italic">
                    {item.year}
                  </span>
                  <ArrowRightCircle className="w-5 h-5 text-slate-200 group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="font-black text-slate-900 uppercase text-lg mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
