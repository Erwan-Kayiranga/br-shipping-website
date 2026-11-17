
"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "32467631100";
const CONTACT_EMAIL = "brshipping250@gmail.com";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello BR Shipping! I would like to ask about your shipping services from Belgium to Rwanda."
);


const slides = [
  {
    number: "01",
    eyebrow: "BELGIUM TO RWANDA · CLOTHING",
    title: "Clothes &",
    highlight: "Shoes.",
    description:
      "Send clothes, shoes and fashion items from Belgium to Rwanda with BR Shipping.",
    price: "€12",
    unit: "/ kg",
    priceNote: "Illustrative price per kilogram",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=2000&q=85",
  },
  {
    number: "02",
    eyebrow: "BELGIUM TO RWANDA · ELECTRONICS",
    title: "Phones &",
    highlight: "Electronics.",
    description:
      "Looking to send a phone or electronic device to Rwanda? Contact us for shipping details.",
    price: "€35",
    unit: "/ device",
    priceNote: "Illustrative price per device",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=2000&q=85",
  },
  {
    number: "03",
    eyebrow: "BELGIUM TO RWANDA · GENERAL CARGO",
    title: "Ship more.",
    highlight: "Worry less.",
    description:
      "From personal parcels to general goods, ask us about sending your cargo to Rwanda.",
    price: "€15",
    unit: "/ kg",
    priceNote: "Illustrative price per kilogram",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=2000&q=85",
  },
];


export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[activeSlide];

  return (
    <main className="website">
  

<header className="navbar">
  <a href="/" className="logo">
    <span className="logo-main">BR.</span>
    <span className="logo-sub">SHIPPING</span>
  </a>

  <div className="nav-actions">
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    className="nav-contact"
    target="_blank"
    rel="noopener noreferrer"
  >
    WHATSAPP ↗
  </a>
<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent("Shipping enquiry - BR Shipping")}`}
  className="hero-button email-button"
  target="_blank"
  rel="noopener noreferrer"
>
  SEND AN EMAIL →
</a>
</div>
</header>


      <section className="hero">
        {slides.map((item, index) => (
          <div
            key={item.number}
            className={`hero-image ${index === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url("${item.image}")` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className="hero-content" key={slide.number}>
          <p className="eyebrow">{slide.eyebrow}</p>

          <h1>
            {slide.title}
            <br />
            <span>{slide.highlight}</span>
          </h1>

          <p className="hero-description">{slide.description}</p>

<div className="price-highlight">
  <div>
    <span className="price-label">SHIPPING FROM</span>
    <div className="price-value">
      {slide.price}
      <span>{slide.unit}</span>
    </div>
  </div>
  <p>{slide.priceNote}</p>
</div>


 <div className="hero-actions">
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    className="hero-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    WHATSAPP US →
  </a>

 <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent("Shipping enquiry - BR Shipping")}`}
  className="hero-button email-button"
  target="_blank"
  rel="noopener noreferrer"
>
  SEND AN EMAIL →
</a>
</div>

        </div>

        <div className="carousel-controls">
          <button
            className="arrow-button"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="slide-indicators">
            {slides.map((item, index) => (
              <button
                key={item.number}
                className={`slide-dot ${index === activeSlide ? "selected" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="arrow-button"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        <div className="hero-bottom">
          <span>
            {slide.number} — 0{slides.length}
          </span>
          <span>BR SHIPPING © 2026</span>
          <span>BELGIUM ↔ RWANDA</span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Need to send something?</h2>
        <p>
          Get in touch with BR Shipping and let's discuss how we can
          help with your shipment.
        </p>
  
      </section>

      <footer className="footer">
        <div>

     

          <span className="footer-logo">BR. SHIPPING</span>
          <p>Connecting Belgium and Rwanda.</p>
        </div>
        <p>© 2026 BR Shipping. All rights reserved.</p>
      </footer>
    </main>
  );
}
