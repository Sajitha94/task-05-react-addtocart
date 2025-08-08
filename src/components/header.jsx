import logo from "../assets/Niha-Logo.png";
import cartIcon from "../assets/addtoCart.png";
import { ShoppingCart } from "lucide-react";
export default function Header({ count , onCartClick }) {
  return (
    <div className="border-b-2 border-gray-100 shadow-sm sticky top-0 z-50 bg-white">
      <div className="md:mx-10 mx-2 flex justify-between items-center py-2">
        <div className="flex items-center justify-center gap-2 ">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain rounded-lg"
          />
          <h6 className="text-[#D4AF37] text-lg font-semibold">Niha Luxe</h6>
        </div>
        <div className="relative p-2" onClick={onCartClick}>
          <ShoppingCart
            src={cartIcon}
            alt="cart"
            className="text-[#D4AF37] w-8 h-8"
          />
          {count > 0 && (
            <span className="bg-black text-white rounded-full w-5 h-5 absolute  text-xs flex items-center justify-center top-0 right-0">
              {count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
