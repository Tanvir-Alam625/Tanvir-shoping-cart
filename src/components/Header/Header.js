import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Logo from "../../images/Logo.svg";
import CustomeLink from "../CustomeLink/CustomeLink";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav className=" h-[80px]  flex px-0 justify-between py-0 lg:px-[140px] items-center bg-[#1c2b35] z-20">
        <Link to="/">
          <img src={Logo} alt="nav-logo" className=" pl-6 lg:p-0" />
        </Link>
        <div
          className={`
          flex flex-col lg:flex-row   mt-[300px] lg:mt-0 absolute lg:static  pt-12 lg:pt-0  w-full lg:w-auto bg-[#1c2b35] z-30 duration-300 ease-in
          ${toggle ? "right-[0px] " : "right-[-100%]"}
          `}
        >
          <CustomeLink
            to="/shop"
            onClick={() => setToggle(!toggle)}
            className="text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]"
          >
            Shop
          </CustomeLink>
          <CustomeLink
            to="/order"
            onClick={() => setToggle(!toggle)}
            className="text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]"
          >
            Order
          </CustomeLink>
          <CustomeLink
            to="/overview"
            onClick={() => setToggle(!toggle)}
            className="text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]"
          >
            Overview
          </CustomeLink>
          <CustomeLink
            to="/inventory"
            onClick={() => setToggle(!toggle)}
            className="text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]"
          >
            Inventory
          </CustomeLink>
          {user ? (
            <button>signOut</button>
          ) : (
            <CustomeLink
              to="/login"
              onClick={() => setToggle(!toggle)}
              className="text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]"
            >
              Login
            </CustomeLink>
          )}
        </div>

        <FontAwesomeIcon
          icon={toggle ? faXmark : faBars}
          onClick={() => setToggle(!toggle)}
          className=" text-white  visible lg:hidden  my-6 w-[50px] h-[50px] mr-6 z-40 cursor-pointer duration-300 ease-in  font-light "
        />
      </nav>
    </div>
  );
};

export default Header;
