import { Link, NavLink, useNavigate } from "react-router-dom";

const sections = [
  ["/admin", "Customers"],
  ["/admin/view", "Products"],
  ["/admin/add", "Add product"],
  ["/admin/orderlist", "Orders"],
  ["/admin/dashboard", "Dashboard"],
  ["/admin/reviews", "Reviews"],
];

export default function Header() {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("adminjwt");
    navigate("/admin/login");
  }

  return (
    <header className="workspace-header">
      <div className="workspace-header__top">
        <Link to="/admin" className="store-brand">SHOOOZ <small>Admin</small></Link>
        <button type="button" onClick={signOut}>Sign out</button>
      </div>
      <nav aria-label="Admin sections">
        {sections.map(([path, label]) => (
          <NavLink key={path} to={path} end>{label}</NavLink>
        ))}
      </nav>
    </header>
  );
}
