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
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-3 md:mx-10 px-2">
      {products.map((products,index) => (
        <div className="flex flex-col md:gap-5 gap-2 border border-1 rounded-xl  md:p-3 justify-center p-2 " key={index}>
          <div className="w-38 ">
            <img src={products.image} alt="card-img" className="rounded-xl w-full md:h-48 h-24 object-contain" />
          </div>
          
            <div className="flex fle-col text-sm mx-3">
              <h6 className="font-semibold truncate">{products.title}</h6>
            </div>
           
            <div className="flex flex-col md:gap-3 gap-1 justify-between mx-2">
              <small className="text-gray-600 text-[16px] text-center ">
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
