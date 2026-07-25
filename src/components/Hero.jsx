import React from "react";
import { FaCode } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi2";
import heroImg from "../assets/images/heroImg.png"
const Hero = () => {
  return (
    <div className="heroFlex container">
        <div className="heroText">
            <button><FaCode />Frontend Development</button>
            <h1>Build Modern & <br />Responsive Websites <br />With <span>PixelCode</span></h1>
            <p>
                Learn Html, Css, Sass, JavaScript, React and build <br />
                real-world projects. Step by step, from beginer <br />
                to pro developer
            </p>
            <div className="heroBtn">
                <button>Start Learing <GoArrowRight className="GoArrowRight1" /></button>
                <button>Explore Courses <HiOutlineBookOpen className="GoArrowRight2" /></button>
            </div>

        </div>

        <div className="heroCart">
            
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
};

export default Hero;
