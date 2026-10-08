import { createContext, useEffect, useState } from "react";

export const CartContext=createContext();

 const CartProvider=({children})=>{
 
const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    localStorage.removeItem("cart");
    return [];
  }
});

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])
 


    const addToCart=(product)=>{
        const existingProduct=cart.find((item)=>{
            return item.productId===product.productId;
        })
        if(existingProduct){
            setCart(
                cart.map((item)=>{
                    return item.productId===product.productId?{
                        ...item,quantity:item.quantity+1
                    }:item
                })
            )
        }else{
            setCart([...cart,{
                ...product,quantity:1
            }])
        }
    


    }
    const increaseQuantity=(productId)=>{
        setCart(cart.map((item)=>{
           return item.productId===productId?
            {...item,quantity:item.quantity+1}:item
        }))

    }
    const decreaseQuantity=(productId)=>{
        setCart((prevCart)=>
        prevCart.map((item)=>{
            return item.productId===productId?
            {...item,quantity:item.quantity-1}:item;
        }).filter((item)=>item.quantity>0))
    }
    const removeFromCart=(productId)=>{
        setCart(cart.filter((item)=>{
          return item.productId!==productId
        }))

    }
    const clearCart=()=>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart,addToCart,increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;