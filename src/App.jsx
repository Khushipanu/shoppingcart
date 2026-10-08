import React, { useContext, useEffect } from 'react'
import { Routes,Route, useNavigate } from "react-router";
import Products from './Products';
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';
import { ThemeContext } from './context/ThemeContext';
import Cart from './Cart';


const App = () => {
  const {theme}=useContext(ThemeContext);
  const productArr = [
    {
      productId: 1,
      productName: "Clothes",
      productImg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSjf8lrLamyeOaca-wESa4xPB-LsXMIrqsAg2sv4St6fEn7NmjraobF3CBw-fRUPTKn_wDDH70yU_Z52pP4PjhOvLJEdaGF",
      price: 599,
      inStock: true,
      rating: 4.5
    },
    {
      productId: 2,
      productName: "Flowers",
      productImg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIn-FpzJ1WSjV7O5ccl-H8Xg5_upOOhMiVOq1-c-WbvajficqP9Ys7pW7Y_7jEmR_SpggR0LoYl4yNOfB8WLrBWYSwHAgN74HR9WK0-johl5QHzH37uwWVOA",
      price: 799,
      inStock: true,
      rating: 4.5
    },
    {
      productId: 3,
      productName: "Chocolate Box",
      productImg: "https://images.unsplash.com/photo-1549007994-cb92caebd54b",
      price: 599,
      inStock: true,
      rating: 4.7
    },
    {
      productId: 4,
      productName: "Teddy Bear",
      productImg: "https://images.unsplash.com/photo-1559454403-b8fb88521f11",
      price: 999,
      inStock: true,
      rating: 4.6
    },
    {
      productId: 5,
      productName: "Birthday Cake",
      productImg: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      price: 1299,
      inStock: false,
      rating: 4.8
    }
  ]


  return (
    <div 
    className={`min-h-screen 
    ${theme==="dark"?"bg-slate-900 text-white":"bg-slate-50 text-slate-900"}`}>
      <Navbar/>


      <div className="mx-auto max-w-7xl">


         <Routes>
              <Route path="/" element={<Products products={productArr}/>}/>
              <Route path="/detail/:id" element={<ProductDetails products={productArr}/>}/>
              <Route path="/cart" element={<Cart/>}/>
             </Routes>
             

       

      </div>

    </div>
    // <Navbar/>
  )
}

export default App
