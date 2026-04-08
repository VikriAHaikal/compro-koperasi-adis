export default function LegalitasPage() {
  const docs = [
    { name: "Badan Hukum Koperasi", info: "No: 1234/BH/M.KUKM.2/2026" },
    { name: "NIB (Nomor Induk Berusaha)", info: "No: 9120001234567" },
    { name: "Sertifikat Koperasi Sehat", info: "Predikat: Sangat Sehat (A)" },
    { name: "Izin Usaha Simpan Pinjam", info: "Berlaku Secara Nasional" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-700 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Legalitas
        </h1>
        <p className="mt-4 text-blue-200 uppercase text-xs tracking-[0.3em]">
          Landasan Hukum Operasional
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 gap-4">
          {docs.map((doc) => (
            <div
              key={doc.name}
              className="flex justify-between items-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-300 transition-colors"
            >
              <div>
                <h3 className="text-gray-400 font-black uppercase text-[10px] tracking-widest mb-1">
                  {doc.name}
                </h3>
                <p className="text-blue-900 font-bold text-lg">{doc.info}</p>
              </div>
              <span className="text-2xl text-blue-600">📄</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-400 text-sm italic">
          Seluruh kegiatan operasional Kopkar ADIS telah terdaftar dan diawasi
          oleh kementerian terkait.
        </p>
      </section>
    </div>
  );
}
