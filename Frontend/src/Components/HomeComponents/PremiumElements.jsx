import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  FaUser,
  FaSearch,
  FaImage,
  FaQuoteRight,
  FaBars,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const elements = [
  { title: "Icon Box", icon: <FaBars /> },
  { title: "Portfolio", icon: <FaImage /> },
  { title: "Testimonials", icon: <FaQuoteRight /> },
  { title: "Heading", icon: <FaBars /> },
  { title: "Team Member", icon: <FaUser /> },
  { title: "Live Site Search", icon: <FaSearch /> },
  { title: "Accordion", icon: <FaBars /> },
  { title: "Contact Form", icon: <FaUser /> },
  { title: "Creative Offcanvas", icon: <FaBars /> },
  { title: "Lottie Animation", icon: <FaQuoteRight /> },
  { title: "Pricing Table", icon: <FaBars /> },
  { title: "Advance Button", icon: <FaBars /> },
];

const PremiumElements = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".word", {
        opacity: 0,
        x: -100,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="bg-[#111] py-24 overflow-hidden">
      {/* Heading */}
      <div ref={titleRef} className="max-w-5xl mx-auto text-center px-5">
        <h2 className="text-white text-6xl md:text-8xl font-medium word">
          80+ Premium
        </h2>

        <h2
          className="text-white text-6xl md:text-8xl italic leading-none word"
          style={{ fontFamily: "Georgia, serif" }}
        >
          elements
        </h2>

        <h2 className="text-white text-6xl md:text-8xl font-medium word">
          included
        </h2>

        <p className="text-gray-500 text-lg md:text-xl max-w-4xl mx-auto mt-8 word">
          Take advantage of the complete set of dedicated tools that help you
          generate more traffic, leads and conversions. You don't need dozens of
          plugins anymore.
        </p>
      </div>

      {/* Slider 1 */}
      <div className="mt-20">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {[...elements, ...elements].map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="bg-[#1c1c1c] rounded-3xl px-8 py-7 min-w-[320px] flex items-center gap-5">
                <span className="text-white text-2xl">{item.icon}</span>

                <h3 className="text-gray-400 text-2xl">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider 2 */}
      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {[...elements, ...elements].map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="bg-[#1c1c1c] rounded-3xl px-8 py-7 min-w-[320px] flex items-center gap-5">
                <span className="text-white text-2xl">{item.icon}</span>

                <h3 className="text-gray-400 text-2xl">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider 3 */}
      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {[...elements, ...elements].map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="bg-[#1c1c1c] rounded-3xl px-8 py-7 min-w-[320px] flex items-center gap-5">
                <span className="text-white text-2xl">{item.icon}</span>

                <h3 className="text-gray-400 text-2xl">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PremiumElements;
