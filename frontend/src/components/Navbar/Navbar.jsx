import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { cn } from "../../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className="py-5 flex justify-between items-center">
      <img
        src={assets.logo}
        alt=""
        className="logo w-[140px] lg:w-[150px] md:w-[120px]"
      />
      <ul className="navbar-menu hidden md:flex list-none md:gap-[20px] lg:gap-[20px] text-navbar md:text-[17px] lg:text-[18px] cursor-pointer ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={cn(
            menu === "home"
              ? "pb-0.5 border-tomato border-b-2 text-tomato"
              : "",
            "transition-all duration-100"
          )}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={cn(
            menu === "menu"
              ? "pb-0.5 border-tomato border-b-2 text-tomato"
              : "",
            "transition-all duration-100"
          )}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={cn(
            menu === "mobile-app"
              ? "pb-0.5 border-tomato border-b-2 text-tomato"
              : "",
            "transition-all duration-100"
          )}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={cn(
            menu === "contact-us"
              ? "pb-0.5 border-tomato border-b-2 text-tomato"
              : "",
            "transition-all duration-100"
          )}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right flex items-center gap-3 md:gap-5 lg:gap-10">
        <img src={assets.search_icon} alt="" className="w-[22px] lg:w-[25px]" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt=""
              className="w-[22px] lg:w-[25px]"
            />
          </Link>
          <div
            className={cn(
              getTotalCartAmount() > 0
                ? "absolute min-w-[10px] min-h-[10px] bg-tomato rounded-full top-[-8px] right-[-8px]"
                : ""
            )}
          ></div>
        </div>
        {!token ? (
          <button
            className={cn(
              "bg-transparent text-[16px] text-navbar border border-tomato py-[10px] px-[30px] rounded-full cursor-pointer hover:bg-button-hover transition-colors duration-300"
            )}
            onClick={() => setShowLogin(true)}
          >
            sign in
          </button>
        ) : (
          <div className="navbar-profile relative">
            <img
              src={assets.profile_icon}
              alt=""
              className="cursor-pointer peer"
            />
              <ul className="nav-profile-dropdown hover:flex absolute hidden right-0 z-1 peer-hover:flex flex-col gap-[10px] bg-[#fff2ef] py-[12px] px-[25px] rounded-md border border-tomato outline-[2px] outline-[#fff] ">
                <li className="cursor-pointer flex items-center gap-[10px] justify-center">
                  <img src={assets.bag_icon} alt="" className="w-[20px]"/>
                  <p className="hover:text-tomato">Orders</p>
                </li>
                <hr />
                <li className="cursor-pointer flex items-center gap-[10px] justify-center" onClick={logout}>
                  <img src={assets.logout_icon} alt="" className="w-[20px]" />
                  <p className="hover:text-tomato">Logout</p>
                </li>
              </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
