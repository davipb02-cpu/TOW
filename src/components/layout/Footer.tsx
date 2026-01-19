export default function Footer() {
  return (
    <footer className="bg-background-dark py-12 px-6 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">all_inclusive</span>
            <span className="text-lg font-bold uppercase tracking-tight text-white">TOW</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 The Only Way.
            <br />
            Todos direitos reservados.
            <br />
            por Sling AI
          </div>
        </div>

        <div className="flex gap-8">
          <a
            className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold"
            href="#"
          >
            X
          </a>
          <a
            className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold"
            href="#"
          >
            Pinterest
          </a>
        </div>

        <div className="flex flex-col items-end gap-2">
          <a className="text-gray-500 hover:text-primary transition-colors text-sm" href="#">
            Política de Privacidade
          </a>
          <a className="text-gray-500 hover:text-primary transition-colors text-sm" href="#">
            Termos de Serviço
          </a>
        </div>
      </div>
    </footer>
  );
}
