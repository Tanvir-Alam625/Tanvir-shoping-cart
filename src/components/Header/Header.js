import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import Link from "../Link/Link";
const Header = () => {
  const [links, setLinks] = useState([]);
  useState(() => {
    fetch("link.json")
      .then((response) => response.json())
      .then((data) => setLinks(data));
  }, []);
  return (
    <div className="relative">
      <nav className=" h-[80px] bg-[#1c2b35] flex justify-between py-0 px-[140px] items-center">
        <img src={Logo} alt="nav-logo" />
        <div className="">
          {links.map((link) => (
            <Link data={link} key={link.id} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
