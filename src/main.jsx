import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartProvider from "./context/CartContext.jsx"
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeProvider from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
<ThemeProvider>
   <CartProvider>
   <BrowserRouter>
   <App/>
  </BrowserRouter>
 </CartProvider>
</ThemeProvider>
)
