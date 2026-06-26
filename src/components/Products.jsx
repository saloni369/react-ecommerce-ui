import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { getProducts } from "../services/api";

const Products = () => {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadProducts = async () => {

      const data = await getProducts();

      setProducts(data);

      setLoading(false);

    };

    loadProducts();

  }, []);

  return (

    <div style={{padding:"50px"}}>

      <h1 style={{marginBottom:"40px"}}>

        All Products

      </h1>

      <div className="product-grid">

        {

        loading ?

        [...Array(8)].map((_,index)=>

          <LoadingSkeleton key={index}/>

        )

        :

        products.map(product=>

          <ProductCard
          key={product.id}
          product={{
            id:product.id,
            title:product.title,
            image:product.thumbnail,
            category:product.category,
            price:product.price,
            rating:product.rating
          }}
          />

        )

        }

      </div>

    </div>

  );

};

export default Products;