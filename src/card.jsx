import { useEffect, useState } from "react";

export default function Card({onAddtoCard}) {
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
           
            <div className="flex flex-col md:gap-3 gap-2 justify-between mx-3">
              <small className="text-gray-600 text-[16px] text-start ">
                Price: <span>₹ {products.price}</span>
              </small>
              <button className="bg-[#D4AF37] text-white lg:py-4 md:py-3 py-2 w-full rounded hover:bg-yellow-600" onClick={()=>onAddtoCard(products)}>
                Add to Cart
              </button>
            </div>
          
        </div>
    ))}
    </div>
  );
}
