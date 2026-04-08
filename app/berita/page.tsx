import Link from "next/link";

export default function BeritaPage() {
  // Logic: Data dummy yang nantinya bisa diambil dari Database/CMS
  const allNews = [
    {
      id: 1,
      title: "Rapat Anggota Tahunan (RAT) Tahun Buku 2025",
      excerpt:
        "Sesuai dengan AD/ART Koperasi, pengurus mengundang seluruh anggota untuk menghadiri RAT yang akan dilaksanakan...",
      date: "15 April 2026",
      category: "PENGUMUMAN",
      tagColor: "bg-red-600",
    },
    {
      id: 2,
      title: "Pembukaan Pendaftaran Beasiswa Anak Anggota",
      excerpt:
        "Kopkar ADIS kembali membuka program beasiswa prestasi untuk putra-putri anggota yang duduk di bangku SD, SMP, dan SMA...",
      date: "10 April 2026",
      category: "SOSIAL",
      tagColor: "bg-green-600",
    },
    {
      id: 3,
      title: "Promo Spesial Ramadhan di Adis Mart",
      excerpt:
        "Dapatkan paket sembako murah dan diskon menarik lainnya selama bulan suci Ramadhan khusus untuk pemegang kartu anggota...",
      date: "05 April 2026",
      category: "PROMO",
      tagColor: "bg-orange-500",
    },
    {
      id: 4,
      title: "Update Sistem SISKOP: Monitoring Tabungan Lebih Cepat",
      excerpt:
        "Tim IT Kopkar ADIS telah melakukan upgrade server pada aplikasi SISKOP. Kini akses data simpanan menjadi 2x lebih cepat...",
      date: "01 April 2026",
      category: "TEKNOLOGI",
      tagColor: "bg-blue-600",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase block mb-2">
            Kopkar ADIS Update
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
            Berita & Pengumuman
          </h1>
        </div>
      </section>

      {/* 2. FEATURED NEWS (Berita Utama) */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-200 aspect-video lg:aspect-auto relative animate-pulse">
            {/* Placeholder Image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest italic">
              Featured Image
            </div>
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-6 uppercase tracking-widest">
              Terbaru
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight uppercase tracking-tighter">
              Persiapan Menuju RAT (Rapat Anggota Tahunan) 2026
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Pengurus sedang mematangkan laporan pertanggungjawaban untuk
              disampaikan kepada seluruh anggota. RAT tahun ini akan mengusung
              tema &quot;Transformasi Digital Menuju Koperasi Mandiri&quot;.
            </p>
            <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full w-fit hover:bg-blue-700 transition-all text-sm uppercase tracking-widest">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* 3. NEWS GRID (Daftar Berita Lainnya) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-6">
          <h3 className="font-black text-2xl uppercase tracking-tighter text-gray-900 italic">
            Arsip Berita
          </h3>
          <div className="flex gap-4 text-xs font-bold text-gray-400">
            <button className="text-blue-600 border-b-2 border-blue-600">
              Semua
            </button>
            <button className="hover:text-gray-600">Pengumuman</button>
            <button className="hover:text-gray-600">Event</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allNews.map((news) => (
            <div
              key={news.id}
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/9] bg-gray-100 relative group-hover:scale-105 transition-transform duration-500">
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`${news.tagColor} text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg`}
                  >
                    {news.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-200 font-bold text-[10px] uppercase tracking-[0.2em]">
                  News Image
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                  {news.date}
                </span>
                <h4 className="text-lg font-black text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors uppercase">
                  {news.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/berita/${news.id}`}
                    className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-70"
                  >
                    Baca Berita →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. PAGINATION LOGIC (DUMMY) */}
        <div className="mt-20 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-200">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-white text-gray-400 font-bold text-sm border border-gray-100 hover:bg-gray-50">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-white text-gray-400 font-bold text-sm border border-gray-100 hover:bg-gray-50">
            3
          </button>
        </div>
      </section>
    </div>
  );
}
