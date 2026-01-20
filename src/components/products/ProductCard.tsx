import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ProductCard({ product, isSelected, onSelect }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col gap-4">
      <div
        onClick={onSelect}
        className={`relative w-full aspect-[4/5] overflow-hidden rounded-md bg-surface-dark cursor-pointer transition-all duration-300 ${
          isSelected
            ? "border-2 border-primary/50 ring-1 ring-primary/20"
            : "border border-transparent hover:border-white/10"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${product.image}")` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Tag badge */}
        {product.tag && (
          <div
            className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-white uppercase tracking-wider ${
              product.tag === "Bestseller"
                ? "bg-primary/80"
                : product.tag === "Featured"
                  ? "bg-white/20"
                  : "bg-black/60"
            }`}
          >
            {product.tag}
          </div>
        )}
      </div>

      <div className="flex justify-between items-start" onClick={onSelect}>
        <div>
          <h4
            className={`font-display font-bold text-lg leading-tight transition-colors cursor-pointer ${
              isSelected ? "text-primary" : "text-white group-hover:text-primary"
            }`}
          >
            {product.name}
          </h4>
          <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        </div>
        <span className="text-white font-mono text-sm">R$ {product.price.toLocaleString()}</span>
      </div>

      {/* Mobile Inline Details - expande abaixo do card */}
      {isSelected && (
        <div className="md:hidden bg-surface-dark rounded-lg border border-white/10 p-5 mt-2 drawer-enter">
          <p className="text-gray-400 mb-5 leading-relaxed text-sm">
            {product.fullDescription}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-5">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <span className="block text-[10px] font-bold text-white uppercase tracking-wider mb-1">
                  {spec.label}
                </span>
                <span className="text-gray-400 text-xs">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded-lg flex items-center justify-center gap-2 transition-all text-sm">
              <span className="material-symbols-outlined text-lg">mail</span>
              Tenho interesse
            </button>
            <button className="w-full border border-white/20 hover:border-white/40 text-white font-medium h-11 rounded-lg flex items-center justify-center transition-all text-sm">
              Ver detalhes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
