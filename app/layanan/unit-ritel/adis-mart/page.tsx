import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  CheckCircle2,
  Wallet,
  BadgePercent,
  Info,
  ArrowLeft,
  Store,
  ArrowRight,
} from "lucide-react";

export default function AdisMartPage() {
  // Objek data (Dinamis-ready)
  const adisMartData = {
    title: "Adis Mart",
    tagline: "Modern Retail for Members",
    description:
      "Adis Mart merupakan unit bisnis ritel strategis yang dikelola secara profesional untuk menyediakan berbagai barang kebutuhan pokok karyawan sehari-hari, mulai dari sembako hingga peralatan rumah tangga berkualitas tinggi.",
    highlights: [
      {
        title: "Kebutuhan Pokok",
        desc: "Beras, Minyak, Gula, dan produk konsumsi lainnya.",
      },
      {
        title: "Elektronik & RT",
        desc: "Peralatan elektronik dan alat rumah tangga lengkap.",
      },
      {
        title: "Transparansi Harga",
        desc: "Layanan cek harga untuk kepastian sebelum membeli.",
      },
      {
        title: "Sistem Pembayaran",
        desc: "Mendukung Cash, Kredit, dan Autodebet Gaji.",
      },
    ],
    footerNote:
      "Pastikan selalu menggunakan kartu anggota koperasi setiap melakukan transaksi untuk akumulasi poin SHU tahunan Anda.",
  };

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden font-sans">
      {/* 1. HERO SECTION: Sync with "The Core" Design */}
      <section className="relative bg-[#020617] pt-32 pb-48 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/layanan/unit-ritel"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Units
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                <Store className="w-3 h-3" /> Retail Excellence
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-4">
                {adisMartData.title.split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  {adisMartData.title.split(" ")[1]}
                </span>
              </h1>
              <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-[0.5em] opacity-60">
                {adisMartData.tagline}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hidden lg:block">
              <p className="text-blue-400 font-black text-2xl tracking-tighter">
                OPEN DAILY
              </p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                Sesuai Jam Operasional Perusahaan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="max-w-7xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: TEXT & FEATURES */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                Solusi Belanja <span className="text-blue-600">Cerdas</span>{" "}
                Anggota
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic">
                &quot;{adisMartData.description}&quot;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {adisMartData.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-slate-900 font-black uppercase text-xs mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SHU Points Notification (Modern Style, No "TK" Yellow) */}
            <div className="relative group overflow-hidden bg-slate-900 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-amber-500/20">
                  <BadgePercent className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-amber-400 font-black uppercase text-[10px] tracking-[0.3em] mb-2">
                    Benefit Keanggotaan
                  </h4>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed font-semibold italic">
                    {adisMartData.footerNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DYNAMIC GALLERY */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
                <Image
                  src="/kopkar_adis.png"
                  alt="Retail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 mt-12 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
                <Image
                  src="/kopkar_adis.png"
                  alt="Retail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-600 p-10 rounded-[3rem] text-white text-center shadow-xl shadow-blue-600/20">
              <Wallet className="w-10 h-10 mx-auto mb-6 opacity-50" />
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                Cek Limit Belanja?
              </h3>
              <p className="text-blue-100 text-[11px] font-medium uppercase tracking-widest mb-8 leading-relaxed">
                Gunakan aplikasi SISKOP untuk memantau limit transaksi autodebet
                Anda secara real-time.
              </p>
              <button className="w-full py-4 bg-slate-950 hover:bg-white hover:text-slate-950 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest transition-all">
                Buka SISKOP Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER INFO */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <div className="h-px bg-slate-100 w-full mb-16"></div>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
          <Info className="w-4 h-4 text-slate-400" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Layanan Khusus Anggota Koperasi Karyawan PT Adis Dimension Footwear
          </span>
        </div>
      </section>
    </div>
  );
}
