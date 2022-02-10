import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg rb-navbar-bg">
      <div className="container rb-container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center">
          <Image src={Logo} />{" "}
          <p className="mb-0 mx-2 rb-navber-txt">GoalFi Club</p>
        </div>
        <div className="rb-navbar-btn">
          <span className="rb-navbar-btn-txt">Get Started</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
