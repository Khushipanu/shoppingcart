import React, { useContext } from "react";
import { NavLink,Link } from "react-router";
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <nav
     className={`flex justify-between 
     mx-8 border-b  shadow-sm
     ${theme==="light"?"bg-white text-slate-900":"bg-slate-800 text-white"}`}>
     <NavLink to="/">
        <img
          src="https://thumbs.dreamstime.com/z/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
          alt="Shop logo"
          className="w-14 h-14"
        />
      </NavLink>


      <div className="flex items-center gap-8">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-amber-600"
              : "text-slate-600 hover:text-amber-600"
          }
        >
          Cart 🛒
        </NavLink>
        <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}
</button>
      </div>
    </nav>
  );
};

export default Navbar;
