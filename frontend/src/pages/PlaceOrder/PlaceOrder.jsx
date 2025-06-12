import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext) 

  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="w-[100%] max-w-lg">
        <p className="text-3xl font-medium mb-[50px]">Delivery Information</p>
        <div className="flex gap-[10px]">
          <input type="text" placeholder="First Name" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato"/>
          <input type="text" placeholder="Last Name" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
        </div>
        <input type="email" placeholder="Email address" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
        <input type="text" placeholder="Street" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
        <div className="flex gap-[10px]">
          <input type="text" placeholder="City" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
          <input type="text" placeholder="State" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
        </div>
        <div className="flex gap-[10px]">
          <input type="text" placeholder="Zip code" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
          <input type="text" placeholder="Country" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
        </div>
        <input type="tel" placeholder="Phone" className="mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-md outline-tomato" />
      </div>
      <div className="w-[100%] max-w-lg">
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
          <button
            className="bg-tomato py-[12px] w-fit px-[30px] rounded-sm cursor-pointer mt-[30px]"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
