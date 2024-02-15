import React from "react";
import "../Homepage/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <section>
          <div className="card">
            <h2>Latest Arrivals</h2>
            <div className="card-content">
              <div>
                <img/>
                <p>Sneaker - M231</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="card">
            <h2>Top Brands</h2>
            <div className="card-content">
              <ul>
                <li>Adidas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="card">
            <h2>Shop by Style</h2>
            <div className="card-content">
              <ul>
                <li>Casulas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="card">
            <h2>Shop by Gender</h2>
            <div className="card-content">
              <ul>
                <li>Male</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
