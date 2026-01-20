import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen pt-20 pb-8 flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 gap-6 lg:gap-8 overflow-hidden">
      {/* Text Content */}
      <div className="flex flex-col justify-center gap-6 lg:gap-8 z-10 w-full lg:w-1/2 lg:flex-1 pt-6 lg:pt-0">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-bold tracking-[0.2em] text-xs md:text-sm uppercase animate-pulse">
            2026 Coleção
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase">
            O Único
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              Caminho
            </span>
          </h1>
        </div>

        <p className="text-gray-400 text-base md:text-xl max-w-md font-light leading-relaxed border-l-2 border-primary pl-4 md:pl-6">
          Caminhe com fé. Vista o propósito
        </p>

        <div className="flex items-center gap-4 md:gap-6 mt-2 lg:mt-4">
          <button className="group relative flex h-12 md:h-14 w-36 md:w-40 items-center justify-center overflow-hidden rounded-full bg-primary text-white font-bold tracking-wide transition-all hover:w-48 text-sm md:text-base">
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
            <span className="relative z-10 mr-2">Explore</span>
            <span className="material-symbols-outlined relative z-10 text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
          <button className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-gray-300 transition-colors">
            <span className="material-symbols-outlined text-xl md:text-2xl">play_circle</span>
            Veja o filme
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full lg:flex-1 aspect-[3/4] md:aspect-[4/5] lg:h-[80vh] lg:aspect-auto relative group rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-60"></div>
        <Image
          src="/images/hero-shirt.jpeg"
          alt="Camisa essencial da coleção TOW"
          fill
          className="object-cover object-top transition-transform duration-1000 scale-100 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
        />

        {/* Floating Spec Card */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 bg-black/80 backdrop-blur-xl p-3 md:p-4 rounded-xl border border-white/10 max-w-[160px] md:max-w-[200px]">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-1">Destaque</p>
          <p className="text-white font-bold text-sm md:text-base">Camisa Essencial Bege</p>
          <p className="text-primary mt-1 md:mt-2 font-mono text-xs md:text-sm">R$ 289,00</p>
        </div>
      </div>

    </header>
  );
}
