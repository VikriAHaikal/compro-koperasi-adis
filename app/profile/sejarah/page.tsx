export default function SejarahPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-800 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic">
          Sejarah Kami
        </h1>
        <p className="mt-4 text-blue-200 uppercase text-xs tracking-[0.3em]">
          Perjalanan Membangun Kesejahteraan Bersama
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="prose prose-blue max-w-none space-y-8 text-gray-700 leading-relaxed text-lg">
          <p>
            Koperasi Konsumen Karyawan PT Adis Dimension Footwear (Kopkar ADIS)
            didirikan atas semangat kekeluargaan dan keinginan luhur untuk
            meningkatkan kesejahteraan karyawan di lingkungan perusahaan.
          </p>
          <div className="bg-gray-50 p-8 border-l-8 border-blue-600 rounded-r-3xl italic">
            &quot;Berawal dari sebuah inisiatif sederhana, kini Kopkar ADIS
            telah bertransformasi menjadi pilar ekonomi bagi ribuan
            anggota.&quot;
          </div>
          <p>
            Selama lebih dari dua dekade, kami terus berinovasi mengikuti
            perkembangan zaman. Dimulai dari unit simpan pinjam konvensional,
            kini kami telah merambah ke sektor ritel modern, penyediaan
            kebutuhan industri, hingga pemberdayaan anggota melalui pelatihan
            kewirausahaan.
          </p>
          <p>
            Kepercayaan anggota adalah modal utama kami. Dengan dukungan
            teknologi digital seperti sistem SISKOP, kami berkomitmen untuk
            menjaga warisan transparansi dan kejujuran yang telah diletakkan
            oleh para pendiri koperasi.
          </p>
        </div>
      </section>
    </div>
  );
}
