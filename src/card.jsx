import { useEffect, useState } from "react";
import card from "../src/assets/card.png";

export default function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mx-10">
      {products.map((products,index) => (
        <div className="flex flex-col gap-5 border border-1 rounded-xl  p-3 justify-center  " key={index}>
          <div className="w-62">
            <img src={products.image} alt="card-img" className="rounded-xl w-full h-48 object-contain" />
          </div>
          <div className="flex justify-between">
            <div className="flex fle-col text-sm line-clamp-2">
              <h6 className="font-semibold truncate">{products.title}</h6>
            </div>
            </div>
            <div className="flex flex-col gap-3 justify-between">
              <small className="text-gray-600 text-[16px] ">
                Price: <span>₹ {products.price}</span>
              </small>
              <button className="border border-2 px-3 py-1 rounded-md hover:bg-gray-100">
                Add to Cart
              </button>
            </div>
          
        </div>
    ))}
    </div>
  );
}
