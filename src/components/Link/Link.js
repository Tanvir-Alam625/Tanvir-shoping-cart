import React from "react";

const Link = ({ data }) => {
  const { link, name } = data;
  const linkStyle =
    "text-white decoration-clone ml-[36px] text-xl hover:text-[#ffa500]";
  return (
    <a className={linkStyle} href={link}>
      {name}
    </a>
  );
};

export default Link;
