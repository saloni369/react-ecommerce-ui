import { useCart } from "../context/CartContext";

const Cart = () => {

const {
cart,
increaseQty,
decreaseQty,
removeFromCart,
totalPrice
} = useCart();

if(cart.length===0){

return(

<div style={{padding:"80px",textAlign:"center"}}>

<h1>Your Cart is Empty</h1>

</div>

)

}

return(

<div className="cart-page">

<h1>Shopping Cart</h1>

{

cart.map(item=>(

<div
key={item.id}
className="cart-item"
>

<img
src={item.image}
alt=""
width="120"
/>

<div>

<h2>{item.title}</h2>

<p>₹ {item.price}</p>

<div>

<button
onClick={()=>decreaseQty(item.id)}
>

-

</button>

<span>{item.quantity}</span>

<button
onClick={()=>increaseQty(item.id)}
>

+

</button>

</div>

<button
onClick={()=>removeFromCart(item.id)}
>

Remove

</button>

</div>

</div>

))

}

<hr/>

<h2>Total : ₹ {totalPrice}</h2>

</div>

)

}

export default Cart;