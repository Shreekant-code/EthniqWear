import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/Addtocart";

export const Productdetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const {  cart, addTocart, increment, decrement} = useCart(); 


  const product = products.find((p) => p.id === Number(id)); // if p.id is a number

  if (!product) return <p className="px-8 py-8">Product not found!</p>;

  return (
    <div className="px-8 py-8 mt-[60px] flex justify-center items-center gap-4">
      
      <img
        src={product.image || "/hoodie.jpg"}
        alt={product.description}
        className="w-[300px] h-[400px] mb-4"
      />
      <div>
      <p className="mb-2">{product.description}</p>
      <p className="mb-2">
        <span className="font-bold text-xl">₹{product.price}</span>{" "}
        <span className="line-through text-sm">₹{product.finalPrice}</span>{" "}
        <span className="text-green-500">{product.discount} off</span>
      </p>
  
       

       
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addTocart(product)}
      >
        Add to Cart
      </button>
<p>{cart.length}</p>
      </div>
    </div>
  );
};
