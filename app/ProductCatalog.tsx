"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "./data/products";

type GenderFilter = "all" | "unisex" | "not-unisex";

function getNumericPrice(price: string) {
  return Number(price.replace(/[^0-9]/g, ""));
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");

  const filteredProducts = useMemo(() => {
    const minimum = minimumPrice === "" ? 0 : Number(minimumPrice);
    const maximum = maximumPrice === "" ? Number.POSITIVE_INFINITY : Number(maximumPrice);

    return products.filter((product) => {
      const matchesGender =
        genderFilter === "all" ||
        (genderFilter === "unisex" && product.gender === "UNISEX") ||
        (genderFilter === "not-unisex" && !product.gender);
      const price = getNumericPrice(product.price);

      return matchesGender && price >= minimum && price <= maximum;
    });
  }, [genderFilter, maximumPrice, minimumPrice, products]);

  return (
    <>
      <div className="catalog-filters" aria-label="Filter products">
        <label>
          <span>Type</span>
          <select
            onChange={(event) => setGenderFilter(event.target.value as GenderFilter)}
            value={genderFilter}
          >
            <option value="all">All products</option>
            <option value="unisex">Unisex</option>
            <option value="not-unisex">Not unisex</option>
          </select>
        </label>

        <label>
          <span>Minimum amount (₦)</span>
          <input
            inputMode="numeric"
            min="0"
            onChange={(event) => setMinimumPrice(event.target.value)}
            placeholder="e.g. 10000"
            type="number"
            value={minimumPrice}
          />
        </label>

        <label>
          <span>Maximum amount (₦)</span>
          <input
            inputMode="numeric"
            min="0"
            onChange={(event) => setMaximumPrice(event.target.value)}
            placeholder="e.g. 15000"
            type="number"
            value={maximumPrice}
          />
        </label>
      </div>

      <p className="filter-results" aria-live="polite">
        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
      </p>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Link
              className="product-card"
              href={`/products/${product.slug}`}
              key={product.slug}
            >
              <img src={product.mainImage} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-filter-results">No products match these filters.</p>
      )}
    </>
  );
}
