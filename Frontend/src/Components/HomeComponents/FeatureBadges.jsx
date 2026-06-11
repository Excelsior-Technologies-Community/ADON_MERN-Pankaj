import React from "react";

import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";

const features = [
  {
    img: icon1,
    title: "Exclusive",
    subtitle: "Author",
  },
  {
    img: icon2,
    title: "Featured",
    subtitle: "Item",
  },
  {
    img: icon3,
    title: "Trendsetter",
    subtitle: "Products",
  },
  {
    img: icon4,
    title: "Weekly Best",
    subtitle: "Seller",
  },
];

function FeatureBadges() {
  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 py-6 px-4 lg:border-r lg:border-gray-700 last:border-r-0"
            >
              <img src={item.img} alt="" className="w-20 h-20 object-contain" />

              <div>
                <h3 className="text-white text-3xl font-medium leading-none">
                  {item.title}
                </h3>

                <p className="text-white text-3xl leading-none mt-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureBadges;
