import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="catalogue-state catalogue-state--page">
      <p>404</p>
      <h1>Page not found</h1>
      <Link className="store-button store-button--light" to="/admin">Return to admin</Link>
    </main>
  );
}
