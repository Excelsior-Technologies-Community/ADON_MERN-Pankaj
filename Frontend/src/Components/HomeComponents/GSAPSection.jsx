import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import GSAP from "../../assets/images/GSAP.png";
import phoneImg from "../../assets/images/phnbg.png";

const features = [
  "Smooth Scrolling",
  "Animate Anything including Text",
  "Image Horizontal Scrolling",
  "Pin Anything",
  "Animate Character, Words or Lines",
  "User Interaction",
];

const GsapSection = () => {
  return (
    <section className="bg-[#f2f2f2] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            {/* Heading */}
            <div>
              <h2 className="text-[90px] md:text-[130px] font-semibold text-gray-300 leading-none">
                GSAP
              </h2>

              <h3
                className="text-[80px] md:text-[120px] leading-none italic"
                style={{ fontFamily: "serif" }}
              >
                Animation
              </h3>
            </div>

            {/* Description */}
            <div className="mt-12 max-w-xl">
              <p className="text-3xl leading-tight font-medium">
                Elevate your website's vitality with custom animations
                <span className="text-gray-400 font-normal">
                  {" "}
                  or dynamic pre-built ones to ensure a smooth and captivating
                  user experience!
                </span>
              </p>
            </div>

            {/* Features */}
            <div className="mt-12">
              <h4 className="text-xl font-medium mb-5">Features:</h4>

              <ul className="space-y-3">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <FaCheckCircle className="text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="mt-12 bg-[#ff6b3d] text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition">
              Purchase Now →
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className=" sm:hidden md:hidden  lg:absolute -top-100 right-10 hidden lg:block">
              <img src={GSAP} className="  -rotate-10 " alt="" />
            </div>

            <img
              src={phoneImg}
              alt="GSAP"
              className=" relative  lg:absolute lg:top-1/2 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GsapSection;
