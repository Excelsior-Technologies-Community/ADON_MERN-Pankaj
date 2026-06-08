import React from "react";
import demos from "../../data/demos";
const DemoGrid = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-[1800px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {demos.map((demo) => (
            <div key={demo.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="bg-[#e8e8e8] p-6 rounded-2xl overflow-hidden">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="flex justify-center items-center gap-3 mt-8">
                <h3 className="text-xl font-medium text-black">{demo.title}</h3>

                {demo.badge && (
                  <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-lg">
                    {demo.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoGrid;
