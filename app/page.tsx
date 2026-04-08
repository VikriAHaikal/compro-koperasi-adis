import Link from "next/link";

export default function Home() {
  const partners = [
    "NIKE",
    "ADIDAS",
    "BANK MANDIRI",
    "BPJS",
    "PERTAMINA",
    "INDOFOOD",
    "TELKOMSEL",
    "PLN",
    "MAYBANK",
    "SAMSUNG",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center md:py-40 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <h1 className="relative text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Mensejahterakan Anggota, <br />
          <span className="text-blue-600">Membangun Kemandirian</span>
        </h1>

        <p className="relative mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Menjadi ekosistem koperasi modern yang transparan, profesional, dan
          berorientasi pada pertumbuhan ekonomi bersama seluruh keluarga besar
          PT Adis Dimension Footwear.
        </p>

        <div className="relative mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/layanan">
            <button className="rounded-full bg-blue-600 px-8 py-4 text-white font-bold hover:bg-blue-700 shadow-xl transition-all hover:scale-105 active:scale-95">
              Lihat Unit Usaha
            </button>
          </Link>
          <Link href="/kontak">
            <button className="rounded-full border-2 border-blue-600 px-8 py-4 text-blue-600 font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95">
              Gabung Anggota
            </button>
          </Link>
        </div>
      </section>

      {/* 2. SECTION PARTNERSHIP (Infinite Marquee) */}
      <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-12">
            Strategic Partners & Networks
          </p>

          {/* Marquee Container */}
          <div className="relative flex overflow-x-hidden group">
            {/* Barisan Pertama */}
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((p, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl font-black tracking-tighter text-gray-800 uppercase mx-4"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Barisan Kedua (Duplicate untuk looping tanpa putus) */}
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((p, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl font-black tracking-tighter text-gray-800 uppercase mx-4"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Trick untuk Marquee (Biar Vikri gak perlu edit tailwind.config.js) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 30s linear infinite;
          }
        `,
          }}
        />
      </section>

      {/* 3. IMPACT IN NUMBERS */}
      <section className="py-20 bg-blue-600 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">10K+</p>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Anggota Aktif
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">3</p>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Unit Bisnis Utama
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">25+</p>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Tahun Berdiri
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2">20+</p>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Mitra Strategis
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRESTASI & PENGAKUAN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-tighter">
              Prestasi & Pengakuan
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedikasi kami dalam memberikan pelayanan terbaik telah diakui oleh
              berbagai lembaga nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 rounded-[2.5rem] border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-500">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                Koperasi Teladan Nasional
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                Penghargaan tertinggi dari Kementerian Koperasi & UKM atas tata
                kelola administrasi yang akuntabel.
              </p>
              <span className="text-[10px] font-black text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full uppercase tracking-widest">
                Tahun 2024
              </span>
            </div>

            <div className="group p-10 rounded-[2.5rem] border-2 border-blue-600 bg-white shadow-2xl text-center md:scale-110 md:z-10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Best Innovation
              </div>
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">
                🥇
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">
                Juara 1 Digitalisasi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Inovasi dalam pengembangan aplikasi mobile SISKOP untuk
                transparansi dana anggota secara real-time.
              </p>
              <span className="text-[10px] font-black text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full uppercase tracking-widest">
                Tahun 2025
              </span>
            </div>

            <div className="group p-10 rounded-[2.5rem] border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-500">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                🏅
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                Sertifikasi ISO 9001:2015
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                Pengakuan internasional atas Standar Manajemen Mutu dalam
                pelayanan finansial yang amanah.
              </p>
              <span className="text-[10px] font-black text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full uppercase tracking-widest">
                Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl uppercase tracking-tighter mb-16">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase">
                Integritas Teruji
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                &quot;Pengelolaan dana dilakukan dengan transparansi penuh dan
                diaudit berkala oleh tim profesional.&quot;
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase">
                Ekosistem Digital
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                &quot;Transaksi lebih mudah melalui SISKOP Online untuk
                monitoring simpanan dan pinjaman di mana saja.&quot;
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-left">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-4 text-black uppercase">
                Skala Operasional
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                &quot;Jaringan bisnis yang kuat mencakup Unit Ritel, Unit USP,
                hingga pelatihan pengembangan SDM.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOT NEWS PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase block mb-2 text-left">
                Update Terkini
              </span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tighter text-left uppercase">
                HOT NEWS & BERITA
              </h2>
            </div>
            <Link
              href="/berita"
              className="text-blue-600 font-bold hover:underline inline-flex items-center text-sm uppercase tracking-widest"
            >
              Lihat Semua Berita <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-gray-100 rounded-3xl overflow-hidden mb-8 relative shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Trending
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-24 h-4 bg-gray-100 rounded"></div>
                  <div className="w-full h-8 bg-gray-100 rounded"></div>
                  <div className="w-2/3 h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
