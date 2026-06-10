import React from "react";
import menu from "../../assets/images/menu.png";
import nav from "../../assets/images/nav.png";
import body from "../../assets/images/body.png";
import mobile from "../../assets/images/mobile.png";
import laptop from "../../assets/images/laptop.png";
import tab from "../../assets/images/tab.png";
import pc from "../../assets/images/pc.png";

function FeatureSection() {
  return (
    <section className="bg-[#111] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT CARD */}
          <div className="bg-[#1b1b1b] rounded-[28px] md:rounded-[35px] p-6 md:p-10 lg:p-12 flex flex-col">
            <span className="inline-block self-start bg-black text-white px-5 py-2.5 rounded-full text-sm">
              Header, Footer & Menu
            </span>

            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mt-6 leading-tight">
              Flexible header and menu templates.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl mt-3 leading-snug">
              Choose and customize our awesome headers, footers and menus for
              your website's need.
            </p>

            {/* Images */}
            <div className="flex gap-2 sm:gap-3 bg-[#141414] p-2 sm:p-3 rounded-2xl w-full mt-8 h-[200px] sm:h-[240px] md:h-[280px]">
              <div className="flex flex-col flex-1 gap-2 min-w-0 overflow-hidden">
                <img
                  src={nav}
                  alt=""
                  className="w-full h-[36px] sm:h-[44px] object-contain object-left rounded-xl flex-shrink-0"
                />
                <img
                  src={body}
                  alt=""
                  className="w-full flex-1 object-contain object-left rounded-xl min-h-0"
                />
              </div>
              <div className="w-[120px] sm:w-[145px] md:w-[160px] flex-shrink-0">
                <img
                  src={menu}
                  alt=""
                  className="w-full h-full object-cover object-left rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1b1b1b] rounded-[28px] md:rounded-[35px] p-6 md:p-10 lg:p-12 flex flex-col">
            <span className="inline-block self-start bg-black text-white px-5 py-2.5 rounded-full text-sm">
              Responsive Design
            </span>

            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mt-6 leading-tight">
              Responsive and retina ready{" "}
              <span className="text-gray-400">theme.</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl mt-3 leading-snug">
              Adon automatically detects the screen size and adjusts the content
              accordingly to provide fully responsive and optimised sites.
            </p>

            {/* Devices */}
            <div className="mt-auto pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  src: pc,
                  label: "1920 x 1080px",
                  title: "Desktop Screen Layout",
                },
                {
                  src: laptop,
                  label: "1364 x 768px",
                  title: "Laptop Screen Layout",
                },
                {
                  src: tab,
                  label: "1024 x 768px",
                  title: "Tablet Screen Layout",
                },
                {
                  src: mobile,
                  label: "767 x 365px",
                  title: "Mobile Screen Layout",
                },
              ].map(({ src, label, title }) => (
                <div
                  key={title}
                  className="text-center flex flex-col items-center"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-14 sm:h-16 md:h-20 object-contain"
                  />
                  <div className="mt-3 border border-gray-700 rounded-full py-1.5 px-3 text-white text-xs sm:text-sm whitespace-nowrap">
                    {label}
                  </div>
                  <h4 className="text-white mt-3 text-sm sm:text-base lg:text-lg leading-snug">
                    {title.split(" ").slice(0, 2).join(" ")}
                    <br />
                    {title.split(" ").slice(2).join(" ")}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
