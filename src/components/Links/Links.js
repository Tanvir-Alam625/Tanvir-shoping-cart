import React from "react";
import { Link } from "react-router-dom";

const Links = ({ data, togglefun }) => {
  const { link, name } = data;
  const linkStyle =
    "text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]";
  return (
    <Link to={link} className={linkStyle} onClick={togglefun}>
      {name}
    </Link>
  );
};

export default Links;
