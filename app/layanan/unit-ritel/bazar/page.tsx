import Image from "next/image";

export default function BazarPage() {
  // NANTI: Data ini ditarik otomatis dari tabel 'events' di Supabase
  const bazarData = {
    title: "BAZAR TAHUNAN",
    frequency: "Diadakan Setahun 3 Kali",
    description:
      "Koperasi karyawan PT. Adis juga mengadakan bazar yang diadakan setahun 3 kali. Dalam bazar tersebut barang-barang rumah tangga, elektronik, kendaraan bermotor, alat kesehatan, pernak pernik hiasan rumah tersedia dengan harga terjangkau.",
    locations: ["Kantin Adis 1", "Kantin Adis 2"],
    cta: "Para karyawan sangat antusias dalam hadirnya bazar yang diadakan oleh koperasi karyawan PT. Adis.",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-orange-500 py-24 text-white text-center">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter">
          {bazarData.title}
        </h1>
        <p className="mt-4 text-orange-100 font-bold tracking-[0.3em] uppercase text-xs">
          {bazarData.frequency}
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Kemeriahan & Antusiasme
              </h2>
              {/* PERBAIKAN DI SINI: Menggunakan &quot; untuk tanda petik */}
              <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">
                &quot;{bazarData.description}&quot;
              </p>

              <div className="flex flex-col gap-4">
                <p className="font-bold text-gray-400 uppercase text-xs tracking-widest">
                  Lokasi Pelaksanaan:
                </p>
                <div className="flex gap-4">
                  {bazarData.locations.map((loc) => (
                    <span
                      key={loc}
                      className="bg-orange-100 text-orange-700 px-6 py-2 rounded-full font-bold text-sm shadow-sm"
                    >
                      📍 {loc}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-orange-600 font-bold text-sm uppercase tracking-tight">
                {bazarData.cta}
              </p>
            </div>

            {/* Galeri Foto Dinamis */}
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src="/kopkar_adis.png"
                  alt="Bazar 1"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src="/kopkar_adis.png"
                  alt="Bazar 2"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src="/kopkar_adis.png"
                  alt="Bazar 3"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
