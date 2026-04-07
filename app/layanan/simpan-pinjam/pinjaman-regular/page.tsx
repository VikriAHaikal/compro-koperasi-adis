export default function PinjamanRegularPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-700 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Pinjaman Regular
        </h1>
        <p className="mt-4 text-blue-100 uppercase text-xs tracking-[0.3em]">
          Plafond 3 s.d 12 Juta Rupiah
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Kolom Info Utama */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase">
                Deskripsi Layanan
              </h2>
              <p className="text-blue-800 leading-relaxed font-medium">
                Diberikan untuk membantu kebutuhan finansial anggota yang
                disesuaikan dengan golongan dan masa kerja. Pencairan dilakukan
                secara rutin satu minggu sekali.
              </p>
              <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg text-sm">
                ⬇️ Download Tabel Pinjaman Regular
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="font-black text-gray-400 uppercase text-xs tracking-widest">
                Syarat Administrasi:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border-2 border-dashed border-gray-200 rounded-2xl font-bold text-gray-700">
                  ✓ Fotokopi KTP Berlaku
                </div>
                <div className="p-5 border-2 border-dashed border-gray-200 rounded-2xl font-bold text-gray-700">
                  ✓ Fotokopi Kartu Koperasi
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Catatan Pelunasan */}
          <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center">
            <h3 className="text-orange-400 font-bold mb-4 uppercase tracking-tighter">
              Ketentuan Pelunasan Cash:
            </h3>
            <ul className="space-y-6 text-sm italic">
              <li>
                <p className="text-gray-400 not-italic uppercase text-[10px] mb-1">
                  Sudah 1/2 Masa Angsuran:
                </p>
                Sisa Pokok + Bunga 1 Bulan
              </li>
              <li className="pt-4 border-t border-gray-800">
                <p className="text-gray-400 not-italic uppercase text-[10px] mb-1">
                  Belum 1/2 Masa Angsuran:
                </p>
                Sisa Pokok + Bunga 1 Bulan + (3% x Sisa Pokok)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
