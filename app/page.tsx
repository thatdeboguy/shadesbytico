import {
  ArrowRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Truck,
} from "lucide-react";
import { CurtainIntro } from "./CurtainIntro";

const products = [
  {
    name: "Aura Rimless",
    price: "$42",
    tone: "Champagne gradient",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Noir Square",
    price: "$38",
    tone: "Black smoke",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Cocoa Aviator",
    price: "$45",
    tone: "Brown fade",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pearl Shield",
    price: "$49",
    tone: "Soft mirror",
    image:
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=900&q=85",
  },
];

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
            <article className="product-card" key={product.name}>
              <button aria-label={`Save ${product.name}`} className="save-button">
                <Heart size={18} />
              </button>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.tone}</p>
                </div>
                <strong>{product.price}</strong>
              </div>
            </article>
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
