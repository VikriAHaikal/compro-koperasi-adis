export default function PrestasiPage() {
  const awards = [
    {
      year: "2024",
      title: "Koperasi Teladan Nasional",
      level: "Kementerian Koperasi & UKM",
    },
    {
      year: "2025",
      title: "Juara 1 Digitalisasi Koperasi",
      level: "Provinsi Banten",
    },
    {
      year: "2025",
      title: "Sertifikasi ISO 9001:2015",
      level: "Standard Manajemen Mutu",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-blue-600 py-20 text-white text-center shadow-lg">
        <h1 className="text-4xl font-black uppercase tracking-widest italic text-yellow-300">
          Prestasi
        </h1>
        <p className="mt-4 text-blue-100 uppercase text-xs tracking-[0.3em]">
          Bukti Nyata Dedikasi Kami
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 text-center flex flex-col items-center"
            >
              <span className="text-5xl mb-6">🏆</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {award.title}
              </h3>
              <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-6">
                {award.level}
              </p>
              <div className="mt-auto bg-yellow-400 text-white px-6 py-1 rounded-full font-black text-sm">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
