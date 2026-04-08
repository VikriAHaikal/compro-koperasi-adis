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
    // Data berita lainnya bisa di-loop di sini
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* HEADER: Sync with "The Core" Design */}
      <section className="relative bg-slate-950 pt-32 pb-48 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Newspaper className="w-4 h-4" /> Official Newsroom
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-4">
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

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* === LEFT: NEWS CONTENT === */}
        <main className="lg:col-span-8 space-y-16">
          {/* FEATURED / HOT NEWS */}
          <div className="group relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 aspect-video md:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <div className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse">
              <Zap className="w-3 h-3 fill-current" /> Hot News Today
            </div>
            <div className="absolute bottom-0 p-8 md:p-12 z-20">
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-6 group-hover:text-blue-400 transition-colors duration-500">
                Transformasi Digital Kopkar ADIS: <br />
                Menuju Ekosistem 4.0
              </h3>
              <Link
                href="/berita/1"
                className="inline-flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Read Featured Article <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Mock Image Area */}
            <div className="absolute inset-0 bg-slate-800 opacity-20 italic font-black text-6xl flex items-center justify-center -rotate-6">
              FEATURED
            </div>
          </div>

          {/* CATEGORY FILTER (Premium Ghost Pill) */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100">
            {[
              "All Post",
              "Announcement",
              "Simpan Pinjam",
              "Event",
              "Internal",
            ].map((cat) => (
              <button
                key={cat}
                className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-100 text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* LATEST NEWS LIST */}
          <div className="space-y-12">
            {allNews.map((news) => (
              <div
                key={news.id}
                className="group flex flex-col md:flex-row gap-8 items-center border-b border-slate-50 pb-12"
              >
                <div className="w-full md:w-72 aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-widest ${news.tagColor}`}
                    >
                      {news.category}
                    </span>
                    <span className="text-slate-400 text-[9px] font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {news.date}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 italic mb-6">
                    &quot;{news.excerpt}&quot;
                  </p>
                  <Link
                    href={`/berita/${news.id}`}
                    className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1 group/link"
                  >
                    Read Story{" "}
                    <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* === RIGHT: SIDEBAR === */}
        <aside className="lg:col-span-4 space-y-12">
          {/* SEARCH BOX */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari Berita..."
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* TRENDING SECTION (Premium Style) */}
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 relative overflow-hidden">
            <h3 className="font-black uppercase tracking-tighter text-xl mb-8 flex items-center gap-2 italic">
              Trending <TrendingUp className="w-5 h-5 text-blue-600" />
            </h3>
            <div className="space-y-8">
              {trendingNews.map((item, index) => (
                <div key={item.id} className="flex gap-4 group cursor-pointer">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-blue-500/20 transition-colors">
                    0{index + 1}
                  </span>
                  <div>
                    <h5 className="font-black text-sm text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-2 uppercase tracking-tighter">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-2 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> {item.views} Readers
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INFO BOX (Sync with Detail Page) */}
          <div className="bg-slate-950 p-10 rounded-[3.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            <h3 className="relative z-10 font-black uppercase tracking-tighter text-2xl mb-4 italic">
              Butuh <span className="text-blue-500">Bantuan?</span>
            </h3>
            <p className="relative z-10 text-slate-400 text-xs leading-relaxed mb-8 font-medium">
              Hubungi Sekretariat Koperasi jika ada pertanyaan seputar layanan
              kami.
            </p>
            <Link
              href="/kontak"
              className="relative z-10 block w-full text-center bg-blue-600 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
            >
              Kontak Kami
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
