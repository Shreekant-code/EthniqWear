import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";

export const Womensection = () => {
  const { category } = useParams(); 
  const { products } = useProducts();
  console.log("Category param:", category);

  // Filter women’s products by type
  const filteredProducts = products.filter(
    (p) => p.category === "women" && p.type.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="px-4 md:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={prod.images[0]}
                alt={prod.name}
                className="h-48 w-full object-cover mb-2 rounded"
              />
              <h3 className="font-semibold">{prod.name}</h3>
              <p className="text-gray-600">
                Price: ${prod.finalPrice}{" "}
                <span className="line-through text-gray-400 ml-2">${prod.price}</span>
              </p>
              {prod.discount && <p className="text-red-500">{prod.discount} OFF</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
