import Link from "next/link";
import {
  Zap,
  TrendingUp,
  ChevronRight,
  Calendar,
  Clock,
  Newspaper,
  Search,
  ArrowUpRight,
} from "lucide-react";

export default function BeritaPage() {
  const trendingNews = [
    {
      id: 1,
      title: "Prosedur Klaim JHT Kopkar Adis Terbaru 2026",
      views: "1.2k",
    },
    {
      id: 2,
      title: "Laporan RAT 2025: Kenaikan Sisa Hasil Usaha",
      views: "940",
    },
    {
      id: 3,
      title: "Ekspansi Unit Ritel: Pembukaan Adis Mart Cabang Ke-4",
      views: "850",
    },
  ];

  const allNews = [
    {
      id: 1,
      title:
        "Rapat Anggota Tahunan (RAT) 2026: Fokus Digitalisasi & Transparansi",
      excerpt:
        "Sesuai dengan AD/ART Koperasi, pengurus mengundang seluruh anggota untuk berpartisipasi dalam pengambilan keputusan strategis...",
      date: "15 April 2026",
      category: "PENGUMUMAN",
      tagColor: "text-red-500 bg-red-500/10",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Pelatihan Wirausaha: Membuat Produk Bernilai Tambah",
      excerpt:
        "Koperasi menyelenggarakan workshop intensif bagi anggota yang ingin memulai bisnis sampingan yang menguntungkan...",
      date: "12 April 2026",
      category: "EVENT",
      tagColor: "text-blue-500 bg-blue-500/10",
      readTime: "3 min",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HEADER SECTION */}
      <section className="relative bg-slate-950 pt-32 pb-48 text-white overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl mx-auto md:mx-0">
            <Newspaper className="w-4 h-4" /> Official Newsroom
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Adis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 text-shadow-glow">
              Insight
            </span>
          </h1>
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-60">
            Pusat Informasi & Update Strategis Kopkar ADIS
          </p>
        </div>
      </section>

      {/* 2. MAIN GRID SYSTEM */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* === LEFT COLUMN: CONTENT === */}
        <main className="lg:col-span-8 space-y-20">
          {/* HOT NEWS FEATURED CARD - Fixed Overlap Issues */}
          <div className="group relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800 h-[500px] md:h-auto md:aspect-[21/9]">
            {/* Darker Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-slate-950/20 z-0"></div>

            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
              <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl animate-pulse">
                <Zap className="w-3 h-3 fill-current" /> Hot News Today
              </div>
            </div>

            <div className="absolute bottom-0 p-8 md:p-12 z-20 w-full">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 group-hover:text-blue-400 transition-colors duration-500">
                Transformasi Digital Kopkar ADIS:{" "}
                <br className="hidden md:block" />
                Menuju Ekosistem 4.0
              </h3>

              <Link
                href="/berita/1"
                className="inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 hover:bg-blue-600 hover:border-blue-500"
              >
                Read Featured Article <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Placeholder Background Branding */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10 select-none">
              <span className="text-[15vw] font-black text-slate-400 italic -rotate-12">
                FEATURED
              </span>
            </div>
          </div>

          {/* PREMIUM CATEGORY FILTER */}
          <div className="flex items-center gap-4 overflow-x-auto pb-6 no-scrollbar border-b border-slate-100">
            {[
              "All Post",
              "Announcement",
              "Simpan Pinjam",
              "Event",
              "Internal",
            ].map((cat) => (
              <button
                key={cat}
                className="whitespace-nowrap px-8 py-3 rounded-2xl border border-slate-100 text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* LATEST NEWS FEED */}
          <div className="space-y-16">
            {allNews.map((news) => (
              <div
                key={news.id}
                className="group flex flex-col md:flex-row gap-10 items-start border-b border-slate-50 pb-16"
              >
                <div className="w-full md:w-80 aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden relative shrink-0 border border-slate-100 group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all"></div>
                  <div className="h-full w-full flex items-center justify-center text-slate-200 font-black italic text-xl">
                    NEWS_IMG
                  </div>
                </div>

                <div className="flex-grow pt-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`text-[9px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest ${news.tagColor}`}
                    >
                      {news.category}
                    </span>
                    <span className="text-slate-400 text-[9px] font-bold flex items-center gap-2 uppercase tracking-tighter">
                      <Calendar className="w-3 h-3 text-blue-500" /> {news.date}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 leading-tight mb-5 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h4>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                    &quot;{news.excerpt}&quot;
                  </p>

                  <Link
                    href={`/berita/${news.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] group/link"
                  >
                    Explore Story{" "}
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* === RIGHT COLUMN: SIDEBAR === */}
        <aside className="lg:col-span-4 space-y-16">
          {/* SEARCH COMPONENT */}
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              placeholder="Search Intelligence..."
              className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-3xl py-5 pl-14 pr-6 text-[11px] font-bold uppercase tracking-widest outline-none transition-all shadow-sm"
            />
          </div>

          {/* TRENDING WIDGET */}
          <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100 relative overflow-hidden">
            <h3 className="font-black uppercase tracking-tighter text-xl mb-12 flex items-center gap-3 italic text-slate-900">
              Trending <TrendingUp className="w-6 h-6 text-blue-600" />
            </h3>

            <div className="space-y-10">
              {trendingNews.map((item, index) => (
                <div key={item.id} className="flex gap-6 group cursor-pointer">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-600/10 transition-colors leading-none">
                    0{index + 1}
                  </span>
                  <div className="pt-1">
                    <h5 className="font-black text-xs text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-3 uppercase tracking-tighter">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-2 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> {item.views} readers
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION WIDGET */}
          <div className="bg-slate-950 p-12 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            <h3 className="relative z-10 font-black uppercase tracking-tighter text-3xl mb-4 italic leading-none">
              Butuh <br />{" "}
              <span className="text-blue-500 text-4xl">Bantuan?</span>
            </h3>
            <p className="relative z-10 text-slate-400 text-xs leading-relaxed mb-10 font-medium uppercase tracking-widest opacity-80">
              Sekretariat Koperasi siap memberikan dukungan strategis untuk
              Anda.
            </p>
            <Link
              href="/kontak"
              className="relative z-10 block w-full text-center bg-blue-600 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/40"
            >
              Contact Support
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
