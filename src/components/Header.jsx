import React from "react";
import { IoLanguage } from "react-icons/io5";
import { FiUser, FiSun } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import logoImg from "../assets/svg/logo_light.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <div className="nav_Left">
            <div className="navText">
              <img src={logoImg} alt="" />
              <h2>PixelCode</h2>
            </div>
            <div className="inputBg">
              <LuSearch className="search" />
              <input type="text" placeholder="Search..." />
              <div className="ctrlBtn">
                <button>Ctrl</button>
                <button>K</button>
              </div>
            </div>
          </div>
          <div className="nav_Center">
            <ul>
              <li>
                <a href="#">Html</a>
              </li>
              <li>
                <a href="#">Css</a>
              </li>
              <li>
                <a href="#">Sass</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">More...</a>
              </li>
            </ul>
          </div>
          <div className="nav_right">
            <button className="btnIcon1">
              <FiSun />
              <span className="btnText1">Change website color</span>
            </button>
            <button className="btnIcon2">
              <IoLanguage />
              <span className="btnText2">Change Language</span>
            </button>
            <button className="btnIcon3">
              <FiUser />
              <span className="btnText3">Sign Up</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
