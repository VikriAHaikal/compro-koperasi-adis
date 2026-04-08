export default function VisiMisiPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-600 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Visi & Misi
        </h1>
        <p className="mt-4 text-blue-100 uppercase text-xs tracking-[0.3em]">
          Landasan Perjuangan Koperasi Adis
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="space-y-16">
          {/* VISI */}
          <div className="text-center">
            <h2 className="text-blue-600 font-black text-2xl uppercase mb-6 tracking-tighter">
              Visi Kami
            </h2>
            <div className="p-10 rounded-[3rem] bg-blue-50 border-2 border-blue-100 shadow-inner">
              <p className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight italic">
                &quot;Menjadi koperasi yang profesional, mandiri, dan
                mensejahterakan seluruh anggota melalui ekosistem ekonomi
                digital yang transparan.&quot;
              </p>
            </div>
          </div>

          {/* MISI */}
          <div>
            <h2 className="text-blue-600 font-black text-2xl uppercase mb-8 tracking-tighter text-center">
              Misi Kami
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                "Memberikan pelayanan prima di unit usaha Ritel dan Simpan Pinjam bagi seluruh anggota.",
                "Meningkatkan kompetensi dan keterampilan anggota melalui program pelatihan berkesinambungan.",
                "Mengelola keuangan koperasi secara transparan, akuntabel, dan berbasis teknologi.",
                "Membangun kemitraan strategis yang saling menguntungkan untuk pertumbuhan ekonomi bersama.",
              ].map((misi, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 rounded-3xl border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold shadow-lg">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
