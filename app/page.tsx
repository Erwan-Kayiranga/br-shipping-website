
"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "250780000000";

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

  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    className="nav-contact"
    target="_blank"
    rel="noopener noreferrer"
  >
    CONTACT US <span>↗</span>
  </a>
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


          <a
  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
  className="hero-button"
  target="_blank"
  rel="noopener noreferrer"
>
  GET IN TOUCH <span>→</span>
</a>
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
       <a
  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
  className="contact-button"
  target="_blank"
  rel="noopener noreferrer"
>
  CONTACT BR SHIPPING →
</a>
      </section>

      <footer className="footer">
        <div>

                 <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact BR Shipping on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.01 3C8.84 3 3 8.82 3 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.7-1.7a13 13 0 0 0 6.3 1.61h.01C23.17 28.91 29 23.1 29 15.94A12.9 12.9 0 0 0 16.01 3Zm0 23.7c-1.97 0-3.9-.53-5.58-1.53l-.4-.24-3.97 1.01 1.06-3.87-.26-.42a10.7 10.7 0 0 1-1.65-5.67c0-5.95 4.85-10.79 10.81-10.79 2.88 0 5.59 1.12 7.63 3.16a10.72 10.72 0 0 1 3.16 7.63c0 5.96-4.85 10.81-10.8 10.81Zm5.93-8.09c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.79-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.42 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </a>

          <span className="footer-logo">BR. SHIPPING</span>
          <p>Connecting Belgium and Rwanda.</p>
        </div>
        <p>© 2026 BR Shipping. All rights reserved.</p>
      </footer>
    </main>
  );
}
