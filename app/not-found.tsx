// app/not-found.tsx
import Link from "next/link";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6 font-sans">
      <div className="relative max-w-2xl w-full text-center">
        {/* Background Decorative Number (Watermark style) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 select-none overflow-hidden">
          <span className="text-[20rem] md:text-[30rem] font-black text-slate-50 leading-none">
            404
          </span>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm">
            <FileQuestion className="w-4 h-4" /> Error: Page Not Found
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter italic leading-none mb-6">
            Halaman <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Tidak Ditemukan
            </span>
          </h1>

          <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.2em] leading-relaxed mb-12 opacity-80">
            Maaf, informasi yang Anda cari mungkin telah dipindahkan, dihapus,
            atau belum tersedia di server kami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <button className="px-10 py-5 bg-slate-950 hover:bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-slate-900/20 flex items-center gap-3 group">
                <Home className="w-4 h-4" /> Kembali ke Beranda
              </button>
            </Link>

            <Link href="/berita">
              <button className="px-10 py-5 bg-white border-2 border-slate-100 hover:border-blue-200 text-slate-400 hover:text-blue-600 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all flex items-center gap-3">
                Cek Berita Terbaru <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </Link>
          </div>
        </div>

        {/* Footer Branding Sederhana */}
        <div className="mt-24 pt-10 border-t border-slate-50 text-slate-300 text-[9px] font-bold uppercase tracking-[0.5em]">
          Internal Compro System • Kopkar Adis
        </div>
      </div>
    </div>
  );
}
