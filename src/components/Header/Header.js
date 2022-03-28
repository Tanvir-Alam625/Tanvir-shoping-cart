import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import Link from "../Link/Link";
const Header = () => {
  const [links, setLinks] = useState([]);
  const [toggle, setToggle] = useState(false);
  useState(() => {
    fetch("link.json")
      .then((response) => response.json())
      .then((data) => setLinks(data));
  }, []);
  const togglerFunction = () => setToggle(true);
  return (
    <div className="relative">
      <nav className=" h-[80px]  flex px-0 justify-between py-0 lg:px-[140px] items-center bg-[#1c2b35]">
        <img src={Logo} alt="nav-logo" className="z-20 pl-6 lg:p-0" />
        <div
          className={`
          flex flex-col lg:flex-row lg:relative lg:mt-0 absolute  pt-12 lg:pt-0 z-10  w-full lg:w-auto bg-[#1c2b35]
          ${toggle ? "mt-[220px]" : "mt-[-300px]"}
          `}
        >
          {links.map((link) => (
            <Link data={link} key={link.id} />
          ))}
        </div>

        <FontAwesomeIcon
          icon={toggle ? faXmark : faBars}
          onClick={() => setToggle(!toggle)}
          className=" text-white  visible lg:hidden  my-6 w-[50px] h-[50px] mr-6 z-40 cursor-pointer duration-500 ease-in  font-light "
        />
        {/* <FontAwesomeIcon icon={faXmark}/> */}
      </nav>
    </div>
  );
};

export default Header;
