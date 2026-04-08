import Image from "next/image";
import {
  ShieldCheck,
  UserCheck,
  Users,
  LayoutDashboard,
  ArrowRightCircle,
} from "lucide-react";

// 1. Tipe Data (Clean & Type-Safe)
interface StaffMember {
  name: string;
  role: string;
  sub?: string;
  img: string;
}

interface ProfileCardProps extends StaffMember {
  size?: "md" | "lg";
  isLeader?: boolean;
}

// 2. Data Terpusat (Dynamic-Ready)
const boardData = {
  penasehat: [
    "John Muliyadi Wiria",
    "Margaret Vikta",
    "Rendradi",
    "Dedi Nuryadi",
    "Pardiman",
    "Y. Sulistyarini",
  ],
  pengawas: [
    {
      name: "Hari Nuraliman",
      role: "Ketua Pengawas",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    {
      name: "Atik Makrifah",
      role: "Anggota Pengawas",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "Suryadi",
      role: "Anggota Pengawas",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
  ],
  pengurusInti: [
    {
      name: "Maryono",
      role: "Ketua Koperasi",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
    {
      name: "Reza Leonardo",
      role: "Sekretaris",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Maimunah",
      role: "Bendahara",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
  ],
  wakilKetua: [
    {
      name: "Susanto",
      role: "Wakil Ketua 1",
      sub: "Bid. Pengembangan & Usaha",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      name: "Jumadi",
      role: "Wakil Ketua 2",
      sub: "Bid. SDM & Kesejahteraan",
      img: "https://images.unsplash.com/photo-1540560086473-975e247a8657?w=400",
    },
  ],
};

// 3. Komponen UI (ProfileCard dengan Efek Selaras)
const ProfileCard = ({
  name,
  role,
  sub,
  img,
  size = "md",
  isLeader = false,
}: ProfileCardProps) => (
  <div className="group flex flex-col items-center w-full">
    <div
      className={`relative ${size === "lg" ? "w-32 h-32 md:w-44 md:h-44" : "w-24 h-24 md:w-32 md:h-32"} mb-5`}
    >
      {/* Glow Effect khusus Leader */}
      {isLeader && (
        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-700"></div>
      )}
      {/* Ring Dekorasi (Spinning on Hover) */}
      <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin-slow opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Foto Frame */}
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative z-10 bg-slate-100">
        <Image
          src={img}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
    </div>

    <div className="text-center px-4">
      <h4 className="text-blue-600 font-black uppercase text-[8px] md:text-[10px] tracking-[0.2em] mb-1.5">
        {role}
      </h4>
      <p
        className={`font-black text-slate-900 uppercase leading-none tracking-tighter ${size === "lg" ? "text-lg md:text-xl" : "text-sm"}`}
      >
        {name}
      </p>
      {sub && (
        <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-tight italic border-t border-slate-100 pt-1">
          {sub}
        </p>
      )}
    </div>
  </div>
);

export default function StrukturOrganisasiPage() {
  return (
    <div className="bg-white min-h-screen pb-32 overflow-hidden">
      {/* 1. HERO SECTION (Sync with Visi & Sejarah) */}
      <section className="relative bg-slate-950 pt-32 pb-48 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <LayoutDashboard className="w-4 h-4" />
            Executive Leadership
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Struktur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Organisasi
            </span>
          </h1>
        </div>
      </section>

      {/* 2. PENGAWAS & PENASEHAT SECTION (Floating) */}
      <section className="max-w-6xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Badan Pengawas */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100">
            <div className="flex items-center gap-3 mb-10">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2 className="font-black uppercase text-xs tracking-widest text-slate-400 italic">
                Badan Pengawas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardData.pengawas.map((p, i) => (
                <ProfileCard key={i} {...p} />
              ))}
            </div>
          </div>

          {/* Dewan Penasehat */}
          <div className="lg:col-span-4 bg-slate-900 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            <h2 className="relative z-10 font-black uppercase text-xs tracking-widest text-blue-400 mb-8 italic text-center md:text-left">
              Dewan Penasehat
            </h2>
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-1 gap-4">
              {boardData.penasehat.map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight text-slate-300 group-hover:text-white transition-colors"
                >
                  <ArrowRightCircle className="w-3 h-3 text-blue-500" /> {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. HIERARKI PENGURUS (The Tree) */}
        <div className="space-y-24">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 text-center">
              Executive Board
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic text-center">
              Dewan Pengurus
            </h3>
          </div>

          {/* KETUA */}
          <div className="flex flex-col items-center">
            <ProfileCard
              {...boardData.pengurusInti[0]}
              size="lg"
              isLeader={true}
            />
            <div className="h-16 w-px bg-gradient-to-b from-blue-600 to-transparent my-8 hidden md:block"></div>
          </div>

          {/* SEKRETARIS & BENDAHARA */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-48 relative">
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-px bg-slate-100 -z-10"></div>
              {boardData.pengurusInti.slice(1).map((p, i) => (
                <ProfileCard key={i} {...p} />
              ))}
            </div>
          </div>

          {/* WAKIL KETUA */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-12 w-full max-w-4xl px-10">
              <div className="h-px bg-slate-100 flex-grow"></div>
              <Users className="w-5 h-5 text-slate-200" />
              <div className="h-px bg-slate-100 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full md:w-auto">
              {boardData.wakilKetua.map((p, i) => (
                <ProfileCard key={i} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* 4. FOOTER QUOTE */}
        <div className="mt-32 text-center border-t border-slate-50 pt-16">
          <div className="inline-flex items-center gap-4 px-8 py-3 bg-slate-950 rounded-full shadow-2xl">
            <UserCheck className="w-4 h-4 text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-100">
              Professional • Transparan • Modern
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
