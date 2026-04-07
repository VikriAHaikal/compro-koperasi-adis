import Image from "next/image";

export default function AdisMartPage() {
  // NANTI: Objek ini diambil dari tabel 'services' atau 'units' di Supabase
  const adisMartData = {
    title: "Adis Mart",
    description:
      "Adis Mart merupakan toko yang menyediakan kebutuhan barang – barang kebutuhan karyawan sehari-hari, baik itu sembako maupun peralatan rumah tangga. Makanan, minuman serta kebutuhan untuk balita semua tersedia disini.",
    highlights: [
      "Tersedia Sembako: Beras, Minyak, Gula, Indomie, kopi, sabun, dll.",
      "Elektronik: Setrika, mixer, pemanggang roti, magicom, kompor gas.",
      "Layanan Cek Harga: Transparansi harga sebelum membeli.",
      "Metode Bayar: Cash, Kredit, atau Autodebet Gaji.",
    ],
    footerNote:
      "Jangan lupa gunakan kartu koperasi setiap anda melakukan transaksi, karena para anggota akan mendapatkan point SHU setiap transaksi belanja di Adis Mart.",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 py-24 text-white text-center">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter">
          {adisMartData.title}
        </h1>
        <div className="h-1 w-24 bg-white mx-auto mt-6"></div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bagian Teks Dinamis */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Unit Bisnis Ritel Terpercaya
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {adisMartData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adisMartData.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm text-blue-900 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-3xl border-l-8 border-yellow-400">
              <p className="text-yellow-800 font-bold uppercase text-xs tracking-widest mb-2 italic">
                📢 Pengumuman Anggota
              </p>
              <p className="text-yellow-700 text-sm leading-relaxed font-semibold">
                {adisMartData.footerNote}
              </p>
            </div>
          </div>

          {/* Bagian Galeri Dinamis */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/kopkar_adis.png"
                alt="Adis Mart 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 mt-12 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/kopkar_adis.png"
                alt="Adis Mart 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
