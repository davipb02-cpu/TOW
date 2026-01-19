import { Product } from "@/types/product";

interface ProductDrawerProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDrawer({ product, onClose }: ProductDrawerProps) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface-dark rounded-xl overflow-hidden border border-white/10 shadow-2xl drawer-enter">
      <div className="flex flex-col md:flex-row h-auto md:min-h-[420px]">
        {/* Product Image */}
        <div
          className="w-full md:w-5/12 h-64 md:h-auto bg-cover bg-center relative"
          style={{ backgroundImage: `url("${product.detailImage}")` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                  {product.name}
                </h3>
                <span className="text-primary font-mono text-lg">
                  ${product.price.toLocaleString()}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="text-gray-500 hover:text-white transition-colors p-1"
                aria-label="Fechar"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-8 leading-relaxed">{product.fullDescription}</p>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <span className="block text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {spec.label}
                  </span>
                  <span className="text-gray-400 text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-xl">mail</span>
              Tenho interesse
            </button>
            <button className="flex-1 border border-white/20 hover:border-white/40 text-white font-medium h-12 rounded-lg flex items-center justify-center transition-all">
              Ver detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
