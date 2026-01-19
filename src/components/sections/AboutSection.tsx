export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="sticky top-32 self-start">
          <h2 className="text-[120px] leading-[0.8] font-black opacity-10 select-none text-white absolute -top-10 -left-10 z-0">
            01
          </h2>
          <h2 className="text-5xl font-bold uppercase tracking-tighter relative z-10 mb-8">
            A Visão
          </h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <div
            className="aspect-square bg-cover bg-center rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80")`,
            }}
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <p className="text-2xl font-light text-white leading-relaxed">
            O estilo é a linguagem silenciosa da identidade. Nosso conceito nasce da subtração do
            ego para dar lugar à graça. Peças que não gritam, mas sussurram sofisticação e
            princípios inegociáveis.
          </p>
          <div className="flex flex-col gap-6 text-gray-400">
            <p>
              A The Only Way surgiu da necessidade de alinhar o vestir ao viver. Cada fio é
              escolhido rigorosamente para oferecer conforto e durabilidade, materializando a
              jornada daquele que anda na Verdade e na Vida.
            </p>
            <p>
              Cada coleção é um capítulo da maior história já contada. Roupas feitas para durar,
              projetadas para inspirar e criadas para apontar para o único lugar que importa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-white">Limitada</h4>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Produção Exclusiva</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">Eterno</h4>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Design Atemporal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
