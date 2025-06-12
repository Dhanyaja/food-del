import React from "react";

const Header = () => {
  return (
    <div className="header h-[34vw] my-[30px] mx-auto bg-[url('C:\Users\HI\Desktop\TODOLIST\food-del\frontend\src\assets\frontend_assets\header_img.png')] bg-no-repeat bg-contain relative">
      <div className="header-contents absolute flex flex-col max-w-[50%] bottom-[10%] left-[6vw] gap-[1.5vw] items-start animate-fade-in-delay-4">
        <h2 className="font-medium text-6xl text-white leading-snug">Order your <br />favourite food here</h2>
        <p className="text-white font-[1vw]">
          Choose from a diverse menu featuring a deluctable array of dishes
          crafted with the finest ingredients to satisfy your craving and
          elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="text-view-more-button font-medium py-3 px-10 bg-white rounded-full">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
