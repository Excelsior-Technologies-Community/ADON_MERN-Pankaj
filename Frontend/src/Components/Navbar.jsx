import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobilePages, setMobilePages] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white h-[90px] flex items-center top-0 z-50 sticky">
        <div className="max-w-7xl mx-auto px-5 w-full flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-12 font-medium">
            <li className="cursor-pointer text-white hover:text-[#ff6b3d] transition-colors duration-300">
              Home
            </li>

            <li className="cursor-pointer text-white hover:text-[#ff6b3d] transition-colors duration-300">
              <Link to="/portfolio"> Portfolio</Link>
            </li>

            {/* Pages Dropdown */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-2 text-white hover:text-[#ff6b3d] transition-colors duration-300">
                Pages
                <AiOutlineDown
                  size={12}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </div>

              <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-black text-white rounded-lg shadow-xl w-56 py-2">
                  {["About Us", "Blog", "Team", "FAQ"].map((item) => (
                    <li
                      key={item}
                      className="px-5 py-3 hover:text-[#ff6b3d] hover:pl-7 transition-all duration-300 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="cursor-pointer text-white hover:text-[#ff6b3d] transition-colors duration-300">
              Help
            </li>
          </ul>

          {/* Buy Button */}
          <div className="hidden lg:block">
            <button className="group relative overflow-hidden bg-white rounded-full px-8 py-4">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-[#ff6b3d] transition-all duration-500 ease-out group-hover:h-full"></span>

              <span className="relative z-10 flex items-center gap-3 text-black group-hover:text-white transition-colors duration-500">
                <BsBasket3 />
                Buy Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden" onClick={() => setOpenMenu(true)}>
            <AiOutlineMenu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-bold text-xl">Menu</h2>

          <button onClick={() => setOpenMenu(false)}>
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="p-5 text-black">
          <li className="py-4 border-b hover:text-[#ff6b3d] transition-colors cursor-pointer">
            Home
          </li>

          <li className="py-4 border-b hover:text-[#ff6b3d] transition-colors cursor-pointer">
            <Link to="/portfolio"> Portfolio</Link>
          </li>

          {/* Mobile Pages */}
          <li className="border-b">
            <button
              onClick={() => setMobilePages(!mobilePages)}
              className="w-full flex justify-between items-center py-4 hover:text-[#ff6b3d] transition-colors"
            >
              Pages
              <AiOutlineDown
                className={`transition-transform duration-300 ${
                  mobilePages ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobilePages ? "max-h-60" : "max-h-0"
              }`}
            >
              <ul className="pl-5 pb-3">
                {["About Us", "Blog", "Team", "FAQ"].map((item) => (
                  <li
                    key={item}
                    className="py-2 hover:text-[#ff6b3d] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="py-4 border-b hover:text-[#ff6b3d] transition-colors cursor-pointer">
            Help
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="p-5">
          <button className="w-full bg-black text-white py-4 rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
