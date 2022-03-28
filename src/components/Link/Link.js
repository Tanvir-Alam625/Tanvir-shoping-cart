import React from "react";

const Link = ({ data }) => {
  const { link, name } = data;
  const linkStyle =
    "text-white decoration-clone ml-[36px] mb-4 lg:mb-0 border-b last:border-0 lg:border-none text-xl hover:text-[#ffa500]";
  return (
    <a className={linkStyle} href={link}>
      {name}
    </a>
  );
};

export default Link;
