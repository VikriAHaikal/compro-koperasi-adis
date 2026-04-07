import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-5 bg-blue-600 text-white shadow-md sticky top-0 z-50">
      {/* 1. LOGO & IDENTITAS */}
      <Link
        href="/"
        className="flex items-center gap-4 hover:opacity-90 transition shrink-0"
      >
        <div className="relative w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center p-1 shadow-md">
          <Image
            src="/kopkar_adis.png"
            alt="Logo"
            width={35}
            height={35}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col leading-tight hidden sm:flex text-left">
          <span className="text-sm md:text-base font-extrabold uppercase tracking-wide">
            Koperasi Konsumen Karyawan
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-blue-100 uppercase">
            PT Adis Dimension Footwear
          </span>
        </div>
      </Link>

      {/* 2. MENU UTAMA */}
      <ul className="flex gap-4 md:gap-8 text-xs md:text-sm font-semibold items-center">
        <li>
          <Link href="/" className="hover:text-blue-200 transition uppercase">
            HOME
          </Link>
        </li>

        {/* PROFILE */}
        <li className="relative group py-2">
          <button className="hover:text-blue-200 transition flex items-center gap-1 uppercase">
            PROFILE <span className="text-[10px]">▼</span>
          </button>
          <ul className="absolute left-1/2 -translate-x-1/2 top-full invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white text-gray-800 w-48 shadow-2xl rounded-xl border-t-4 border-blue-500 transition-all duration-300 py-2 z-50">
            <li>
              <Link
                href="/about#visi-misi"
                className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-600"
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                href="/about#sejarah"
                className="block px-6 py-2 hover:bg-blue-50 hover:text-blue-600"
              >
                Sejarah
              </Link>
            </li>
          </ul>
        </li>

        {/* LAYANAN DROPDOWN (FULL VERSION) */}
        <li className="relative group py-2">
          <button className="hover:text-blue-200 transition flex items-center gap-1 uppercase">
            LAYANAN <span className="text-[10px]">▼</span>
          </button>

          {/* Bridge Wrapper */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
            <ul className="bg-white text-gray-800 w-80 shadow-2xl rounded-2xl border-t-4 border-blue-500 overflow-y-auto max-h-[80vh] no-scrollbar">
              {/* --- SECTION 1: UNIT RITEL --- */}
              <li className="bg-gray-50 border-b border-gray-100 px-6 py-3">
                <Link href="/layanan/unit-ritel" className="group/item">
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover/item:text-blue-800">
                    Unit Ritel
                  </p>
                </Link>
              </li>
              <li className="bg-white border-b border-gray-100 pb-2">
                <Link
                  href="/layanan/unit-ritel/adis-mart"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-sm font-medium"
                >
                  <span className="text-base">🛒</span> Adis Mart
                </Link>
                <Link
                  href="/layanan/unit-ritel/bazar"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-sm font-medium"
                >
                  <span className="text-base">🎁</span> Bazar Tahunan
                </Link>
              </li>

              {/* --- SECTION 2: SIMPAN PINJAM --- */}
              <li className="bg-gray-50 border-b border-gray-100 px-6 py-3">
                <Link href="/layanan/simpan-pinjam" className="group/item">
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover/item:text-blue-800">
                    Unit Simpan Pinjam
                  </p>
                </Link>
              </li>
              <li className="bg-white border-b border-gray-100 pb-2">
                <Link
                  href="/layanan/simpan-pinjam/dana-talangan"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-[13px] font-medium"
                >
                  <span className="text-base">💸</span> Dana Talangan
                </Link>
                <Link
                  href="/layanan/simpan-pinjam/pinjaman-regular"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-[13px] font-medium"
                >
                  <span className="text-base">🏦</span> Pinjaman Regular
                </Link>
                {/* FIX: Link sudah disesuaikan dengan nama folder kamu */}
                <Link
                  href="/layanan/simpan-pinjam/pinjaman-multi-guna"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-[13px] font-medium"
                >
                  <span className="text-base">💎</span> Pinjaman Multiguna
                </Link>
              </li>

              {/* --- SECTION 3: PELATIHAN (NEW!) --- */}
              <li className="bg-gray-50 border-b border-gray-100 px-6 py-3">
                <Link href="/layanan/pelatihan" className="group/item">
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover/item:text-blue-800">
                    Pelatihan Koperasi
                  </p>
                </Link>
              </li>
              <li className="bg-white">
                <Link
                  href="/layanan/pelatihan/pendidikan-keterampilan"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-[13px] font-medium"
                >
                  <span className="text-base">🛠️</span> Pendidikan Keterampilan
                </Link>
                <Link
                  href="/layanan/pelatihan/pendidikan-dasar"
                  className="flex items-center gap-3 px-8 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition text-[13px] font-medium"
                >
                  <span className="text-base">📜</span> Pendidikan Dasar Anggota
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link
            href="/berita"
            className="hover:text-blue-200 transition uppercase"
          >
            BERITA
          </Link>
        </li>
        <li>
          <Link
            href="/kontak"
            className="hover:text-blue-200 transition uppercase"
          >
            KONTAK
          </Link>
        </li>
      </ul>
    </nav>
  );
}
