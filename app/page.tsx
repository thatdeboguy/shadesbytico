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
      <header className="site-header">
        <a className="brand" href="#home" aria-label="The Shade Room home">
          <span>The</span>
          <strong>Shade Room</strong>
          <em>by Tico</em>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button aria-label="Search">
            <Search size={21} />
          </button>
          <button aria-label="Cart">
            <ShoppingBag size={21} />
          </button>
          <button className="mobile-menu" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">New season essentials</p>
          <h1>
            Elevate Your <span>Style.</span>
          </h1>
          <p>
            Find the perfect shade for every moment.
          </p>
          <a className="primary-link" href="#shop">
            Shop now <ArrowRight size={18} />
          </a>
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
