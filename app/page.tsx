import {
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { products } from "./data/products";
import { ProductCatalog } from "./ProductCatalog";

const steps = ["Choose your shades", "Place your order", "Make payment", "Add delivery details"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="The Shade Room home">
          <img className="brand-logo" src="/logo.jpeg" alt="" />
          <div className="brand-the">
            <span className="line"></span>
            <span>The</span>
            <span className="line"></span>
          </div>
          <strong className="brand-title">Shade Room</strong>
          <span className="brand-by">by Tico</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>

      <section className="hero" id="home" aria-label="The Shade Room homepage">
        <a className="mobile-shop-now" href="#shop">
          <ShoppingCart size={20} aria-hidden="true" />
          <span>Shop Now</span>
        </a>
      </section>

      <section className="product-strip" aria-label="Featured services">
        {steps.map((step) => (
          <div key={step}>
            <Star size={17} />
            <span>{step}</span>
          </div>
        ))}
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading">
          <div>
            <h2>Featured shades</h2>
          </div>
        </div>

        <ProductCatalog products={products} />
      </section>

      <section className="about-section" id="about">
        <div>
          <h2>Made for quick, confident shopping.</h2>
        </div>
        <p>
          You can browse styles, choose a frame, and get the information
          you need before ordering.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <Truck size={22} />
          <span>Delivery details can be confirmed after order placement.</span>
        </div>
        <a
          className="primary-link dark"
          href="https://wa.me/2349036419473"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact us
        </a>
      </section>
    </main>
  );
}
