import React from "react";
import { useNavigate } from "react-router-dom";
import slider from "./austin-wade-AoYT0ArTTmg-unsplash.jpg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row  justify-between py-6 lg:py-[100px] px-6 lg:px-[140px]">
      <div className="slider-info order-2 lg:order-1 flex flex-col justify-center items-start">
        <small className="text-sm text-[#FF9900] font-semibold  tracking-tight ">
          Sale up to 70% off
        </small>
        <h2 className="text-2xl text-[#1C2B35] tracking-tight md:text-5xl font-semibold  mt-[50px] md:mt-[80px] ">
          New Collection For Fall
        </h2>
        <p className=" text-[#2A414F] tracking-tight mt-[10px]">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <div className="slider-btn">
          <button
            className="uppercase bg-[#FF9900] text-[#0E161A] font-semibold hover:bg-yellow-600 duration-200 ease-in-out text-xl py-[15px] px-[30px]  mt-[70px]"
            onClick={() => navigate("/")}
          >
            show now
          </button>
        </div>
      </div>
      <div className="slider-img order-1 lg:order-2 relative rounded-md">
        <img
          src={slider}
          alt="slider-img"
          className="md:w-full lg:w-[450px] h-full md:h-[630px] rounded-md object-cover "
        />
      </div>
    </div>
  );
};

export default Home;
