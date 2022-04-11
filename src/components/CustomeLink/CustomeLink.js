import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomeLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "#ffa500" : "#fff" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomeLink;
