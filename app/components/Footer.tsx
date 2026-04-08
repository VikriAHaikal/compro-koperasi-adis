import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] shadow-inner mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1. BRANDING & ABOUT */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-full">
              <Image src="/kopkar_adis.png" alt="Logo" width={30} height={30} />
            </div>
            <span className="font-black text-sm uppercase tracking-widest">
              Kopkar ADIS
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Membangun kesejahteraan bersama seluruh karyawan PT Adis Dimension
            Footwear melalui ekosistem ekonomi yang transparan, profesional, dan
            berbasis teknologi.
          </p>
          {/* Social Media Dummy */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              📸
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              🎬
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              🌐
            </div>
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
            Pintasan
          </h4>
          <ul className="space-y-4 text-sm font-medium text-slate-300">
            <li>
              <Link
                href="/profile/visi-misi"
                className="hover:text-blue-400 transition"
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                href="/layanan/unit-ritel"
                className="hover:text-blue-400 transition"
              >
                Unit Ritel
              </Link>
            </li>
            <li>
              <Link
                href="/layanan/simpan-pinjam"
                className="hover:text-blue-400 transition"
              >
                Simpan Pinjam
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-blue-400 transition">
                Update Berita
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:text-blue-400 transition">
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. KONTAK INFO */}
        <div>
          <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
            Hubungi Kami
          </h4>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <span className="text-xl">📍</span>
              <span className="text-slate-300 leading-snug">
                Jl. Raya Serang Km. 24, Balaraja, Tangerang, Banten.
              </span>
            </li>
            <li className="flex gap-4 italic font-bold">
              <span className="text-xl">📞</span>
              <span className="text-blue-400">(021) 595 1234</span>
            </li>
            <li className="flex gap-4">
              <span className="text-xl">✉️</span>
              <span className="text-slate-300">info@kopkaradis.co.id</span>
            </li>
          </ul>
        </div>

        {/* 4. OPERATIONAL HOURS */}
        <div>
          <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8">
            Jam Operasional
          </h4>
          <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-700">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Senin - Jumat
              </span>
              <span className="text-xs font-black text-white">
                08:00 - 17:00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Sabtu
              </span>
              <span className="text-xs font-black text-blue-400 uppercase tracking-widest text-[9px]">
                Tutup
              </span>
            </div>
            <p className="mt-6 text-[10px] text-slate-500 italic">
              *Tutup pada hari libur nasional dan tanggal merah.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          © 2026 KOPKAR ADIS. ALL RIGHTS RESERVED.
        </p>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          Designed & Developed by{" "}
          <span className="text-blue-400">Vikri A. Haikal, S.Kom</span>
        </p>
      </div>
    </footer>
  );
}
