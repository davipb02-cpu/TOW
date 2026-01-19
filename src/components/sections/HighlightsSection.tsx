const highlights = [
  {
    id: 1,
    title: "Coleção Essenciais",
    description: "Peças básicas que nunca saem de moda.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    tag: "Em Alta",
  },
  {
    id: 2,
    title: "Coleção Neutros",
    description: "Cores que conversam com seu propósito.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    tag: null,
  },
  {
    id: 3,
    title: "Linha Premium",
    description: "Tecidos nobres, acabamento impecável.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tag: null,
  },
  {
    id: 4,
    title: "Atemporais",
    description: "Design que transcende gerações.",
    image:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=800&q=80",
    tag: null,
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-surface-dark border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Destaques</h2>
          <div className="flex gap-4">
            <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[300px] md:w-[400px] flex flex-col gap-4 group cursor-pointer"
            >
              <div
                className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden relative"
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
                {item.tag && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
