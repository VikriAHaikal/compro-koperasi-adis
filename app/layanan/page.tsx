import Link from "next/link"; // Sekarang terpakai untuk tombol konsultasi

export default function LayananPage() {
  const listLayanan = [
    {
      title: "Simpanan Pokok & Wajib",
      desc: "Simpanan dasar sebagai bukti keanggotaan resmi yang dikelola secara transparan.",
      icon: "💳",
      detail: [
        "Simpanan Pokok dibayar sekali",
        "Simpanan Wajib rutin bulanan",
        "Bagi hasil tahunan (SHU)",
      ],
    },
    {
      title: "Pinjaman Multiguna",
      desc: "Solusi dana cepat untuk berbagai kebutuhan mendesak anggota.",
      icon: "💰",
      detail: [
        "Proses persetujuan cepat",
        "Bunga rendah & flat",
        "Tenor hingga 36 bulan",
      ],
    },
    {
      title: "Modal Usaha Mikro",
      desc: "Dukungan khusus bagi anggota yang ingin mengembangkan UMKM.",
      icon: "📈",
      detail: [
        "Pendampingan usaha",
        "Syarat mudah bagi pedagang",
        "Tanpa biaya admin tinggi",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold uppercase tracking-tight">
          Layanan Kami
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Produk finansial khusus untuk kesejahteraan anggota Koperasi Adis.
        </p>
      </div>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {listLayanan.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:border-blue-500 transition-all group"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>
              <ul className="space-y-3">
                {item.detail.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="text-blue-500 mr-2">✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION - Sekarang Pakai Link */}
      <section className="bg-blue-600 py-16 px-6 mb-20 rounded-[3rem] max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4 italic">
          Tertarik dengan Layanan Kami?
        </h2>
        <p className="mb-8 text-blue-100">
          Hubungi admin atau datang langsung ke kantor untuk pendaftaran.
        </p>
        <Link
          href="/kontak"
          className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl inline-block"
        >
          Konsultasi Gratis Sekarang
        </Link>
      </section>
    </div>
  );
}
