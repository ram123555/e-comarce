import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

  const { cart } = useContext(CartContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{
        background: "linear-gradient(90deg,#007bff,#28a745)"
      }}
    >
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          MyShop
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >

          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link text-white me-lg-3 fw-semibold" to="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white me-lg-3 fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white me-lg-3 fw-semibold" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-light position-relative" to="/cart">

                🛒 Cart

                {cart.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {cart.length}
                  </span>
                )}

              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;