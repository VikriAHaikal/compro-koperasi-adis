import Image from "next/image";
import { Award, Medal, Crown, Calendar, Sparkles, Trophy } from "lucide-react";

// 1. Tipe Data
interface Achievement {
  year: string;
  title: string;
  level: "Nasional" | "Provinsi" | "Kabupaten";
  desc: string;
  img?: string; // Nanti diisi link foto sertifikat/piala
}

const achievementData: Achievement[] = [
  {
    year: "2013",
    title: "Koperasi Konsumen Berprestasi",
    level: "Nasional",
    desc: "Penghargaan tertinggi dari Menteri Negara Koperasi dan UKM RI atas dedikasi pelayanan.",
  },
  {
    year: "2008",
    title: "Koperasi Konsumen Berprestasi",
    level: "Nasional",
    desc: "Pengakuan konsistensi performa koperasi di tingkat nasional selama 5 tahun berturut-turut.",
  },
  {
    year: "2008",
    title: "Juara Umum Provinsi Banten",
    level: "Provinsi",
    desc: "Ditetapkan sebagai Koperasi Berprestasi peringkat satu di wilayah Provinsi Banten.",
  },
  {
    year: "2001",
    title: "Koperasi Unggul Kabupaten",
    level: "Kabupaten",
    desc: "Milestone awal pengakuan kualitas manajemen koperasi di tingkat Kabupaten Tangerang.",
  },
];

export default function PrestasiPage() {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HEADER SECTION (Deep & Executive) */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white text-center overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/20 blur-[100px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
            <Award className="w-3 h-3 text-blue-400" />
            Certificates & Awards
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Prestasi <span className="text-slate-500">&</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Awards
            </span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-sm uppercase tracking-[0.3em] font-medium leading-relaxed opacity-70">
            Rekam jejak dedikasi dan kualitas layanan Kopkar ADIS sejak 1991.
          </p>
        </div>
      </section>

      {/* 2. ACHIEVEMENT GALLERY */}
      <section className="max-w-6xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {achievementData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                {/* Image Placeholder (Frame Foto Sertifikat) */}
                <div className="relative h-64 md:h-72 w-full bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300 group-hover:bg-slate-50 transition-colors">
                    <Trophy className="w-16 h-16 mb-4 opacity-20" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                      Documentation Photo
                    </span>
                  </div>
                  {/* Badge Year (Floating) */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-black italic shadow-2xl z-10">
                    {item.year}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border 
                      ${
                        item.level === "Nasional"
                          ? "bg-blue-50 text-blue-600 border-blue-100"
                          : item.level === "Provinsi"
                            ? "bg-indigo-50 text-indigo-600 border-indigo-100"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      {item.level}
                    </span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 italic">
                    &quot;{item.desc}&quot;
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {item.year} Archive
                      </span>
                    </div>
                    <Sparkles className="w-5 h-5 text-slate-100 group-hover:text-blue-200 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. FUTURE GOALS (Professional Footer) */}
        <div className="mt-32 text-center border-t border-slate-100 pt-20">
          <div className="max-w-2xl mx-auto">
            <Crown className="w-10 h-10 text-slate-200 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
              Commitment <span className="text-blue-600">to Quality</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
              Penghargaan bukanlah akhir, melainkan standar baru{" "}
              <br className="hidden md:block" /> yang harus kami pertahankan
              setiap hari.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
