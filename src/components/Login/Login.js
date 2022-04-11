import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import GoogleIcon from "./1534129544.png";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // current location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // set email
  const handleEmailField = (event) => {
    setEmail(event.target.value);
  };

  // set password
  const handlePasswordField = (event) => {
    setPassword(event.target.value);
  };
  // using user exectlly location
  if (user) {
    navigate(from, { replace: true });
  }
  // signIn function
  const signInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  // error
  if (error) {
    console.log(error.message);
  }
  //JSX
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full  px-2 md:px-8 flex justify-center">
          <div className="login-form border-2  shadow-lg shadow-yellow-600 border-[#95A0A7] rounded-md w-full lg:w-[500px] mt-[100px] mb-12 flex justify-center px-2 md:px-4 lg:px-[40px]">
            <div className="w-full">
              <form onSubmit={signInUser}>
                <h3 className="text-[35px]  tracking-tight text-[#2A414F] text-center py-[25px]">
                  LogIn
                </h3>
                <div className="form-group w-full mb-[20px]">
                  <label htmlFor="email" className="ml-2">
                    Email
                  </label>
                  <br />
                  <input
                    onBlur={handleEmailField}
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
                    onBlur={handlePasswordField}
                    autoCapitalize="off"
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
                  />
                </div>
                <p className="text-red-500">{error?.message}</p>
                <input
                  autoCapitalize="off"
                  type="submit"
                  value="Login"
                  className="w-full   rounded-md cursor-pointer  h-[55px] text-xl text-[#0E161A] font-semibold bg-[#AA7014] mb-[15px] duration-200 ease-in hover:bg-yellow-600"
                />
              </form>
              <p className="text-sm  text-gray-600 ">
                New to <span className="font-semibold">Emma John Shop</span>?{" "}
                <Link
                  to="/signup"
                  className="text-[#AA7014] hover:text-yellow-400 font-semibold text-xl"
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
      )}
    </>
  );
};

export default Login;
