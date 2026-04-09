import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ChevronLeft,
  Share2,
  Bookmark,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// 1. DATA PUSAT (Tetap di sini sementara sebelum ke Database/Supabase)
const ALL_NEWS_DATA = [
  {
    slug: "transformasi-digital-kopkar-adis-menuju-ekosistem-4-0",
    title:
      "Rapat Anggota Tahunan (RAT) 2026: Fokus Digitalisasi & Transparansi",
    date: "15 April 2026",
    category: "Pengumuman",
    readTime: "5 min read",
    author: "Sekretariat Koperasi",
    content:
      "Koperasi Karyawan PT Adis Dimension Footwear secara resmi memulai langkah besar dalam digitalisasi layanan. Program ini mencakup pembaruan sistem internal, integrasi data anggota, hingga peluncuran platform informasi digital yang lebih transparan.",
  },
  {
    slug: "pelatihan-wirausaha-produk-bernilai-tambah",
    title: "Pelatihan Wirausaha: Membuat Produk Bernilai Tambah",
    date: "12 April 2026",
    category: "Kegiatan CSR",
    readTime: "3 min read",
    author: "Dept. Pendidikan",
    content:
      "Program workshop intensif ini diselenggarakan untuk membekali anggota dengan keterampilan teknis dalam membuat produk yang memiliki nilai jual tinggi di pasar modern.",
  },
  {
    slug: "prosedur-klaim-jht-kopkar-adis-2026",
    title: "Prosedur Klaim JHT Kopkar Adis Terbaru 2026",
    date: "10 April 2026",
    category: "Info Internal",
    readTime: "4 min read",
    author: "Admin Koperasi",
    content:
      "Berikut adalah langkah-langkah terbaru bagi anggota yang ingin melakukan pengajuan klaim JHT melalui sistem digital koperasi.",
  },
  {
    slug: "laporan-rat-2025-kenaikan-shu",
    title: "Laporan RAT 2025: Kenaikan Sisa Hasil Usaha",
    date: "10 Maret 2026",
    category: "Pengumuman",
    readTime: "3 min read",
    author: "Bendahara Koperasi",
    content:
      "Laporan keuangan tahun buku 2025 menunjukkan kenaikan SHU yang signifikan berkat performa unit ritel yang stabil.",
  },
  {
    slug: "ekspansi-unit-ritel-cabang-4",
    title: "Ekspansi Unit Ritel: Pembukaan Adis Mart Cabang Ke-4",
    date: "05 Maret 2026",
    category: "Berita Ritel",
    readTime: "4 min read",
    author: "Manajer Ritel",
    content:
      "Adis Mart resmi membuka cabang ke-4 untuk mempermudah akses kebutuhan pokok karyawan di area Plant 2.",
  },
];

// 2. FUNGSI GENERATE METADATA (Dinamis sesuai slug)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = ALL_NEWS_DATA.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: news.title,
    description: news.content.substring(0, 160), // Ambil sedikit konten untuk deskripsi link
    openGraph: {
      title: news.title,
      description: news.content.substring(0, 160),
      type: "article",
      publishedTime: news.date,
    },
  };
}

// 3. KOMPONEN HALAMAN UTAMA
export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params sesuai standar Next.js 15
  const { slug } = await params;

  // Cari data berita
  const news = ALL_NEWS_DATA.find((item) => item.slug === slug);

  // Filter trending list (buang berita yang lagi dibuka)
  const trendingList = ALL_NEWS_DATA.filter((item) => item.slug !== slug).slice(
    0,
    3,
  );

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 uppercase italic">
            Berita Tidak Ditemukan
          </h1>
          <Link
            href="/berita"
            className="text-blue-600 font-bold uppercase text-[10px] mt-4 block tracking-widest"
          >
            Kembali ke Newsroom
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-32 font-sans text-left">
      {/* HEADER NAVIGATION */}
      <div className="bg-slate-950 pt-28 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-[10px] font-black uppercase tracking-widest transition-all group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Newsroom
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
        {/* === LEFT: ARTICLE CONTENT === */}
        <article className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest shadow-lg shadow-blue-600/20">
              {news.category}
            </span>
            <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-500" /> {news.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-500" /> {news.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[1.1] mb-12 italic">
            {news.title}
          </h1>

          <div className="w-full aspect-video bg-slate-100 rounded-[3rem] mb-12 flex items-center justify-center border border-slate-100 shadow-inner overflow-hidden">
            <span className="text-slate-200 font-black italic text-4xl">
              FEATURED_IMAGE_HD
            </span>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed space-y-8 whitespace-pre-line font-medium">
            {news.content}
          </div>

          {/* Published By Area */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-xs">
                ADIS
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Published by
                </p>
                <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">
                  {news.author}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-blue-600 transition-colors shadow-sm">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-blue-600 transition-colors shadow-sm">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </article>

        {/* === RIGHT: DYNAMIC SIDEBAR === */}
        <aside className="lg:col-span-4 space-y-12 text-left">
          <div className="bg-slate-950 p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <h3 className="font-black uppercase tracking-tighter text-xl mb-10 italic flex items-center gap-3">
              Trending <TrendingUp className="w-6 h-6 text-blue-500" />
            </h3>
            <div className="space-y-8">
              {trendingList.map((item, i) => (
                <Link
                  key={i}
                  href={`/berita/${item.slug}`}
                  className="group block border-b border-white/5 pb-6 last:border-0 last:pb-0"
                >
                  <p className="text-blue-500 text-[10px] font-black mb-2 uppercase tracking-widest">
                    Adis Update
                  </p>
                  <h5 className="font-bold text-sm leading-snug group-hover:text-blue-400 transition-colors uppercase tracking-tighter line-clamp-2">
                    {item.title}
                  </h5>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
