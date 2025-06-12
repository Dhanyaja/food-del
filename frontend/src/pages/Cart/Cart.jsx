import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="mt-[100px]">
      <div className="cary-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-[10px] text-black">
                  <img src={url+"/images/"+item.image} alt="" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cursor-pointer text-red-600 font-bold text-lg" onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr className="text-gray-400 h-2" />
              </>
            );
          }
        })}
      </div>
      <div className="mt-[80px] flex justify-between gap-[max(12vw,20px)]">
        <div className="flex flex-1 flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="text-gray-400 h-2 my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
            </div>
            <hr className="text-gray-400 h-2 my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</b>
            </div>
          </div>
            <button className="bg-tomato py-[12px] w-fit px-[30px] rounded-sm cursor-pointer" onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex flex-1">
          <div>
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-sm">
              <input type="text" placeholder="promo-code" className="bg-transparent outline-0 pl-[10px]" />
              <button className="bg-black text-white rounded-md cursor-pointer px-8 py-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
