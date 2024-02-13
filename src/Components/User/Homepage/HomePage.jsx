import React from "react";
import '../Homepage/HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to Shoooz.com</h1>
        <p>Find the latest and greatest footwear for every occasion.</p>
        <button>Shop Now</button>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Display featured products here */}
      </section>
    </div>
  );
}

export default HomePage;
