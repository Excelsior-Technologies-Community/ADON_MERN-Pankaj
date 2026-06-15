import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "John Carter",
    role: "CEO, StudioX",
    review:
      "The team delivered an outstanding website that exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Founder, Nova",
    review: "Professional, creative and fast. We loved working together.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Marketing Director",
    review: "Our conversions improved dramatically after the redesign.",
  },
];

function Testimonals() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            Testimonials
          </p>

          <h2 className="text-5xl lg:text-7xl font-medium mt-6">
            What clients say
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#1b1b1b] rounded-[35px] p-10 h-full">
                <div className="flex gap-1 text-yellow-400 text-xl">★★★★★</div>

                <p className="text-2xl mt-8 leading-relaxed">"{item.review}"</p>

                <div className="mt-12">
                  <h4 className="text-2xl font-medium">{item.name}</h4>

                  <p className="text-gray-400 mt-2">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonals;
