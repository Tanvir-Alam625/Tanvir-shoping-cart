import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import GoogleIcon from "./1534129544.png";

const Login = () => {
  return (
    <div className="w-full  px-2 md:px-8 flex justify-center">
      <div className="login-form border-2  border-[#95A0A7] rounded-md w-full lg:w-[500px] mt-[100px] mb-12 flex justify-center px-2 md:px-4 lg:px-[40px]">
        <div className="w-full">
          <h3 className="text-[35px]  tracking-tight text-[#2A414F] text-center py-[25px]">
            LogIn
          </h3>
          <div className="form-group w-full mb-[20px]">
            <label htmlFor="email" className="ml-2">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
            />
          </div>
          <div className="form-group w-full mb-[20px]">
            <label htmlFor="password" className="ml-2">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
            />
          </div>
          <input
            type="button"
            value="Login"
            className="w-full   rounded-md cursor-pointer  h-[55px] text-xl text-[#0E161A] font-semibold bg-[#ffaa0067] mb-[15px] duration-200 ease-in hover:bg-yellow-600"
          />
          <p className="text-sm  text-gray-600 ">
            New to <span className="font-semibold">Emma John Shop</span>?{" "}
            <Link
              to="/signup"
              className="text-yellow-500 font-semibold text-xl"
              element={<Signup />}
            >
              Create to Account
            </Link>
          </p>
          <div className="or flex items-center my-[30px] px-[30px]">
            <div className="w-full h-[1px] bg-[#95A0A7] mt-[5px]"></div>
            <span className="text-xl rounded-full text-[#95A0A7] mx-4 my-0">
              or
            </span>
            <div className="w-full h-[1px] rounded-full bg-[#95A0A7] mt-[5px]"></div>
          </div>
          <button className="flex justify-center items-center  text-1xl h-[55px] border border-[#95A0A7] rounded-md w-full mt-4 mb-12">
            <img src={GoogleIcon} className="w-8 mr-4" alt="google-icon" />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
