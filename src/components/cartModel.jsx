export default function CartModel({ cartItems, onClose, onRemove }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" flex flex-col gap-3  justify-center  bg-white  w-96 shadow-lg p-5 rounded-lg">
        <div className="flex justify-between">
          <h5 className="text-lg font-bold mb-4">Your Cart</h5>
          <small className="text-sm text-gray-600">
            Count: {cartItems.length}
          </small>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3 max-h-60 overflow-y-auto">
            {cartItems.map((item, index) => (
              <li
                className="flex  gap-3 items-center border-b pb-2"
                key={index}
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h6 className="text-sm font-semibold ">{item.title}</h6>
                  <small className="text-sm text-gray-600">
                    ₹ {item.price}
                  </small>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 text-xs border border-red-400 rounded px-2 py-1 hover:bg-red-100"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          className="bg-[#D4AF37] text-white px-5 py-4 mt-4 w-full rounded hover:bg-yellow-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
