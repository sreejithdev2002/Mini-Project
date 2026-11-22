import { Link } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <section className="launch-hero" aria-labelledby="launch-title">
      <div className="launch-hero__copy">
        <h1 id="launch-title">Good shoes.<br /><em>Go places.</em></h1>
        <p>Find your everyday pair, something for the weekend, or shoes for your next occasion.</p>
        <Link className="store-button store-button--accent" to="/latestarrival">Shop new arrivals</Link>
      </div>
      <figure className="launch-hero__image">
        <Link to="/categories/sneakers">
          <img src="/premium_sneaker_hero.jpg" alt="Browse sneakers" width={1024} height={1024} fetchPriority="high" />
        </Link>
        <figcaption><Link to="/categories/sneakers">Explore sneakers</Link></figcaption>
      </figure>
    </section>
  );
}
