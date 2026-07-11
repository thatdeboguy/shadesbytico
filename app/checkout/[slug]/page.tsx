import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "../../data/products";
import { CopyableBankDetails } from "../../CopyableBankDetails";

const WHATSAPP_NUMBER = "2349036419473";

type CheckoutPageProps = {
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
}: CheckoutPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Checkout",
    };
  }

  return {
    title: `Checkout ${product.name} | The Shade Room by Tico`,
    description: `Payment details for ${product.name}.`,
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const message = encodeURIComponent(
    `Hello, I have made payment for ${product.name}. Here is my receipt (attach receipt):\n\nHere is my Delivery Address:`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <main className="checkout-page">
      <header className="product-page-header">
        <Link className="back-link" href={`/products/${product.slug}`}>
          Back to product
        </Link>
        <Link className="product-page-brand logo-link" href="/">
          <img src="/logo.jpeg" alt="" />
          The Shade Room
        </Link>
      </header>

      <section className="checkout-panel">
        <img
          className="checkout-product-image"
          src={product.mainImage}
          alt={product.name}
        />

        <div className="checkout-details">
          <h1>{product.name}</h1>
          <strong className="product-detail-price">{product.price}</strong>

          <CopyableBankDetails />

          <a
            className="buy-now-button receipt-button"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Send Receipt
          </a>
        </div>
      </section>
    </main>
  );
}
