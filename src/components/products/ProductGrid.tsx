"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDrawer from "./ProductDrawer";

export default function ProductGrid() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

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

  // Calculate the row where the drawer should appear
  const getDrawerPosition = () => {
    if (!selectedProductId) return -1;
    const index = products.findIndex((p) => p.id === selectedProductId);
    // For a 3-column grid, drawer appears after the row containing the selected product
    return Math.floor(index / 3);
  };

  const drawerRow = getDrawerPosition();

  // Group products into rows of 3
  const rows: (typeof products)[] = [];
  for (let i = 0; i < products.length; i += 3) {
    rows.push(products.slice(i, i + 3));
  }

  return (
    <section id="collections" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-16">
        <h3 className="font-display text-3xl font-bold text-white uppercase tracking-tight">
          Featured Products
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

            {/* Drawer appears after this row if selected product is in this row */}
            {drawerRow === rowIndex && selectedProduct && (
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
