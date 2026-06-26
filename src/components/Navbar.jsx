import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ShopEase</Link>
      </div>

      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search Products..."
        />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUserCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;