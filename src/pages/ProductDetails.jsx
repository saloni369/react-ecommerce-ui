import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";
import "./ProductDetails.css";

const ProductDetails = () => {

    const { id } = useParams();

    const { addToCart } = useCart();

    const [product,setProduct]=useState(null);

    useEffect(()=>{

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));

    },[id]);

    if(!product){

        return <h2>Loading...</h2>

    }

    return(

<div className="details-container">

<div className="details-image">

<img

src={product.thumbnail}

alt={product.title}

/>

</div>

<div className="details-info">

<h1>{product.title}</h1>

<p className="brand">
Brand : {product.brand}
</p>

<p className="category">
Category : {product.category}
</p>

<div className="rating">

<FaStar color="orange"/>

{product.rating}

</div>

<h2 className="price">

₹ {product.price}

</h2>

<p className="description">

{product.description}

</p>

<button

className="cart-btn"

onClick={()=>addToCart({

id:product.id,

title:product.title,

price:product.price,

image:product.thumbnail

})}

>

Add To Cart

</button>

<button className="buy-btn">

Buy Now

</button>

</div>

</div>

)

}

export default ProductDetails;