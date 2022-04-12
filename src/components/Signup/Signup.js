import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "./1534129544.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
// import { sendEmailVerification } from "firebase/auth";
import { useSendEmailVerification } from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [myError, setMyError] = useState("");
  // auth state
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  //verify email
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  // set email
  const handleEmailField = (event) => {
    setEmail(event.target.value);
  };

  // set password
  const handlePasswordField = (event) => {
    setPassword(event.target.value);
  };
  // set Confirm password
  const handleCPasswordField = (event) => {
    setCPassword(event.target.value);
  };
  // navigate
  if (user) {
    navigate("/shipment");
  }
  if (error) {
    setMyError(error);
  }

  // const verifiEmail = () => {
  //   // sendEmailVerification(auth.currentUser).then(() => {
  //   //   console.log("email send");
  //   //   console.log(email);
  //   // });
  //   // console.log(email);

  // };
  // form submit function
  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password !== cPassword) {
      setMyError("your Password two did not match!");
      return;
    }
    if (password.length > 8) {
      setMyError("Password length must be  8 character!");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(email);
    // await verifiEmail();
  };
  //JSX
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full  px-2 md:px-8 flex justify-center">
          <div className="login-form border-2  border-[#95A0A7] rounded-md w-full md:w-[500px] mt-[100px] mb-12 flex justify-center px-2 md:px-4 lg:px-[40px]">
            <div className="w-full">
              <form onSubmit={handleCreateUser}>
                <h3 className="text-[35px]  tracking-tight text-[#2A414F] text-center py-[25px]">
                  SignUp
                </h3>
                <div className="form-group w-full mb-[20px]">
                  <label htmlFor="email" className="ml-2">
                    Email
                  </label>
                  <br />
                  <input
                    required
                    autoCapitalize="off"
                    type="email"
                    name="email"
                    id="email"
                    onBlur={handleEmailField}
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
                    required
                    autoCapitalize="off"
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
                  />
                </div>
                <div className="form-group w-full mb-[20px]">
                  <label htmlFor="password" className="ml-2">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    required
                    onBlur={handleCPasswordField}
                    autoCapitalize="off"
                    type="password"
                    name="cPassword"
                    id="cPassword"
                    className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
                  />
                </div>
                <p className="text-red-400 font-semibold">{myError}</p>
                <input
                  type="submit"
                  value="Signup"
                  className="w-full   rounded-md cursor-pointer  h-[55px] text-xl text-[#0E161A] font-semibold bg-[#FFE0B3] mb-[15px] duration-200 ease-in hover:bg-yellow-600"
                />
              </form>
              <p className="text-sm  text-gray-600 ">
                Already signup{" "}
                <span className="font-semibold">Emma John Shop</span>?{" "}
                <Link
                  to="/login"
                  className="text-[#FFE0B3] hover:text-yellow-400 font-semibold text-xl"
                  element={<Signup />}
                >
                  Login
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

export default Signup;
