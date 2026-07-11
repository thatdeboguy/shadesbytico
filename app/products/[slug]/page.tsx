import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name} | The Shade Room by Tico`,
    description: `${product.name} sunglasses listed at ${product.price}.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-page">
      <header className="product-page-header">
        <Link className="back-link" href="/#shop">
          Back to shop
        </Link>
        <Link className="product-page-brand logo-link" href="/">
          <img src="/logo.jpeg" alt="" />
          The Shade Room
        </Link>
      </header>

      <section className="product-detail">
        <div className="product-gallery">
          {product.images.map((image) => (
            <img src={image} alt={product.name} key={image} />
          ))}
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <strong className="product-detail-price">{product.price}</strong>

          <div className="product-properties" aria-label="Product properties">
            <span>{product.gender}</span>
            <span>{product.soldOut ? "SOLD OUT" : "AVAILABLE"}</span>
          </div>

          {product.soldOut ? (
            <button className="buy-now-button" disabled type="button">
              Sold Out
            </button>
          ) : (
            <Link className="buy-now-button" href={`/checkout/${product.slug}`}>
              Buy Now
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
