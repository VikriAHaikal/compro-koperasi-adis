import Image from "next/image";
import Link from "next/link";
import {
  Tag,
  MapPin,
  Calendar,
  ShoppingBag,
  ArrowLeft,
  Sparkles,
  Package,
  Bike,
  Tv,
  HeartPulse,
} from "lucide-react";

export default function BazarPage() {
  const bazarData = {
    title: "Bazar Tahunan",
    frequency: "Diadakan Setahun 3 Kali",
    description:
      "Program Bazar Tahunan merupakan salah satu agenda yang paling dinantikan. Kami menghadirkan berbagai vendor ternama untuk menyediakan produk berkualitas dengan harga yang jauh lebih terjangkau dibandingkan pasar umum.",
    locations: ["Kantin Adis 1", "Kantin Adis 2"],
    categories: [
      { name: "Rumah Tangga", icon: <Package className="w-5 h-5" /> },
      { name: "Elektronik", icon: <Tv className="w-5 h-5" /> },
      { name: "Kendaraan", icon: <Bike className="w-5 h-5" /> },
      { name: "Kesehatan", icon: <HeartPulse className="w-5 h-5" /> },
    ],
    cta: "Antusiasme karyawan yang tinggi menjadi motivasi kami untuk terus menghadirkan vendor-vendor terbaik setiap periodenya.",
  };

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Professional Navy */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/unit-ritel"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Units
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                <Calendar className="w-3 h-3" /> Recurring Event
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-4">
                {bazarData.title.split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  {bazarData.title.split(" ")[1]}
                </span>
              </h1>
              <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-[0.5em] opacity-60">
                {bazarData.frequency}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hidden lg:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
                <p className="text-white font-black text-sm tracking-widest uppercase">
                  Upcoming Period
                </p>
              </div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                Pantau Terus Pengumuman di SISKOP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: TEXT & CATEGORIES */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">
                Kemeriahan <span className="text-amber-500">&</span> Antusiasme
                Anggota
              </h2>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-amber-400 pl-8 mb-12">
                &quot;{bazarData.description}&quot;
              </p>

              {/* Items Category Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {bazarData.categories.map((cat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-slate-900 transition-all duration-500"
                  >
                    <div className="text-amber-500 mb-3 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-white">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-black uppercase tracking-widest">
                    Titik Lokasi
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {bazarData.locations.map((loc) => (
                    <div
                      key={loc}
                      className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white/10 transition-all"
                    >
                      <span className="text-blue-400 font-black italic">#</span>
                      <span className="font-bold uppercase text-xs tracking-[0.2em]">
                        {loc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: GALLERY & SOCIAL PROOF */}
          <div className="lg:col-span-5 space-y-8">
            <div className="columns-2 gap-4 space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/kopkar_adis.png"
                  alt="Bazar 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-duration-700"
                />
              </div>
              <div className="relative h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/kopkar_adis.png"
                  alt="Bazar 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-duration-700"
                />
              </div>
              <div className="relative h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/kopkar_adis.png"
                  alt="Bazar 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-duration-700"
                />
              </div>
            </div>

            <div className="p-10 bg-amber-500 rounded-[3rem] text-white shadow-xl shadow-amber-500/20 text-center">
              <Sparkles className="w-10 h-10 mx-auto mb-6 opacity-40 animate-pulse" />
              <p className="text-sm md:text-base font-bold italic leading-relaxed">
                {bazarData.cta}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER BRANDING */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="h-px bg-slate-100 w-full mb-16"></div>
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em]">
          Official Business Unit of Koperasi Karyawan PT Adis Dimension Footwear
        </p>
      </section>
    </div>
  );
}
