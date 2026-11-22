import { Link } from "react-router-dom";
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <section className="launch-hero" aria-labelledby="launch-title">
      <div className="launch-hero__inner">
        <div className="launch-hero__copy">
          <p className="launch-hero__label">The latest drop</p>
          <h1 id="launch-title">Step into<br />the <em>future.</em></h1>
          <p className="launch-hero__description">
            Discover the latest footwear from SHOOOZ, from everyday sneakers to standout streetwear.
          </p>
          <div className="launch-hero__actions">
            <Link className="store-button store-button--accent" to="/latestarrival">Shop new arrivals</Link>
            <Link className="store-button store-button--outline" to="/categories">Explore collections</Link>
          </div>
        </div>
        <div className="launch-hero__image">
          <img src="/premium_sneaker_hero.jpg" alt="Premium sneaker from SHOOOZ" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
