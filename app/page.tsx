export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION (The First Impression) */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center md:py-40 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h1 className="relative text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Mensejahterakan Anggota, <br />
          <span className="text-blue-600">Membangun Kemandirian</span>
        </h1>
        <p className="relative mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Menjadi ekosistem koperasi modern yang transparan, profesional, dan
          berorientasi pada pertumbuhan ekonomi bersama seluruh keluarga besar
          PT Adis.
        </p>
        <div className="relative mt-12 flex flex-wrap gap-4 justify-center">
          <button className="rounded-full bg-blue-600 px-8 py-4 text-white font-bold hover:bg-blue-700 shadow-xl transition-all">
            Lihat Unit Usaha
          </button>
          <button className="rounded-full border-2 border-blue-600 px-8 py-4 text-blue-600 font-bold hover:bg-blue-50 transition-all">
            Gabung Anggota
          </button>
        </div>
      </section>

      {/* 2. SECTION PARTNERSHIP (Blueprint: Infinite Marquee) */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            Strategic Partners
          </p>
          {/* Rangkaian Logo (Nanti kita kasih CSS Marquee) */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT IN NUMBERS (Blueprint: Data-Driven Credibility) */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">10K+</p>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-widest">
              Anggota Aktif
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">5</p>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-widest">
              Unit Bisnis
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">25+</p>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-widest">
              Tahun Berdiri
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">20+</p>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-widest">
              Mitra Strategis
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION PRESTASI HIGHLIGHT (Blueprint: Social Proof) - BARU */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Prestasi & Pengakuan
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedikasi kami dalam memberikan pelayanan terbaik telah diakui oleh
              berbagai lembaga nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kartu Prestasi 1 */}
            <div className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Koperasi Teladan Nasional
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Penghargaan tertinggi dari Kementerian Koperasi & UKM atas tata
                kelola administrasi dan keuangan yang sangat baik.
              </p>
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase">
                Tahun 2024
              </span>
            </div>

            {/* Kartu Prestasi 2 */}
            <div className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 text-center md:scale-110 md:shadow-xl md:z-10 md:bg-white">
              <div className="text-5xl mb-6">🥇</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Juara 1 Digitalisasi Koperasi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Inovasi dalam pengembangan aplikasi mobile dan sistem simpan
                pinjam digital tercepat di tingkat provinsi.
              </p>
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase">
                Tahun 2025
              </span>
            </div>

            {/* Kartu Prestasi 3 */}
            <div className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
              <div className="text-5xl mb-6">🏅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sertifikasi ISO 9001:2015
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Pengakuan internasional atas Standar Manajemen Mutu dalam
                memberikan layanan finansial yang amanah.
              </p>
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase">
                Certified
              </span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="text-blue-600 font-bold hover:underline">
              Lihat Semua Jejak Prestasi Kami →
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY WORK WITH US (Blueprint: Visual Authority) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Mengapa Memilih Kami?
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Integritas Teruji
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pengelolaan dana anggota dilakukan dengan transparansi penuh dan
                diaudit secara berkala.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Ekosistem Modern
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pemanfaatan teknologi digital untuk kemudahan transaksi dan
                akses layanan bagi seluruh anggota.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Skala Operasional Luas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jaringan bisnis yang kuat mencakup ritel, finansial, hingga
                penyediaan kebutuhan industri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOT NEWS (Blueprint: Skeleton Pulse Ready) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
                Update Terkini
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Hot News & Berita
              </h2>
            </div>
            <button className="text-blue-600 font-bold hover:underline inline-flex items-center">
              Lihat Semua Berita <span className="ml-2">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Trending
                  </div>
                </div>
                <div className="w-24 h-4 bg-gray-100 rounded mb-4"></div>
                <div className="w-full h-7 bg-gray-200 rounded mb-2"></div>
                <div className="w-2/3 h-7 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
