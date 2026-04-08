import { 
  Target, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Handshake, 
  Heart,
  ArrowRightCircle
} from "lucide-react";

// 1. Definisikan Interface untuk Type Safety
interface MisiItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export default function VisiMisiPage() {
  const misiList: MisiItem[] = [
    {
      title: "Pelayanan Terbaik",
      desc: "Memberikan pelayanan prima sesuai jati diri koperasi untuk kepuasan anggota.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Pekerja Profesional",
      desc: "Pengelolaan transparan dan akuntabel oleh tenaga ahli yang kompeten.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
    {
      title: "Integrasi Sistem",
      desc: "Digitalisasi menyeluruh untuk kemudahan akses dan akurasi data.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
    {
      title: "Hubungan Kerjasama",
      desc: "Membangun sinergi strategis dengan partner perusahaan dan pihak eksternal.",
      icon: <Handshake className="w-6 h-6" />,
      color: "bg-amber-500",
    },
    {
      title: "Lingkungan Sosial",
      desc: "Kontribusi nyata dalam meningkatkan kesejahteraan sosial di sekitar.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-rose-500",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      {/* 1. DYNAMIC HERO SECTION */}
      <section className="relative bg-slate-950 pt-32 pb-48 text-white text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <ArrowRightCircle className="w-4 h-4" />
            Our Core Philosophy
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Visi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Misi</span>
          </h1>
        </div>
      </section>

      {/* 2. THE VISION CARD (Floating) */}
      <section className="max-w-5xl mx-auto -mt-24 px-6 relative z-20">
        <div className="group bg-white p-8 md:p-20 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
          {/* Decorative Quote Mark */}
          <div className="absolute top-10 left-10 text-slate-50 text-9xl font-black pointer-events-none">“</div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-200 mb-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-6">Visi Utama</h2>
            <p className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter italic uppercase">
              &quot;Menjadi Koperasi yang <span className="text-blue-600">modern</span>, transparan, terpercaya dan partner perusahaan dalam meningkatkan <span className="underline decoration-blue-200 underline-offset-8">kesejahteraan Anggota</span>.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE MISSION GRID (Modern & Clean) */}
      <section className="max-w-6xl mx-auto mt-32 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 text-center md:text-left">Misi Kami</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic text-center md:text-left">
              Langkah <span className="text-slate-400">Strategis</span>
            </h3>
          </div>
          <p className="text-slate-500 text-sm font-medium max-w-xs text-center md:text-right hidden md:block">
            Komitmen kami untuk terus tumbuh dan memberikan dampak positif bagi seluruh ekosistem koperasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {misiList.map((misi, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`${misi.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-current/20 text-white group-hover:scale-110 transition-transform duration-500`}>
                {misi.icon}
              </div>
              <h4 className="text-slate-900 font-black uppercase text-lg mb-3 tracking-tight">
                {misi.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {misi.desc}
              </p>
              
              {/* Number Badge */}
              <div className="absolute top-10 right-10 text-slate-200 font-black text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>
            </div>
          ))}

          {/* Special Call to Action Card */}
          <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-300">
             <Heart className="w-12 h-12 mb-6 animate-pulse" />
             <p className="font-black uppercase text-xl italic tracking-tighter leading-tight">
               Bersama Anggota, <br />Membangun Masa Depan.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}