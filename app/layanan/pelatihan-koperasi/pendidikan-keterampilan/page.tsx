export default function PendidikanKeterampilanPage() {
  const skills = [
    { name: "Pembuatan Bakmi & Bakso", icon: "🍜" },
    { name: "Pembuatan Kue & Bakery", icon: "🥐" },
    { name: "Tata Rias & Kecantikan", icon: "💄" },
    { name: "Wirausaha Kreatif", icon: "💡" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-500 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest italic px-4">
          Pendidikan Keterampilan
        </h1>
        <p className="mt-4 text-orange-100 uppercase text-xs tracking-[0.3em] px-4">
          Membangun Jiwa Wirausaha Anggota
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-8 border-orange-500 pl-4 uppercase">
              Lebih dari Sekadar Anggota
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Kopkar ADIS memberikan pelatihan keterampilan seperti pembuatan
              bakmi, bakso, kue, tata rias, dan lainnya agar anggota memiliki
              jiwa wirausaha dengan keahlian yang mumpuni.
            </p>
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 italic text-orange-800 shadow-inner">
              &quot;Wujud kepedulian koperasi agar para anggota memiliki
              kemandirian ekonomi melalui keterampilan keahlian yang diberikan
              oleh Kopkar ADIS.&quot;
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((item) => (
              <div
                key={item.name}
                className="bg-white p-8 rounded-[2rem] shadow-md border border-gray-100 text-center hover:shadow-2xl hover:border-orange-200 transition-all hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-tighter">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
