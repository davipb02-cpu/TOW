"use client";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-black/5 dark:border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-primary group-hover:rotate-180 transition-transform duration-500">
            all_inclusive
          </span>
          <span className="text-xl font-bold tracking-tight uppercase">TOW</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#collections"
          >
            Coleções
          </a>
          <a
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#about"
          >
            Sobre
          </a>
          <a
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#contact"
          >
            Contato
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button aria-label="Cart" className="p-2 hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-0 size-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
