import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="lista">
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            HOME{" "}
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/shop">
            SHOP{" "}
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/checkOut">
            CHECK-OUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
