export default function HeroSection() {
  return (
    <header className="relative min-h-screen pt-20 flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto px-6 gap-8 overflow-hidden">
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center gap-8 z-10 w-full lg:w-1/2 pt-10 lg:pt-0">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase animate-pulse">
            2026 Coleção
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase">
            O Único
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              Caminho
            </span>
          </h1>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed border-l-2 border-primary pl-6">
          Caminhe com fé. 
          Vista o propósito
          
        </p>

        <div className="flex items-center gap-6 mt-4">
          <button className="group relative flex h-14 w-40 items-center justify-center overflow-hidden rounded-full bg-primary text-white font-bold tracking-wide transition-all hover:w-48">
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
            <span className="relative z-10 mr-2">Explore</span>
            <span className="material-symbols-outlined relative z-10 text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-300 transition-colors">
            <span className="material-symbols-outlined text-2xl">play_circle</span>
            Veja o filme
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 w-full h-[50vh] lg:h-[80vh] relative group rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-60"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-100 group-hover:scale-105"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxEJCmb_-3HhWzTjYFIJa6Z_oJlpiUvAf_FNvYqVz1i_Om7YwXRdAhulf2JmX9QQATucUJB-PflrFKzQ19w4CUypd3unqDIeZJJpgPexAooYVDUJsokjTP8Pn371PI13niL-8jSap0wWF_Eoa8dechLOKO2m8SrIgFarnK64Ay4L1n4RbaBVvqYe4pJJ-cAjEEHCx10NJb-WjoyJuNyYTlEwjq5R_7UX0cfs9vXz9_6CM_iKjkdUFq2E6sEngX3UmVfPA7kd3cLfub")`,
          }}
        />

        {/* Floating Spec Card */}
        <div className="absolute bottom-8 right-8 z-20 bg-black/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 max-w-[200px] hidden md:block">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Featured</p>
          <p className="text-white font-bold">Obsidian Lounge Chair</p>
          <p className="text-primary mt-2 font-mono text-sm">$2,400.00</p>
        </div>
      </div>

    </header>
  );
}
