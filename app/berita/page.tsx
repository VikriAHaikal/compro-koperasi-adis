"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  Newspaper,
  Search,
  ArrowUpRight,
  Inbox,
} from "lucide-react";

export default function BeritaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Post");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // --- 1. HANDLER UNTUK SEARCH & CATEGORY (SOLUSI ESLINT) ---
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset page langsung saat mengetik
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset page langsung saat klik kategori
  };

  const allNews = [
    {
      id: 1,
      slug: "transformasi-digital-kopkar-adis-menuju-ekosistem-4-0",
      title:
        "Rapat Anggota Tahunan (RAT) 2026: Fokus Digitalisasi & Transparansi",
      excerpt:
        "Sesuai dengan AD/ART Koperasi, pengurus mengundang seluruh anggota...",
      date: "15 April 2026",
      category: "Pengumuman",
      tagColor: "text-red-500 bg-red-500/10",
    },
    {
      id: 2,
      slug: "pelatihan-wirausaha-produk-bernilai-tambah",
      title: "Pelatihan Wirausaha: Membuat Produk Bernilai Tambah",
      excerpt:
        "Koperasi menyelenggarakan workshop intensif bagi anggota yang ingin memulai bisnis...",
      date: "12 April 2026",
      category: "Info Internal",
      tagColor: "text-blue-500 bg-blue-500/10",
    },
    {
      id: 3,
      slug: "laporan-rat-2025-kenaikan-shu",
      title: "Laporan RAT 2025: Kenaikan Sisa Hasil Usaha",
      excerpt:
        "Performa positif unit ritel mendorong kenaikan SHU tahun buku 2025...",
      date: "10 Maret 2026",
      category: "Pengumuman",
      tagColor: "text-red-500 bg-red-500/10",
    },
    {
      id: 4,
      slug: "ekspansi-unit-ritel-cabang-4",
      title: "Ekspansi Unit Ritel: Pembukaan Adis Mart Cabang Ke-4",
      excerpt:
        "Adis Mart kini hadir lebih dekat dengan anggota di area Plant 2...",
      date: "05 Maret 2026",
      category: "Berita Ritel",
      tagColor: "text-emerald-500 bg-emerald-500/10",
    },
    {
      id: 5,
      slug: "prosedur-klaim-jht-kopkar-adis-2026",
      title: "Update Prosedur Klaim JHT Terbaru 2026",
      excerpt:
        "Panduan lengkap bagi anggota yang akan memasuki masa pensiun...",
      date: "01 Maret 2026",
      category: "Info Internal",
      tagColor: "text-blue-500 bg-blue-500/10",
    },
  ];

  const trendingNews = [
    {
      id: 1,
      slug: "prosedur-klaim-jht-kopkar-adis-2026",
      title: "Prosedur Klaim JHT Kopkar Adis Terbaru 2026",
      views: "1.2k",
    },
    {
      id: 2,
      slug: "laporan-rat-2025-kenaikan-shu",
      title: "Laporan RAT 2025: Kenaikan Sisa Hasil Usaha",
      views: "940",
    },
  ];

  const filteredNews = allNews.filter((news) => {
    const matchesCategory =
      activeCategory === "All Post" || news.category === activeCategory;
    const matchesSearch = news.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsItems = filteredNews.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const categories = [
    "All Post",
    "Pengumuman",
    "Berita Ritel",
    "Kegiatan CSR",
    "Info Internal",
  ];
  const showFeatured =
    !searchQuery && activeCategory === "All Post" && currentPage === 1;

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans text-left">
      {/* HEADER SECTION TETAP SAMA */}
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

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <main className="lg:col-span-8 space-y-20">
          {/* FEATURED CARD */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${showFeatured ? "max-h-[800px] opacity-100 mb-20" : "max-h-0 opacity-0 mb-0 pointer-events-none"}`}
          >
            <div className="group relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800 h-[500px] md:h-auto md:aspect-[21/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 p-8 md:p-12 z-20 w-full">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 group-hover:text-blue-400 transition-colors duration-500">
                  Transformasi Digital Kopkar ADIS:{" "}
                  <br className="hidden md:block" /> Menuju Ekosistem 4.0
                </h3>
                <Link
                  href="/berita/transformasi-digital-kopkar-adis-menuju-ekosistem-4-0"
                  className="inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 hover:bg-blue-600 transition-all"
                >
                  Read Featured Article <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2. UPDATE BUTTON ONCLICK */}
          <div className="flex items-center gap-4 overflow-x-auto pb-6 no-scrollbar border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${activeCategory === cat ? "bg-slate-950 text-white border-slate-950" : "bg-white text-slate-500 border-slate-100 hover:border-blue-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* NEWS FEED SECTION TETAP SAMA */}
          <div className="space-y-16">
            {currentNewsItems.length > 0 ? (
              <>
                {currentNewsItems.map((news) => (
                  <div
                    key={news.id}
                    className="group flex flex-col md:flex-row gap-10 items-start border-b border-slate-50 pb-16"
                  >
                    <div className="w-full md:w-80 aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden shrink-0 border border-slate-100 relative">
                      <div className="h-full w-full flex items-center justify-center text-slate-200 font-black italic text-xl">
                        NEWS_IMG
                      </div>
                    </div>
                    <div className="flex-grow pt-2 text-left">
                      <div className="flex items-center gap-4 mb-6">
                        <span
                          className={`text-[9px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest ${news.tagColor}`}
                        >
                          {news.category}
                        </span>
                        <span className="text-slate-400 text-[9px] font-bold flex items-center gap-2 uppercase tracking-tighter">
                          <Calendar className="w-3 h-3 text-blue-500" />{" "}
                          {news.date}
                        </span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 leading-tight mb-5 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic">
                        &quot;{news.excerpt}&quot;
                      </p>
                      <Link
                        href={`/berita/${news.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] group/link"
                      >
                        Explore Story{" "}
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 pt-10">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      className="p-4 rounded-2xl border border-slate-100 disabled:opacity-30 hover:bg-slate-50 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-900" />
                    </button>
                    <div className="flex gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-12 h-12 rounded-2xl font-black text-[10px] transition-all ${currentPage === i + 1 ? "bg-slate-950 text-white shadow-xl scale-110" : "bg-white text-slate-400 border border-slate-100 hover:border-blue-200"}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      className="p-4 rounded-2xl border border-slate-100 disabled:opacity-30 hover:bg-slate-50 transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-900" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                  Tidak ada berita ditemukan untuk &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        </main>

        <aside className="lg:col-span-4 space-y-16">
          {/* 3. UPDATE INPUT ONCHANGE */}
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Cari Berita..."
              className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-3xl py-5 pl-14 pr-6 text-[11px] font-bold uppercase tracking-widest outline-none transition-all shadow-sm"
            />
          </div>

          {/* TRENDING WIDGET TETAP SAMA */}
          <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100 relative overflow-hidden text-left">
            <h3 className="font-black uppercase tracking-tighter text-xl mb-12 flex items-center gap-3 italic text-slate-900">
              Trending <TrendingUp className="w-6 h-6 text-blue-600" />
            </h3>
            <div className="space-y-10">
              {trendingNews.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/berita/${item.slug}`}
                  className="flex gap-6 group cursor-pointer text-left"
                >
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
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
