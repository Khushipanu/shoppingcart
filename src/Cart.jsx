import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { ThemeContext } from "./context/ThemeContext";
import { Link } from "react-router";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const { theme } = useContext(ThemeContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        <p className="text-slate-500 mb-6">
          Your cart is currently empty.
        </p>

        <Link
          to="/"
          className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>

        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-600"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.productId}
            className={`flex items-center justify-between p-5 rounded-xl shadow-sm border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            

            <div className="flex items-center gap-5">
              <img
                src={item.productImg}
                alt={item.productName}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h2 className="text-xl font-semibold">
                  {item.productName}
                </h2>

                <p className="text-amber-600 font-semibold mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>


            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.productId)}
                className="w-9 h-9 border rounded-lg text-lg"
              >
                -
              </button>

              <span className="font-semibold text-lg">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.productId)}
                className="w-9 h-9 border rounded-lg text-lg"
              >
                +
              </button>
            </div>

            {/* Product Total */}

            <div className="font-semibold">
              ₹{item.price * item.quantity}
            </div>

            {/* Remove */}

            <button
              onClick={() => removeFromCart(item.productId)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}

      <div
        className={`mt-10 ml-auto max-w-md p-6 rounded-xl shadow-sm border ${
          theme === "dark"
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between mb-3">
          <span>Total Items</span>

          <span>
            {cart.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>

        <button className="w-full mt-6 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;