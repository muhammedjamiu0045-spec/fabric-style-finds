import { useMemo, useState } from "react";
import { searchProducts } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";

export const ProductGrid = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => searchProducts(search, category), [search, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <CategoryFilter selected={category} onChange={setCategory} />
        <div className="w-full sm:w-72">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No products match your search</p>
          <p className="text-sm text-muted-foreground mt-2">Try a different keyword or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
