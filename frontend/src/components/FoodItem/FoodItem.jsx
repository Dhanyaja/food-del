import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-md transition-all animate-fade-in duration-300 shadow-md">
      <div className="relative">
        <img src={url+"/images/"+image} alt={name} className="w-full rounded-xl" />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full bg-white"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="flex gap-2 absolute bottom-[15px] right-[15px] items-center p-2 justify-between bg-white rounded-full">
            <img
              className="w-[30px] cursor-pointer "
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="cursor-pointer">{cartItems[id]}</p>
            <img
              className="w-[30px] cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] mb-3">{description}</p>
        <p className="text-tomato font-medium my-[10px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
