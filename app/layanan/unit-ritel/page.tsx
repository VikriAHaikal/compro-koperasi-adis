import Link from "next/link"; // Import standar
import Image from "next/image";

export default function UnitRitelLanding() {
  const retailUnits = [
    {
      title: "Adis Mart",
      slug: "adis-mart",
      desc: "Toko retail modern yang menyediakan kebutuhan pokok anggota.",
      image: "/kopkar_adis.png",
      color: "bg-blue-600",
      accent: "text-blue-100",
    },
    {
      title: "Bazar Tahunan",
      slug: "bazar",
      desc: "Event belanja rutin 3 kali setahun dengan harga terjangkau.",
      image: "/kopkar_adis.png",
      color: "bg-orange-500",
      accent: "text-orange-100",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0f172a] py-24 text-center text-white px-6">
        <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">
          Sektor Perdagangan
        </span>
        <h1 className="text-5xl font-black mt-4 uppercase tracking-tighter italic">
          Unit Bisnis Ritel
        </h1>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {retailUnits.map((unit) => (
            <div
              key={unit.slug}
              className="group relative h-[500px] overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <Image
                src={unit.image}
                alt={unit.title}
                fill
                className="object-cover brightness-50 group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-12 text-white bg-gradient-to-t from-black/80">
                <h2 className="text-4xl font-black uppercase mb-4 italic">
                  {unit.title}
                </h2>
                <p className={`mb-8 text-lg ${unit.accent}`}>{unit.desc}</p>
                <Link
                  href={`/layanan/unit-ritel/${unit.slug}`}
                  className={`${unit.color} w-fit px-8 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 transition shadow-lg`}
                >
                  Lihat Detail Unit →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
