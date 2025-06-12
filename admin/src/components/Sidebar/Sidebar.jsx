import React, { useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

const Sidebar = () => {
  // const [navState, setNavState] = useState("add");

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-[18%] min-h-[100vh] border border-[#a9a9a9] border-t-0">
      <div className="pt-[15px] pl-[20%] flex flex-col gap-5 mt-8">
        <NavLink
          to="/add"
          className={cn(
            "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-tl-md rounded-bl-md cursor-pointer",
            currentPath === "/add" ? "bg-[#fff0ed] border border-tomato" : "bg-white"
          )}
        >
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={cn(
            "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-tl-md rounded-bl-md cursor-pointer",
            currentPath === "/list" ? "bg-[#fff0ed] border border-tomato" : "bg-white"
          )}
        >
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={cn(
            "flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-tl-md rounded-bl-md cursor-pointer",
            currentPath === "/orders" ? "bg-[#fff0ed] border border-tomato" : "bg-white"
          )}
        >
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
