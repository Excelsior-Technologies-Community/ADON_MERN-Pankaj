import React from "react";

const TemplateLibrary = () => {
  return (
    <section className="bg-[#f4f4f4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h2
              style={{ fontFamily: "Cormorant Garamond" }}
              className="font-editorial text-[70px] md:text-[90px] leading-none"
            >
              Template Library.
            </h2>

            <h3 className="text-[60px] md:text-[90px] font-medium leading-[0.9] mt-2">
              jump-start your
              <br />
              design.
            </h3>

            <div className="mt-12">
              <h1
                style={{ fontFamily: "Cormorant Garamond" }}
                className="text-[180px] md:text-[280px] font-black leading-none "
              >
                40
              </h1>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              The ultimate collection crafted by world-class designers. Import a
              pre-built section block with a single click or save your own
              custom block to re-use on other pages. Build different section
              blocks to jump start your design phase and create unique
              combinations with ease.
            </p>

            <button className="mt-10 bg-black text-white px-10 py-5 rounded-full w-fit text-lg font-medium hover:bg-neutral-800 transition">
              Purchase Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateLibrary;
