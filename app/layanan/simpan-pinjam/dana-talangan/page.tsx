// Baris import Image sudah dihapus karena tidak terpakai
export default function DanaTalanganPage() {
  const plafon = ["100.000", "200.000", "300.000", "400.000", "500.000"];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-emerald-600 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Dana Talangan
        </h1>
        <p className="mt-4 text-emerald-100 uppercase text-xs tracking-[0.3em]">
          Solusi Cepat & Urgensi
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-8 border-emerald-500 pl-4">
              Proses Instan, Cair Saat Ini Juga
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Program dana talangan dirancang khusus untuk membantu anggota
              dalam menghadapi kebutuhan **urgensi** yang jumlahnya tidak
              terlalu besar. Prosesnya sangat mudah dan dana dapat langsung cair
              di tempat.
            </p>
            <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100">
              <h4 className="font-bold text-yellow-800 mb-2 uppercase text-xs tracking-wider">
                Syarat Pengajuan:
              </h4>
              <p className="text-sm text-yellow-700 leading-relaxed font-medium">
                Ambil **Form Kuning** di kantor koperasi, masukkan nominal yang
                diajukan, dan sertakan ID Card (Peneng) atau Kartu Koperasi yang
                masih berlaku.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <h3 className="text-center font-black text-gray-400 uppercase text-xs tracking-widest mb-8">
              Pilihan Plafon (Rupiah)
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {plafon.map((val) => (
                <div
                  key={val}
                  className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center border hover:border-emerald-500 transition-all group"
                >
                  <span className="text-gray-400 font-bold">IDR</span>
                  <span className="text-2xl font-black text-emerald-600 group-hover:scale-110 transition-transform">
                    {val},-
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
