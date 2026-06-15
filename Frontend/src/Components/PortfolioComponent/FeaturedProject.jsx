import React from "react";
import { FaArrowRight } from "react-icons/fa";

import featuredImg from "../../assets/images/p5.jpg";

function FeaturedProject() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Label */}
        <p className="uppercase tracking-[4px] text-sm text-gray-500">
          Featured Project
        </p>

        {/* Image */}
        <div className="mt-10 overflow-hidden rounded-[40px]">
          <img
            src={featuredImg}
            alt=""
            className="w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <div>
            <h2 className="text-5xl lg:text-7xl font-medium leading-[0.95]">
              Modern Digital
              <br />
              Experience
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
              A complete branding and website design project focused on creating
              a premium digital experience for modern businesses.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <p className="text-gray-500">Client</p>

                <h4 className="text-2xl mt-2">Creative Studio</h4>
              </div>

              <div>
                <p className="text-gray-500">Category</p>

                <h4 className="text-2xl mt-2">Branding & UI/UX</h4>
              </div>

              <div>
                <p className="text-gray-500">Year</p>

                <h4 className="text-2xl mt-2">2026</h4>
              </div>
            </div>

            <button className="mt-12 lg:mt-10 w-fit flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:translate-x-2 transition-all duration-300">
              View Project
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
