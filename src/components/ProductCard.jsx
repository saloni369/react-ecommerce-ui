import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="product-image">

        <img src={product.image} alt={product.title} />

        <button className="wishlist-btn">
          <FaHeart />
        </button>

      </div>

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <div className="rating">
          <FaStar className="star" />
          <span>{product.rating}</span>
        </div>

        <div className="price-row">

          <h2>₹{product.price}</h2>

          <button className="cart-btn">
            <FaShoppingCart />
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;