export default function IntroSection() {
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-b border-white/10 pb-12">
        <div className="md:col-span-7">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            NÃO SEGUIMOS TENDÊNCIAS.
            <br />
            <span className="text-gray-500">TRILHAMOS O ÚNICO CAMINHO.</span>
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-gray-400 text-lg leading-relaxed">
            Todo corte é intencional. Todo tecido é selecionado. Peças que transcendem a moda
            passageira para materializar sua fé em um manifesto visual de sofisticação e graça.
          </p>
        </div>
      </div>
    </section>
  );
}
