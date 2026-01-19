import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ProductCard({ product, isSelected, onSelect }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col gap-4" onClick={onSelect}>
      <div
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

      <div className="flex justify-between items-start">
        <div>
          <h4
            className={`font-display font-bold text-lg leading-tight transition-colors ${
              isSelected ? "text-primary" : "text-white group-hover:text-primary"
            }`}
          >
            {product.name}
          </h4>
          <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        </div>
        <span className="text-white font-mono text-sm">${product.price.toLocaleString()}</span>
      </div>
    </div>
  );
}
