import Link from "next/link";

export default function SimpanPinjamHub() {
  const menus = [
    {
      title: "Dana Talangan",
      desc: "Solusi dana cepat untuk kebutuhan mendesak/urgensi anggota.",
      link: "/layanan/simpan-pinjam/dana-talangan",
      icon: "💸",
      color: "border-emerald-500",
    },
    {
      title: "Pinjaman Regular",
      desc: "Pinjaman berdasarkan golongan dan masa kerja (3 - 12 Juta).",
      link: "/layanan/simpan-pinjam/pinjaman-regular",
      icon: "🏦",
      color: "border-blue-500",
    },
    {
      title: "Pinjaman Multiguna",
      desc: "Pinjaman plafon besar untuk pendidikan, renovasi, dan lainnya.",
      link: "/layanan/simpan-pinjam/pinjaman-multi-guna",
      icon: "💎",
      color: "border-indigo-500",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-blue-600 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
          Unit Simpan Pinjam
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto px-6">
          Membantu anggota dalam memenuhi kebutuhan keuangan melalui berbagai
          pilihan layanan pinjaman yang transparan dan menyejahterakan.
        </p>
      </section>

      <section className="max-w-6xl mx-auto -mt-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menus.map((item) => (
            <Link href={item.link} key={item.title} className="group">
              <div
                className={`bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 ${item.color} hover:-translate-y-3 transition-all duration-300 h-full flex flex-col items-center text-center`}
              >
                <span className="text-5xl mb-6">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <span className="mt-auto text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:underline">
                  Lihat Detail →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
