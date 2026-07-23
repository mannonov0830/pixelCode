import React from "react";
import { IoLanguage } from "react-icons/io5";
import { FiUser, FiSun } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";
import logoImg from "../assets/images/letter-p.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <div className="nav_Left">
            <div className="navText">
              <div className="pBg">
                <img src={logoImg} alt="" />
              </div>
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
              <li className="moreIcon">
                <a href="#">More <span><GoChevronDown className="GoChevronDown" /></span></a>
                <div className="dropDown">
                  <ul>
                    <li><a href="#" className="textDrop">Terminal</a></li>
                    <li><a href="#" className="textDrop">GitHup</a></li>
                    <li><a href="#" className="textDrop">Git</a></li>
                  </ul>
                </div>
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
