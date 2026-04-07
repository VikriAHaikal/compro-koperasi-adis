import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* --- BAGIAN KIRI: LOGOS & INFO KONTAK --- */}
        <div className="flex flex-col gap-12">
          {/* Barisan 3 Logo dengan Background Putih Seragam */}
          <div className="flex flex-wrap items-center gap-6">
            {/* 1. Logo PT Adis (ADF) */}
            <div className="bg-white p-3 rounded-xl flex items-center justify-center shadow-lg shadow-white/5 w-28 h-16 transition-transform hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src="/adf.png"
                  alt="PT Adis Dimension Footwear"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 2. Logo Koperasi */}
            <div className="bg-white p-3 rounded-xl flex items-center justify-center shadow-lg shadow-white/5 w-28 h-16 transition-transform hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src="/kopkar_adis.png"
                  alt="Koperasi Adis"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 3. Logo AdisMart */}
            <div className="bg-white p-3 rounded-xl flex items-center justify-center shadow-lg shadow-white/5 w-28 h-16 transition-transform hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src="/adismart.png"
                  alt="AdisMart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Info Kontak */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white leading-tight uppercase tracking-tight">
                Koperasi Konsumen Karyawan <br />
                <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                  PT Adis Dimension Footwear
                </span>
              </h3>
            </div>

            <ul className="space-y-5 text-gray-400 text-sm">
              <li className="flex items-start gap-4">
                <span className="bg-blue-600/20 p-2 rounded-lg text-blue-400 font-bold">
                  📍
                </span>
                <span className="leading-relaxed">
                  Jl. Raya Serang Km. 24, Balaraja, <br />
                  Kabupaten Tangerang, Banten 15610
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 p-2 rounded-lg text-blue-400 font-bold">
                  📧
                </span>
                <span>info@kopkaradis.com</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-blue-600/20 p-2 rounded-lg text-blue-400 font-bold">
                  📞
                </span>
                <span>(021) 5951660</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BAGIAN KANAN: LOKASI (MAPS) --- */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            Lokasi Kantor & Unit Bisnis
          </h3>

          <div className="w-full h-[350px] rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl relative group">
            <iframe
              src="https://maps.google.com/maps?q=PT+Adis+Dimension+Footwear+Balaraja&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">
        <p className="uppercase tracking-widest">
          © {new Date().getFullYear()} Koperasi Konsumen Karyawan PT Adis
          Dimension Footwear
        </p>
      </div>
    </footer>
  );
}
