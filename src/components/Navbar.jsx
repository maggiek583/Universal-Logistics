import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    };

    // Initial load
    updateCartCount();

    // Listen for custom "cartUpdated" event
    window.addEventListener("cartUpdated", updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [location]);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
   
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Universal<span className="text-danger">Logistics</span>
        </Link>

        

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">View Trucks</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addproducts" className="nav-link">Add Truck</Link></b>
            </li>
           
          </ul>
         

          {/* Authorization Links (Aligned Right) */}
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <b>
                <Link to="/cart" className="nav-link d-flex align-items-center">
                  <i className="fas fa-shopping-cart me-1"></i>
                  Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger ms-2">{cartCount}</span>
                  )}
                </Link>
              </b>
            </li>
                <li className="nav-item">
                  <b><Link to="/aboutus" className="nav-link">About us</Link></b>
                </li>
                <li className="nav-item">
                  <b><Link to="/chat" className="nav-link">Chat us</Link></b>
                </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary me-2">Sign IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign UP</Link>
            </li>
          </ul>
          
        </div>
     
    </nav>
  );
};

export default Navbar;