import { Link } from "react-router-dom";
import "./Categories.css";

const categories = ["Sneakers", "Casuals", "Formals", "Sandals"];

function Categories({ embedded = false }) {
  const Heading = embedded ? "h2" : "h1";

  return (
    <section className={embedded ? "store-section" : "store-section store-section--page"}>
      <div className="store-section__heading">
        <Heading>Shop by category</Heading>
      </div>
      <div className="store-category-grid">
        {categories.map((category) => (
          <Link className="store-category" key={category} to={`/categories/${category.toLowerCase()}`}>
            <img src={`/images/${category}-min.png`} alt="" loading="lazy" />
            <span>{category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
