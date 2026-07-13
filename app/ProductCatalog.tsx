import Link from "next/link";
import type { Product } from "./data/products";

export function ProductCatalog({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
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
  );
}
