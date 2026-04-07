export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Halaman */}
      <div className="bg-blue-600 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold">Hubungi Kami</h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Punya pertanyaan seputar layanan kami? Tim kami siap membantu Anda.
        </p>
      </div>

      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info Kontak */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Informasi Kontak
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Alamat Kantor</h3>
                <p className="text-gray-600 text-sm">
                  Jl. Raya Industri No. 123, Tangerang, Banten
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telepon / WA</h3>
                <p className="text-gray-600 text-sm">+62 21 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">
                📧
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Resmi</h3>
                <p className="text-gray-600 text-sm">info@koperasiadis.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulir Pesan */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                placeholder="Masukkan nama Anda..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                placeholder="nama@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                placeholder="Tuliskan pesan Anda di sini..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Kirim Pesan Sekarang
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
