import Link from "next/link";
import { Heart, MessageCircle, Send, Share2 } from "lucide-react"; // Jangan lupa install lucide-react kalau belum

export default function DetailBeritaPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock Data Komentar
  const mockComments = [
    {
      id: 1,
      user: "Budi Santoso",
      text: "Mantap, ditunggu realisasinya Pak Pengurus!",
      date: "2 jam yang lalu",
    },
    {
      id: 2,
      user: "Siti Aminah",
      text: "Alhamdulillah, semoga koperasi makin jaya.",
      date: "5 jam yang lalu",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. NAVIGATION */}
      <nav className="max-w-4xl mx-auto px-6 py-10">
        <Link
          href="/berita"
          className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2"
        >
          ← Kembali ke Newsroom
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-6">
        {/* 2. HEADER BERITA */}
        <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
          PENGUMUMAN
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-6 mb-8 leading-tight uppercase tracking-tighter italic">
          Rapat Anggota Tahunan (RAT) 2026: Digitalisasi Kopkar ADIS
        </h1>

        {/* 3. IMAGE PLACEHOLDER */}
        <div className="w-full aspect-video bg-gray-100 rounded-[3rem] mb-12 flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400 font-black italic">
          NEWS FEATURED IMAGE
        </div>

        {/* 4. CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
          <p>
            Isi berita di sini... (Nantinya diambil dari Supabase berdasarkan
            ID: {params.id})
          </p>
          <p>
            Koperasi ADIS berkomitmen untuk terus berinovasi dalam memberikan
            layanan terbaik bagi seluruh anggota melalui sistem digital yang
            terintegrasi.
          </p>
        </div>

        {/* === 5. INTERACTION BAR (LIKE & SHARE) === */}
        <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-12">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 group">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-red-50 transition-all">
                <Heart className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
              </div>
              <span className="text-sm font-black text-slate-500 group-hover:text-red-500">
                124 Suka
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="p-3 rounded-full bg-slate-50">
                <MessageCircle className="w-5 h-5 text-slate-400" />
              </div>
              <span className="text-sm font-black text-slate-500">
                {mockComments.length} Komentar
              </span>
            </div>
          </div>
          <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 transition-all group">
            <Share2 className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
          </button>
        </div>

        {/* === 6. COMMENT SECTION === */}
        <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12">
          <h3 className="text-xl font-black uppercase tracking-tighter italic mb-8">
            Diskusi Anggota
          </h3>

          {/* Input Komentar */}
          <div className="flex gap-4 mb-10">
            <div className="w-10 h-10 rounded-full bg-blue-600 shrink-0 flex items-center justify-center text-white font-black text-xs">
              V
            </div>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Tulis komentar kamu..."
                className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Daftar Komentar */}
          <div className="space-y-8">
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0 flex items-center justify-center text-slate-500 font-bold text-xs">
                  {comment.user[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-black text-sm text-slate-900">
                      {comment.user}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
