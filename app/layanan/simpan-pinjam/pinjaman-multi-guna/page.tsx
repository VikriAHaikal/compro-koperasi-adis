export default function PinjamanMultigunaPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-indigo-800 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Pinjaman Multiguna
        </h1>
        <p className="mt-4 text-indigo-100 uppercase text-xs tracking-[0.3em]">
          Hingga 35 Juta Rupiah
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 leading-relaxed italic max-w-3xl mx-auto">
            &quot;Pinjaman dengan nominal terbesar untuk solusi pendidikan,
            perbaikan rumah, dan masa depan keluarga Anda.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Plafon */}
          <div className="bg-white p-10 rounded-[3rem] border-4 border-indigo-50 shadow-sm text-center">
            <h3 className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
              Rentang Pinjaman
            </h3>
            <div className="text-4xl font-black text-gray-900 leading-tight">
              6 Juta{" "}
              <span className="text-lg text-gray-400 font-normal">s.d</span> 35
              Juta
            </div>
            <button className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition">
              Download Tabel Multiguna
            </button>
          </div>

          {/* Card Info */}
          <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-6">
            <div className="flex gap-4 items-start italic">
              <span className="text-3xl">🏠</span>
              <p className="text-sm">
                Bisa digunakan untuk renovasi atau DP rumah.
              </p>
            </div>
            <div className="flex gap-4 items-start italic">
              <span className="text-3xl">🎓</span>
              <p className="text-sm">
                Solusi pembiayaan pendidikan putra-putri anggota.
              </p>
            </div>
            <div className="pt-6 border-t border-indigo-700">
              <p className="text-[10px] uppercase font-bold text-indigo-400 mb-2">
                Catatan:
              </p>
              <p className="text-xs italic leading-relaxed">
                Form dapat diambil langsung di kantor dengan menunjukkan ID Card
                (Peneng).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
