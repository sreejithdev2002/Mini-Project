import { Link } from "react-router-dom";

export default function Empty({ message }) {
  return (
    <div className="catalogue-state">
      <h2>{message}</h2>
      <Link className="store-button store-button--light" to="/categories">Browse categories</Link>
    </div>
  );
}
