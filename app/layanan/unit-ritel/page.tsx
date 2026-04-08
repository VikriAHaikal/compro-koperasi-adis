import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Store,
  Tag,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShoppingBasket,
} from "lucide-react";

export default function UnitRitelLanding() {
  const retailUnits = [
    {
      title: "Adis Mart",
      slug: "adis-mart",
      desc: "Minimarket modern yang menyediakan kebutuhan pokok anggota dengan sistem harga kompetitif dan skema pembayaran fleksibel.",
      features: ["Potong Gaji", "Harga Anggota", "Produk Lengkap"],
      icon: <Store className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80",
    },
    {
      title: "Bazar Tahunan",
      slug: "bazar",
      desc: "Event belanja rutin sebagai bentuk apresiasi bagi anggota, menghadirkan berbagai vendor ternama dengan promo eksklusif.",
      features: ["Voucher Belanja", "Promo Vendor", "Event Rutin"],
      icon: <Tag className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Executive Style */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden">
        {/* Patterns & Glow */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <ShoppingBag className="w-4 h-4" /> Commercial Division
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Unit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Ritel
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.3em] leading-relaxed opacity-70">
            Sektor perdagangan Kopkar ADIS yang berfokus pada penyediaan
            kebutuhan konsumsi berkualitas bagi seluruh anggota.
          </p>
        </div>
      </section>

      {/* 2. UNITS GRID: Clean & Gallery Style */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {retailUnits.map((unit, index) => (
            <div
              key={index}
              className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                {/* Image Area */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-8 left-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-2xl z-20">
                    {unit.icon}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 flex flex-col flex-grow">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
                    {unit.title}
                  </h2>

                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium italic">
                    &quot;{unit.desc}&quot;
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {unit.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        <span className="text-[10px] font-black uppercase text-slate-600 tracking-wider">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Link href={`/layanan/unit-ritel/${unit.slug}`}>
                      <button className="w-full md:w-fit px-8 py-4 bg-slate-950 hover:bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg">
                        Explore Unit <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INFO SECTION: Professional Commitment */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center border-t border-slate-100 pt-20">
        <div className="bg-slate-50 p-10 md:p-16 rounded-[4rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 blur-3xl rounded-full opacity-50"></div>
          <ShoppingBasket className="w-12 h-12 text-slate-200 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Komitmen Harga & <span className="text-blue-600">Kualitas</span>
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto italic font-medium">
            Kami memastikan setiap produk yang dikelola melalui Unit Ritel
            memiliki standar kualitas tinggi dengan margin harga yang tetap
            berpihak pada kesejahteraan anggota.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm border border-slate-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Verified Partnership with PT Adis Dimension Footwear
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
