import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Share2,
  Send,
  Calendar,
  Clock,
  ArrowLeft,
} from "lucide-react";

export default function DetailBeritaPage({
  params,
}: {
  params: { id: string };
}) {
  const mockComments = [
    {
      id: 1,
      user: "Budi Santoso",
      text: "Terobosan luar biasa, Pak. Semoga implementasinya cepat!",
      date: "2 jam yang lalu",
    },
    {
      id: 2,
      user: "Siti Aminah",
      text: "Mantap Kopkar ADIS, makin modern dan transparan.",
      date: "5 jam yang lalu",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* 1. MINIMAL NAVIGATION */}
      <nav className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Newsroom
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-6">
        {/* 2. META DATA */}
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/20">
            Pengumuman
          </span>
          <div className="h-px bg-slate-100 flex-grow"></div>
          <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1 uppercase tracking-widest">
            <Calendar className="w-3 h-3" /> 15 April 2026
          </span>
        </div>

        {/* 3. HEADLINE */}
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 leading-[0.9] uppercase tracking-tighter italic">
          RAT 2026: <br /> <span className="text-blue-600">Era Baru</span>{" "}
          Digitalisasi Kopkar ADIS
        </h1>

        {/* 4. FEATURED IMAGE (Premium Frame) */}
        <div className="relative w-full aspect-video bg-slate-950 rounded-[3.5rem] mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-slate-800 font-black italic text-4xl uppercase opacity-40">
            Cover Story
          </div>
        </div>

        {/* 5. CONTENT (Professional Typography) */}
        <div className="prose prose-slate prose-lg max-w-none mb-16">
          <p className="text-xl font-bold text-slate-900 leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
            Koperasi ADIS secara resmi mengumumkan peta jalan transformasi
            digital dalam Rapat Anggota Tahunan (RAT) 2026. Langkah ini diambil
            untuk memastikan pelayanan kepada anggota tetap relevan dan efisien
            di era industri 4.0.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            Dalam laporannya, pengurus menekankan bahwa transparansi dana
            anggota akan menjadi prioritas utama. Dengan sistem baru ini,
            anggota dapat memantau saldo, pengajuan pinjaman, hingga progres
            bazar secara real-time melalui smartphone.
          </p>
        </div>

        {/* 6. INTERACTION BAR */}
        <div className="flex items-center justify-between py-8 border-y border-slate-100 mb-16">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 group">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-rose-50 transition-all">
                <Heart className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-rose-600">
                124 Likes
              </span>
            </button>
            <button className="flex items-center gap-2 group">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-all">
                <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-600">
                {mockComments.length} Comments
              </span>
            </button>
          </div>
          <button className="p-3 rounded-full bg-slate-50 hover:bg-slate-900 hover:text-white transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* 7. PREMIUM COMMENT SECTION */}
        <section className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-inner">
          <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-10">
            Diskusi <span className="text-blue-600">Anggota</span>
          </h3>

          {/* Input Box */}
          <div className="flex gap-4 mb-16">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 shrink-0 flex items-center justify-center text-white font-black text-sm shadow-xl shadow-blue-600/20">
              V
            </div>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Tulis opini atau pertanyaan..."
                className="w-full bg-white border-2 border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 p-2 bg-slate-950 text-white rounded-xl hover:bg-blue-600 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comment List */}
          <div className="space-y-10">
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 shrink-0 flex items-center justify-center text-slate-500 font-bold uppercase">
                  {comment.user[0]}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-black text-slate-900 uppercase text-xs tracking-tight">
                      {comment.user}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                    &quot;{comment.text}&quot;
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
