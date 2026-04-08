import Link from "next/link";
import { SVGProps } from "react";
import {
  ArrowRight,
  Users,
  ShoppingBag,
  Banknote,
  GraduationCap,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Newspaper,
  Calendar,
  Clock,
  ArrowUpRight,
  Trophy,
  Sparkles,
  Crown,
} from "lucide-react";

// --- 1. DATA PRESTASI (SINKRON 100% DENGAN PRESTASI PAGE) ---
const achievementData = [
  {
    year: "2013",
    title: "Koperasi Konsumen Berprestasi",
    level: "Nasional",
    desc: "Penghargaan tertinggi dari Menteri Negara Koperasi dan UKM RI.",
  },
  {
    year: "2008",
    title: "Koperasi Konsumen Berprestasi",
    level: "Nasional",
    desc: "Pengakuan konsistensi performa koperasi di tingkat nasional.",
  },
  {
    year: "2008",
    title: "Juara Umum Provinsi Banten",
    level: "Provinsi",
    desc: "Koperasi Berprestasi peringkat satu di wilayah Provinsi Banten.",
  },
  {
    year: "2001",
    title: "Koperasi Unggul Kabupaten",
    level: "Kabupaten",
    desc: "Milestone awal pengakuan kualitas manajemen di Kabupaten Tangerang.",
  },
];

// --- 2. DATA BERITA (SINKRON DENGAN NEWSROOM) ---
const newsData = [
  {
    id: 1,
    category: "PENGUMUMAN",
    title: "RAT 2026: Era Baru Digitalisasi Kopkar ADIS",
    date: "15 April 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "EVENT",
    title: "Bazar Ramadhan 2026: Sinergi Koperasi dan Anggota",
    date: "12 April 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "INTERNAL",
    title: "Peningkatan Plafon Dana Talangan Anggota Baru",
    date: "05 April 2026",
    readTime: "3 min read",
  },
];

// --- 3. KOMPONEN ICON (FIX ESLINT ANY) ---
function LayoutGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

export default function Home() {
  const partners = [
    "NIKE",
    "ADIDAS",
    "BANK MANDIRI",
    "BPJS",
    "PERTAMINA",
    "INDOFOOD",
    "TELKOMSEL",
    "PLN",
    "MAYBANK",
    "SAMSUNG",
  ];

  return (
    <div className="bg-white overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-[#020617] text-white overflow-hidden text-center px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl">
            <ShieldCheck className="w-4 h-4 text-blue-400" /> Trusted Since 1991
          </div>

          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
            Koperasi Karyawan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              PT Adis Dimension Footwear
            </span>
          </h1>

          <p className="mt-8 text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-widest opacity-80 px-4">
            Mensejahterakan Anggota Melalui Ekosistem Digital yang Transparan,
            Profesional, dan Mandiri.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/layanan" className="w-full sm:w-auto">
              <button className="w-full px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-full transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3">
                Explore Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/kontak" className="w-full sm:w-auto">
              <button className="w-full px-10 py-5 bg-transparent border-2 border-slate-800 hover:border-slate-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-full transition-all">
                Join Member
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-6">
        <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50">
          {[
            {
              val: "10K+",
              label: "Active Members",
              icon: <Users className="w-5 h-5" />,
            },
            {
              val: "3",
              label: "Business Units",
              icon: <LayoutGrid className="w-5 h-5" />,
            },
            {
              val: "35+",
              label: "Years Legacy",
              icon: <TrendingUp className="w-5 h-5" />,
            },
            {
              val: "A",
              label: "Health Rating",
              icon: <CheckCircle2 className="w-5 h-5" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 text-slate-300 group-hover:text-blue-600 transition-colors">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter mb-1">
                {stat.val}
              </p>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BUSINESS UNITS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4">
              Core Operations
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
              Unit Bisnis
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Unit Ritel",
                desc: "Adis Mart & Bazar Tahunan untuk kebutuhan konsumsi.",
                icon: <ShoppingBag />,
                link: "/layanan/unit-ritel",
              },
              {
                title: "Simpan Pinjam",
                desc: "Solusi finansial amanah untuk masa depan anggota.",
                icon: <Banknote />,
                link: "/layanan/simpan-pinjam",
              },
              {
                title: "Pelatihan",
                desc: "Edukasi perkoperasian dan pengembangan skill.",
                icon: <GraduationCap />,
                link: "/layanan/pelatihan-koperasi",
              },
            ].map((service, i) => (
              <Link
                href={service.link}
                key={i}
                className="group p-10 rounded-[3rem] bg-slate-50 border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic italic">
                  &quot;{service.desc}&quot;
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest">
                  View Detail <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERS MARQUEE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <p className="text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">
          Authorized Partners & Networks
        </p>
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.concat(partners).map((p, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-black tracking-tighter text-slate-800 uppercase mx-8"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS SECTION (SINKRON DENGAN NEWSROOM) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                <Newspaper className="w-4 h-4" /> Newsroom Updates
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
                Berita Terkini
              </h3>
            </div>
            <Link
              href="/berita"
              className="px-8 py-3 border-2 border-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
            >
              Buka Newsroom
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsData.map((news) => (
              <div key={news.id} className="group cursor-pointer">
                <div className="aspect-video bg-slate-950 rounded-[2.5rem] overflow-hidden mb-8 relative shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-slate-800">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                    {news.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-white group-hover:scale-125 transition-all" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {news.readTime}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase leading-tight group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENT SECTION (MENGGUNAKAN DESIGN GALLERY CARD - TANPA BINTANG) */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                Recognitions
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
                Prestasi Utama
              </h3>
            </div>
            <Link
              href="/profile/prestasi"
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-lg shadow-blue-200"
            >
              Lihat Seluruh Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementData.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500"
              >
                {/* Photo Placeholder Style (Sync with Prestasi Page) */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300 group-hover:bg-slate-50 transition-colors">
                    <Trophy className="w-12 h-12 mb-2 opacity-20" />
                    <span className="text-[8px] font-black uppercase tracking-widest opacity-40">
                      Documentation
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950 text-white rounded-lg text-[10px] font-black italic shadow-xl z-10">
                    {item.year}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border 
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
                  <h4 className="text-md font-black text-slate-900 uppercase leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-slate-400 text-[11px] font-medium leading-relaxed italic line-clamp-2">
                    &quot;{item.desc}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-32 bg-[#020617] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <Crown className="w-12 h-12 text-blue-400 mx-auto mb-8 opacity-40" />
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Commitment <span className="text-blue-500">to Quality</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-[0.2em] leading-relaxed mb-12">
            Setiap penghargaan adalah pengingat bagi kami untuk selalu
            memberikan yang terbaik bagi anggota.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] border-b-2 border-blue-500 pb-2 hover:text-blue-400 transition-colors"
          >
            Bergabung Bersama Kami <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `,
        }}
      />
    </div>
  );
}
