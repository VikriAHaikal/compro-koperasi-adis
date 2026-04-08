export default function PendidikanDasarPage() {
  const prinsip = [
    "Keanggotaan bersifat sukarela dan terbuka",
    "Pengelolaan dilakukan secara demokratis",
    "Pembagian SHU dilakukan secara adil sebanding jasa usaha masing-masing anggota",
    "Pemberian balas jasa yang terbatas terhadap modal",
    "Kemandirian",
    "Pendidikan perkoperasian",
    "Kerjasama antar koperasi",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic px-4">
          Pendidikan Dasar Koperasi
        </h1>
        <p className="mt-4 text-blue-300 uppercase text-xs tracking-[0.3em] px-4">
          Mengenal Akar & Tujuan Kita Bersama
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Intro & SISKOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase tracking-tight">
              Visi Pengurus
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 italic">
              &quot;Koperasi adalah milik anggota kopkar adis dan harus digunakan oleh para teman-teman anggota agar lebih bermanfaat dan mensejahterakan para anggota serta dapat memenuhi kebutuhan anggota.&quot;
            </p>
            <p className="text-gray-500 font-bold text-sm">
              — Bapak Pardiman (Wakil Ketua 2)
            </p>
          </div>

          <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>📱</span> SISKOP Online
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Koperasi Adis memberikan pelayanan maksimal melalui aplikasi SISKOP online agar para anggota terbantu untuk memonitoring jumlah tabungan, simpanan pokok, wajib, hingga sukarela secara real-time.
            </p>
            <div className="text-[10px] font-black uppercase tracking-widest bg-blue-700 w-fit px-4 py-2 rounded-full">
              Monitoring Transparan & Akurat
            </div>
          </div>
        </div>

        {/* Section 2: Prinsip Koperasi (UU No. 25/1992) */}
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-blue-900 font-black text-2xl uppercase mb-2">
              7 Prinsip Koperasi
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">
              Berdasarkan Undang-Undang Nomor 25 Tahun 1992
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {prinsip.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start border-b border-gray-50 pb-4 hover:bg-blue-50 transition-colors p-2 rounded-lg"
              >
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-700 font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-2xl text-center border border-dashed border-gray-200">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
              Narasumber: Bapak Taufiqurrohman (LAPENKOP Provinsi Banten)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}