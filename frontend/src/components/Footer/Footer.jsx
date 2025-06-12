import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] absolute left-0 flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]" id="footer">
      <div className="w-full grid grid-cols-4">
        <div className="col-span-2 flex items-start flex-col">
          <img src={assets.logo} className="mb-[20px]" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit
            ipsa doloribus repellat provident odio laudantium perferendis
            aliquid a facere ut ullam iure magni similique, corrupti hic fuga,
            voluptatibus veritatis?
          </p>
          <div className="footer-social-icons flex">
            <img src={assets.facebook_icon} className="w-[40px] mr-[15px]" />
            <img src={assets.linkedin_icon} className="w-[40px] mr-[15px]" />
            <img src={assets.twitter_icon} className="w-[40px] mr-[15px]" />
          </div>
        </div>
        <div className="footer-contnt-center flex items-start flex-col">
          <h2 className="text-white text-2xl font-medium mb-[10px]">COMPANY</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer hover:text-tomato">Home</li>
            <li className="mb-[10px] cursor-pointer hover:text-tomato">About us</li>
            <li className="mb-[10px] cursor-pointer hover:text-tomato">Delivery</li>
            <li className="mb-[10px] cursor-pointer hover:text-tomato">Privacy policy</li>
          </ul>
        </div>
        <div className="footer-contnt-right flex items-start flex-col">
          <h2 className="text-white text-2xl font-medium mb-[10px]">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer hover:text-tomato">+1-212-456--7890</li>
            <li className="mb-[10px] cursor-pointer hover:text-tomato">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="h-[2px] my-[20px] w-full text-gray-500" />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
