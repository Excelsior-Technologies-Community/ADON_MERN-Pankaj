import React from "react";
import { FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 py-24">
        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-medium">
              Adon<span className="text-gray-500">.</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-sm">
              Creating modern digital experiences through design, branding and
              development.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-medium mb-6">Pages</h3>

            <ul className="space-y-4 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-6">Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li>Web Design</li>
              <li>Branding</li>
              <li>Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact</h3>

            <ul className="space-y-4 text-gray-400">
              <li>hello@agency.com</li>
              <li>+91 9876543210</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-5 mt-16">
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaBehance />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaDribbble />
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500">© 2026 All Rights Reserved.</p>

          <p className="text-gray-500">Designed & Developed by You</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
