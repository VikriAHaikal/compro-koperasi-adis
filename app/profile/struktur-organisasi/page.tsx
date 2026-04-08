export default function StrukturOrganisasiPage() {
  // Logic: Kelompokkan data agar mudah di-maintenance
  const pengawas = [
    { jabatan: "Ketua Pengawas", nama: "NAMA KETUA PENGAWAS", icon: "🧐" },
    { jabatan: "Anggota Pengawas", nama: "NAMA PENGAWAS 1", icon: "⚖️" },
    { jabatan: "Anggota Pengawas", nama: "NAMA PENGAWAS 2", icon: "⚖️" },
  ];

  const pengurusInti = [
    { jabatan: "Ketua", nama: "NAMA KETUA", icon: "👤" },
    { jabatan: "Wakil Ketua 1", nama: "NAMA WAKIL 1", icon: "👤" },
    { jabatan: "Wakil Ketua 2", nama: "Bpk. Pardiman", icon: "👤" },
  ];

  const operasional = [
    { jabatan: "Sekretaris", nama: "NAMA SEKRETARIS", icon: "📝" },
    { jabatan: "Bendahara", nama: "NAMA BENDAHARA", icon: "💰" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO HEADER */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Struktur Organisasi
        </h1>
        <p className="mt-4 text-blue-300 uppercase text-[10px] font-bold tracking-[0.4em]">
          Sinergi Pengelola Amanah Anggota
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-12">
        {/* 2. LEVEL 1: RAPAT ANGGOTA (KEKUASAAN TERTINGGI) */}
        <div className="flex justify-center mb-16">
          <div className="bg-blue-600 text-white p-10 rounded-[3rem] text-center shadow-2xl border-4 border-white w-full md:w-2/3 lg:w-1/2 group hover:scale-105 transition-transform duration-500">
            <span className="text-4xl mb-4 block">🏛️</span>
            <h2 className="text-2xl font-black uppercase tracking-widest leading-none">
              Rapat Anggota
            </h2>
            <div className="h-1 w-12 bg-white/30 mx-auto my-4 rounded-full"></div>
            <p className="text-blue-100 text-[10px] uppercase font-black tracking-widest italic">
              Pemegang Kekuasaan Tertinggi Koperasi
            </p>
          </div>
        </div>

        {/* 3. LEVEL 2: PENGAWAS & PENGURUS INTI */}
        <div className="space-y-20">
          {/* DEWAN PENGAWAS */}
          <div>
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-px bg-gray-300 flex-grow max-w-[100px]"></div>
              <h3 className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] italic">
                Dewan Pengawas
              </h3>
              <div className="h-px bg-gray-300 flex-grow max-w-[100px]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pengawas.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                    {p.icon}
                  </div>
                  <h4 className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">
                    {p.jabatan}
                  </h4>
                  <p className="text-gray-900 font-bold text-lg leading-tight uppercase tracking-tighter">
                    {p.nama}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DEWAN PENGURUS INTI */}
          <div>
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-px bg-gray-300 flex-grow max-w-[100px]"></div>
              <h3 className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] italic">
                Dewan Pengurus Inti
              </h3>
              <div className="h-px bg-gray-300 flex-grow max-w-[100px]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pengurusInti.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                    {p.icon}
                  </div>
                  <h4 className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">
                    {p.jabatan}
                  </h4>
                  <p className="text-gray-900 font-bold text-lg leading-tight uppercase tracking-tighter">
                    {p.nama}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SEKRETARIS & BENDAHARA */}
          <div className="flex flex-wrap justify-center gap-6">
            {operasional.map((p, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 group w-full md:w-[45%]"
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                  {p.icon}
                </div>
                <h4 className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">
                  {p.jabatan}
                </h4>
                <p className="text-gray-900 font-bold text-lg leading-tight uppercase tracking-tighter">
                  {p.nama}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER INFO */}
        <div className="mt-24 p-12 bg-white rounded-[3.5rem] text-center border border-gray-100 shadow-inner">
          <div className="max-w-2xl mx-auto">
            <h5 className="text-gray-900 font-black uppercase text-sm mb-4 italic">
              Bekerja Profesional & Amanah
            </h5>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Struktur organisasi Kopkar ADIS disusun untuk memastikan setiap
              layanan mulai dari Unit Ritel hingga Unit Simpan Pinjam (USP)
              berjalan dengan pengawasan ketat demi kemaslahatan seluruh
              anggota.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Akuntabel
              </span>
              <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Transparan
              </span>
              <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Modern
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
