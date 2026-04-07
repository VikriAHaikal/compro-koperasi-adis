export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Header Halaman */}
      <div className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Tentang Koperasi Adis
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Mengenal lebih dekat sejarah, visi, dan misi kami dalam
          menyejahterakan anggota.
        </p>
      </div>

      {/* Konten Visi Misi */}
      <section className="py-20 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Visi Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Menjadi koperasi simpan pinjam pilihan utama yang unggul, mandiri,
            dan terpercaya dalam memberikan solusi finansial bagi seluruh
            anggota dan masyarakat.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Misi Kami</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Memberikan pelayanan prima yang cepat dan transparan.</li>
            <li>Mengelola dana anggota secara amanah dan profesional.</li>
            <li>
              Meningkatkan kesejahteraan ekonomi melalui pemberdayaan anggota.
            </li>
          </ul>
        </div>
      </section>

      {/* Sejarah Singkat */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Sejarah Singkat
          </h2>
          <p className="text-gray-600 italic">
            &quot;Berawal dari keinginan kecil sekelompok karyawan untuk saling
            membantu dalam hal finansial, Koperasi Adis resmi berdiri dan terus
            berkembang hingga memiliki ribuan anggota aktif saat ini.&quot;
          </p>
        </div>
      </section>
      {/* SECTION PENGHARGAAN (Mapping ke tabel 'achievements') */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Penghargaan & Sertifikasi
            </h2>
            <p className="text-gray-600 mt-4">
              Bukti dedikasi kami dalam memberikan pelayanan terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rangka Card Achievement */}
            <div className="flex items-center gap-6 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-4xl">🏆</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 uppercase">
                  Koperasi Teladan
                </h3>
                <p className="text-sm text-gray-600">
                  Diberikan oleh Dinas Koperasi Kota Tangerang tahun 2025.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-4xl">🏅</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 uppercase">
                  Sertifikat Manajemen Mutu
                </h3>
                <p className="text-sm text-gray-600">
                  Sertifikasi atas standar operasional koperasi yang transparan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
