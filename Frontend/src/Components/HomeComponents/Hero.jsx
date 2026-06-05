import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import s1 from "../../assets/images/showcase1.jpg";
import s2 from "../../assets/images/showcase2.jpg";
import s3 from "../../assets/images/showcase3.jpg";
import s4 from "../../assets/images/showcase4.jpg";
import "swiper/css";

const features = [
  {
    number: "32+",
    title: "High quality demo templates",
  },
  {
    number: "44+",
    title: "Necessary inner pages",
  },
  {
    number: "GSAP",
    title: "Smooth animations",
  },
  {
    number: "350+",
    title: "Creative sections",
  },
];

const slides = [s1, s2, s3, s4, s1, s2, s3, s4];

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center pt-20 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-none">
          Build unlimited sites
          <br />
          with Adon pre-made
          <br />
          templates
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">
          <button className="bg-[#ff6b3d] px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Purchase Now →
          </button>

          <p className="text-gray-400 text-sm">
            Life-time license, free updates
            <br />
            and 6 months of fast support.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="border-t border-gray-800 pt-5">
              <h2 className="text-5xl font-semibold">{item.number}</h2>

              <p className="text-gray-400 mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="mt-20 relative mb-5">
        {/* Shadow Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10"></div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {slides.map((img, index) => (
            <SwiperSlide>
              <div className="h-[220px] overflow-hidden">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
