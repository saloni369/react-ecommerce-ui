import CategoryCard from "./CategoryCard";
import "./Categories.css";

const categories = [
  {
    id: 1,
    title: "Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
  },
  {
    id: 2,
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 3,
    title: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 4,
    title: "Watches",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
  }
];

const Categories = () => {
  return (
    <section className="categories">

      <h2>Shop By Category</h2>

      <p>
        Browse our premium collections
      </p>

      <div className="category-grid">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>

    </section>
  );
};

export default Categories;