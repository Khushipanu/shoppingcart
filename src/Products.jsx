import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "./context/ThemeContext";

const Products = ({ products }) => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h1
        className={`mb-3 text-center text-4xl font-bold ${
          theme === "light"
            ? "text-slate-800"
            : "text-white"
        }`}
      >
        Our Products
      </h1>

      <p
        className={`mb-10 text-center ${
          theme === "light"
            ? "text-slate-500"
            : "text-slate-300"
        }`}
      >
        Find something special for yourself
      </p>

      <div className="flex flex-wrap justify-center gap-7">
        {products.map((product) => {
          return (
            <div
              key={product.productId}
              className={`flex w-64 flex-col overflow-hidden rounded-2xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                theme === "light"
                  ? "bg-white"
                  : "bg-slate-800"
              }`}
            >
              <img
                className="h-56 w-full cursor-pointer object-cover"
                src={product.productImg}
                alt={product.productName}
                onClick={() =>
                  navigate(`/detail/${product.productId}`)
                }
              />

              <div className="flex flex-1 flex-col p-5">
                <h2
                  className={`mb-2 text-xl font-semibold ${
                    theme === "light"
                      ? "text-slate-800"
                      : "text-white"
                  }`}
                >
                  {product.productName}
                </h2>

                <p
                  className={`mb-2 text-2xl font-bold ${
                    theme === "light"
                      ? "text-slate-900"
                      : "text-slate-100"
                  }`}
                >
                  ₹{product.price}
                </p>

                <p
                  className={`mb-2 text-sm font-medium ${
                    product.inStock
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {product.inStock
                    ? "In stock"
                    : "Out of stock"}
                </p>

                <p
                  className={`mb-5 text-sm ${
                    theme === "light"
                      ? "text-slate-500"
                      : "text-slate-300"
                  }`}
                >
                  Ratings: ⭐ {product.rating}
                </p>

                <button
                  onClick={() =>
                    navigate(`/detail/${product.productId}`)
                  }
                  className="mt-auto w-full rounded-xl bg-amber-500 px-4 py-2.5 font-semibold text-white transition duration-300 hover:bg-amber-600 active:scale-95"
                >
                  View Product
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;