import React from "react";

import img1 from "../../assets/images/round1.jpg";
import img2 from "../../assets/images/round2.png";
import img3 from "../../assets/images/round3.png";

function SupportSection() {
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid lg:grid-cols-[320px_440px_1fr] gap-8">
          {/* Card 1 */}
          <div className="bg-black rounded-[40px] p-12 flex flex-col justify-between min-h-[500px]">
            <p className="text-white text-2xl">Contact</p>

            <div>
              <h3 className="text-white text-5xl font-medium leading-none">
                Dedicated
                <br />
                Team
              </h3>

              {/* Images */}
              <div className="flex mt-10">
                <img
                  src={img1}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-2 border-black"
                />

                <img
                  src={img2}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-2 border-black -ml-4"
                />

                <img
                  src={img3}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-2 border-black -ml-4"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[40px] p-12 min-h-[500px] flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-medium leading-tight">
                Online
                <br />
                Documentation
              </h3>

              <p className="text-gray-700 text-2xl mt-10 leading-relaxed">
                Nope, you can have as many requests or project goals as you
                want! We'll keep supporting you.
              </p>
            </div>

            <button className="bg-black text-white px-10 py-5 rounded-full text-2xl w-fit">
              Learn More →
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[50px] lg:text-[70px] font-medium leading-[0.9]">
              Dedicated
              <br />
              fast customer
              <br />
              support
            </h2>

            <p className="text-gray-700 text-xl mt-10 max-w-xl">
              Our support team will get assistance from AI-powered suggestions,
              making it quicker than ever to handle support requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
