import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async(event) => {
    event.preventDefault();
    let newUrl = url;
    if(currentState === "Login"){
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
       alert(response.data.message);
    }
  }

  return (
    <div className="absolute z-1 bg-transparent-background/50 w-full h-full flex justify-center items-center">
      <form className="login-popup-container bg-white w-sm flex flex-col rounded-lg p-7 animate-fade-in duration-300" onSubmit={onLogin}>
        <div className="login-popup-title flex justify-between items-center mb-5">
          <h2 className="text-tomato font-semibold text-xl">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            className="cursor-pointer hover:scale-105 "
          />
        </div>
        <div className="login-popup-input flex flex-col gap-3 mb-5 mt-2">
          {currentState === "Sign Up" ? (
            <input
              className="border border-transparent-background rounded-lg p-2"
              type="text"
              placeholder="Your name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          ) : (
            <></>
          )}
          <input
            className="border border-transparent-background rounded-lg p-2"
            type="email"
            placeholder="Your email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            required
          />
          <input
            className="border border-transparent-background rounded-lg p-2"
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-tomato text-[16px] text-white border border-tomato w-[200px] max-w-full flex items-center justify-center rounded-full cursor-pointer hover:scale-103 transition-transform duration-300 py-[10px]"
          type="submit" >
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
        </div>
        <div className="login-popup-condition flex mt-4 items-center justify-center ">
          <input type="checkbox" required className="mr-2" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p className="mt-[10px] text-center">
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="text-blue-600 underline cursor-pointer"
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p className="mt-[10px] text-center">
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="text-blue-600 underline cursor-pointer"
            >
              {" "}
              Login here
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
