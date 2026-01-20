"use client";

import { useState, useMemo, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDrawer from "./ProductDrawer";

export default function ProductGrid() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState(3);

  // Detectar tamanho da tela
  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const selectedProduct = useMemo(
    () => products.find((p) => p.id === selectedProductId) || null,
    [selectedProductId]
  );

  const handleProductSelect = (productId: string) => {
    setSelectedProductId((prev) => (prev === productId ? null : productId));
  };

  const handleCloseDrawer = () => {
    setSelectedProductId(null);
  };

  // Calcular posição do drawer baseado no número de colunas atual
  const getDrawerPosition = () => {
    if (!selectedProductId) return -1;
    const index = products.findIndex((p) => p.id === selectedProductId);
    return Math.floor(index / columns);
  };

  const drawerRow = getDrawerPosition();

  // Agrupar produtos em linhas baseado no número de colunas
  const rows: (typeof products)[] = [];
  for (let i = 0; i < products.length; i += columns) {
    rows.push(products.slice(i, i + columns));
  }

  return (
    <section id="collections" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-16">
        <h3 className="font-display text-3xl font-bold text-white uppercase tracking-tight">
          Produtos em Destaque
        </h3>
      </div>

      {/* Product Grid with Inline Drawer */}
      <div className="flex flex-col gap-8">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            {/* Products Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {row.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProductId === product.id}
                  onSelect={() => handleProductSelect(product.id)}
                />
              ))}
            </div>

            {/* Drawer apenas no tablet/desktop - no mobile os detalhes aparecem inline no card */}
            {!isMobile && drawerRow === rowIndex && selectedProduct && (
              <div className="mt-8">
                <ProductDrawer product={selectedProduct} onClose={handleCloseDrawer} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
