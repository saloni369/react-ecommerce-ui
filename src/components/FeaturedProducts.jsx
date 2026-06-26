import ProductCard from "./ProductCard";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Shoes",
    price: 4999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Electronics",
    price: 6999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
  },
  {
    id: 3,
    title: "Headphones",
    category: "Electronics",
    price: 2999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
  },
  {
    id: 4,
    title: "Leather Jacket",
    category: "Fashion",
    price: 5999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured">

      <h2>Featured Products</h2>

      <p>Most Popular Products</p>

      <div className="product-grid">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;