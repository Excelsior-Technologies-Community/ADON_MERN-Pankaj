import React from "react";
import { FaArrowRight } from "react-icons/fa";

function CTASection() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="bg-black text-white rounded-[40px] p-10 md:p-16 lg:p-24 text-center">
          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            Let's Work Together
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium mt-8 leading-[0.95]">
            Let's Build Something
            <br />
            Amazing Together
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mt-8">
            Ready to transform your ideas into a powerful digital experience?
            Let's create something that stands out.
          </p>

          <button className="mt-12 bg-white text-black px-8 py-4 rounded-full inline-flex items-center gap-3 font-medium hover:translate-x-2 transition-all duration-300">
            Start a Project
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
