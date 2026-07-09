import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Truck,
} from "lucide-react";
import { CurtainIntro } from "./CurtainIntro";
import { products } from "./data/products";

const steps = ["Choose your shades", "Place your order", "Make payment", "Add delivery details"];

export default function Home() {
  return (
    <main>
      <CurtainIntro />

      <header className="site-header">
        <button className="mobile-menu-btn" aria-label="Open menu">
          <Menu size={28} />
        </button>

        <a className="brand" href="#home" aria-label="The Shade Room home">
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

        <div className="header-actions">
          <button aria-label="Search" className="search-btn">
            <Search size={21} />
          </button>
          <button aria-label="Cart" className="cart-btn">
            <ShoppingBag size={21} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="desktop-only-text">Elevate Your</span>
            <span className="mobile-only-text">Shop Your</span>
            <span className="script-text">Style.</span>
          </h1>
          <p className="hero-subtitle">
            Find the perfect shade for every moment.
          </p>
          <div className="hero-cta">
            <a className="primary-link" href="#shop">
              Shop Now
            </a>
          </div>
        </div>
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
            <p className="eyebrow">Shop the edit</p>
            <h2>Featured shades</h2>
          </div>
          <button className="filter-button">
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

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
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">The Shade Room by Tico</p>
          <h2>Made for quick, confident shopping.</h2>
        </div>
        <p>
          Customers can browse styles, choose a frame, and get the information
          they need before ordering. This first version is ready to grow into a
          full storefront with checkout, inventory, and delivery details.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <Truck size={22} />
          <span>Delivery details can be confirmed after order placement.</span>
        </div>
        <a className="primary-link dark" href="mailto:hello@shaderoom.example">
          Contact us
        </a>
      </section>
    </main>
  );
}
