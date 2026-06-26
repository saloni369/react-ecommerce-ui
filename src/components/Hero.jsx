import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">✨ New Collection 2026</span>

        <h1>Discover Premium Fashion & Lifestyle</h1>

        <p>
          Shop the latest trends with premium quality products at unbeatable
          prices. Fast delivery, secure payment, and exclusive offers await you.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="btn-primary">
            Shop Now
          </Link>

          <Link to="/products" className="btn-secondary">
            Explore
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900"
          alt="Shopping"
        />
      </div>
    </section>
  );
};

export default Hero;