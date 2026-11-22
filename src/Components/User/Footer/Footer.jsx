import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="store-footer">
      <div className="store-footer__inner">
        <Link className="store-brand" to="/">SHOOOZ</Link>
        <nav aria-label="Footer" className="store-footer__links">
          <Link to="/latestarrival">New arrivals</Link>
          <Link to="/categories">Collections</Link>
          <Link to="/luxury">Luxury</Link>
        </nav>
        <p>&copy; {new Date().getFullYear()} Shoooz</p>
      </div>
    </footer>
  );
}

export default Footer;
