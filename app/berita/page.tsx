import Link from "next/link";

export default function BeritaPage() {
  // Mock Data untuk Trending (Biasanya berdasarkan view terbanyak)
  const trendingNews = [
    { id: 1, title: "Cara Klaim JHT di Koperasi Adis", views: "1.2k" },
    { id: 2, title: "Laporan RAT 2025 Sudah Terbit", views: "940" },
    { id: 3, title: "Jadwal Bazar Sembako Murah", views: "850" },
  ];

  // Mock Data Utama
  const allNews = [
    {
      id: 1,
      title: "Rapat Anggota Tahunan (RAT) Tahun Buku 2025",
      excerpt:
        "Sesuai dengan AD/ART Koperasi, pengurus mengundang seluruh anggota...",
      date: "15 April 2026",
      category: "PENGUMUMAN",
      tagColor: "bg-red-600",
      isHot: true,
    },
    // ... (data lainnya bisa ditambah di sini)
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HEADER KHUSUS BERITA */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter italic text-slate-900">
            Adis <span className="text-blue-600">Newsroom</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Informasi terkini seputar Koperasi Karyawan PT Adis.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* === KIRI: MAIN CONTENT (8 Kolom) === */}
        <main className="lg:col-span-8">
          {/* A. HOT NEWS / FEATURED */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 rounded-full bg-red-600 animate-ping"></span>
              <h2 className="font-black uppercase tracking-widest text-sm text-red-600">
                Hot News Today
              </h2>
            </div>
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-video md:aspect-[21/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-0 p-8 md:p-12 z-20">
                <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full mb-4 inline-block uppercase">
                  PENGUMUMAN
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                  Persiapan Menuju RAT (Rapat Anggota Tahunan) 2026:
                  Transformasi Digital Koperasi
                </h3>
                <Link
                  href="/berita/1"
                  className="mt-6 inline-block text-white font-bold text-sm border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-all"
                >
                  BACA BERITA UTAMA →
                </Link>
              </div>
              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-4xl opacity-20 italic">
                FEATURED IMAGE
              </div>
            </div>
          </div>

          {/* B. KATEGORI FILTER */}
          <div className="flex flex-wrap gap-3 mb-10 border-y border-gray-200 py-4">
            {[
              "Semua",
              "Pengumuman",
              "Simpan Pinjam",
              "Event",
              "Promo",
              "Sosial",
            ].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full border border-gray-200 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* C. LATEST NEWS LIST */}
          <div className="space-y-12">
            {allNews.map((news) => (
              <div
                key={news.id}
                className="flex flex-col md:flex-row gap-8 group"
              >
                <div className="w-full md:w-64 aspect-video bg-gray-200 rounded-3xl shrink-0 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    Image
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[10px] font-black px-3 py-0.5 rounded text-white ${news.tagColor}`}
                    >
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-[10px] font-bold">
                      {news.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-blue-600 transition-all mb-3 leading-tight">
                    {news.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/berita/${news.id}`}
                    className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline"
                  >
                    Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* === KANAN: SIDEBAR (4 Kolom) === */}
        <aside className="lg:col-span-4 space-y-12">
          {/* TRENDING SECTION */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
            <h3 className="font-black uppercase tracking-tighter italic text-xl mb-6 border-b pb-4">
              Trending 🔥
            </h3>
            <div className="space-y-6">
              {trendingNews.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-all">
                    0{index + 1}
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-slate-800 leading-tight group-hover:text-blue-600 mb-1">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {item.views} Pembaca
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER / INFO CARD */}
          <div className="bg-blue-600 rounded-[2rem] p-8 text-white">
            <h3 className="font-black uppercase tracking-tighter text-xl mb-4">
              Butuh Bantuan?
            </h3>
            <p className="text-blue-100 text-xs leading-relaxed mb-6 font-medium">
              Hubungi Sekretariat Koperasi jika ada pertanyaan seputar
              keanggotaan atau layanan kami.
            </p>
            <Link
              href="/kontak"
              className="block w-full text-center bg-white text-blue-600 font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-slate-100"
            >
              Kontak Kami
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
