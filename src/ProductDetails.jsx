import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ThemeContext } from "./context/ThemeContext";
import { CartContext } from "./context/CartContext";

const ProductDetails = ({ products }) => {
  const [message,setMessage]=useState("")
  const { id } = useParams();


  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const {addToCart}=useContext(CartContext);


  const selectedProduct = products.find((product) => {
    return product.productId === Number(id);
  });

  if (!selectedProduct) {
    return (
      <h1
        className={`text-center text-3xl font-bold ${
          theme === "light"
            ? "text-slate-800"
            : "text-white"
        }`}
      >
        Product not found
      </h1>
    );
  }
const handleAddToCart=(selectedProduct)=>{
  addToCart(selectedProduct);
  setMessage("Product added to cart");
  setTimeout(()=>{
    setMessage("");

  },2000)

}
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">

      <button
        onClick={() => navigate("/")}
        className={`mb-6 font-medium ${
          theme === "light"
            ? "text-slate-600"
            : "text-slate-300"
        }`}
      >
        ← Back to Products
      </button>

      <div
        className={`flex flex-col gap-10 rounded-2xl p-8 shadow-md md:flex-row ${
          theme === "light"
            ? "bg-white"
            : "bg-slate-800"
        }`}
      >
  

        <div className="md:w-1/2">
          <img
            src={selectedProduct.productImg}
            alt={selectedProduct.productName}
            className="h-96 w-full rounded-xl object-cover"
          />
        </div>

       

        <div className="flex flex-col justify-center md:w-1/2">

          <h1
            className={`text-3xl font-bold ${
              theme === "light"
                ? "text-slate-800"
                : "text-white"
            }`}
          >
            {selectedProduct.productName}
          </h1>

          <p
            className={`mt-3 ${
              theme === "light"
                ? "text-slate-500"
                : "text-slate-300"
            }`}
          >
            ⭐ {selectedProduct.rating}
          </p>

          <p
            className={`mt-4 text-3xl font-bold ${
              theme === "light"
                ? "text-slate-900"
                : "text-slate-100"
            }`}
          >
            ₹{selectedProduct.price}
          </p>

          <p
            className={`mt-4 font-medium ${
              selectedProduct.inStock
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {selectedProduct.inStock
              ? "In Stock"
              : "Out of Stock"}
          </p>

          <button onClick={()=>handleAddToCart(selectedProduct)}
            disabled={!selectedProduct.inStock}
            className={`mt-8 rounded-xl px-6 py-3 font-semibold text-white transition ${
              selectedProduct.inStock
                ? "bg-amber-500 hover:bg-amber-600 active:scale-95"
                : "cursor-not-allowed bg-slate-400"
            }`}
          >
            Add to Cart
          </button>
        {message &&(
          <div
    role="status"
    className="mt-4 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 shadow-sm"
  >
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
      ✓
    </span>

    <p className="text-sm font-medium">
      {message}
    </p>
  </div>

        )}

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;