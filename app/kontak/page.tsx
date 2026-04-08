export default function KontakPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative bg-blue-600 py-24 md:py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-blue-100 uppercase text-[10px] md:text-xs font-semibold tracking-[0.4em] max-w-xl mx-auto">
            Layanan Cepat & Transparan Untuk Seluruh Anggota Kopkar ADIS
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 2. KOLOM INFO KONTAK */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group">
              <h3 className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-10">
                Informasi Kantor
              </h3>

              <ul className="space-y-10">
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[10px] tracking-widest mb-1">
                      Alamat Utama
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      24, Jl. Raya Serang No.Km, Balaraja,
                      <br />
                      Tangerang, Banten 15610.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[10px] tracking-widest mb-1">
                      Telepon & WA
                    </h4>
                    <p className="text-blue-600 font-bold text-xl leading-tight">
                      (021) 595 1660
                    </p>
                    <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-tighter">
                      CS: 0812-3456-7890
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[10px] tracking-widest mb-1">
                      Email Support
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">
                      info@kopkaradis.co.id
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* JAM OPERASIONAL CARD */}
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-8">
                Jam Layanan
              </h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Senin - Jumat
                  </span>
                  <span className="text-sm font-bold">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Sabtu - Minggu
                  </span>
                  <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase">
                    Tutup
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. KOLOM FORM PESAN */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 h-full">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">
                  Kirim Pesan
                </h2>
                <p className="text-slate-400 text-xs mt-2 uppercase font-semibold tracking-widest">
                  Respons dalam 1x24 Jam Kerja
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Vikri Haikal"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium outline-none transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                      NIK / No. Anggota
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 123456"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium outline-none transition-all duration-300 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                    Subjek Layanan
                  </label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 py-4 text-sm font-medium outline-none transition-all duration-300 appearance-none cursor-pointer shadow-sm">
                      <option>Unit Simpan Pinjam (USP)</option>
                      <option>Unit Ritel (Adis Mart)</option>
                      <option>Pendidikan & Pelatihan</option>
                      <option>Lainnya</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Apa yang bisa kami bantu hari ini?"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-3xl px-6 py-5 text-sm font-medium outline-none transition-all duration-300 resize-none shadow-sm"
                  ></textarea>
                </div>

                <button className="group w-full bg-blue-600 text-white font-bold py-6 rounded-[2rem] uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.01] transition-all duration-500">
                  Kirim Pesan Sekarang 🚀
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4. GOOGLE MAPS SECTION (Grayscale Removed) */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-extrabold text-xl uppercase tracking-tight text-slate-800">
              Lokasi Kantor Kami
            </h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="w-full h-[450px] rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.732328135!2d106.4526645!3d-6.1953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42007823f66859%3A0xc078816f1c7d212!2sPT.%20Adis%20Dimension%20Footwear!5e0!3m2!1sid!2sid!4v1712544567890!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
