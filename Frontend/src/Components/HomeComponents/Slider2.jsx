import React from "react";
import s1 from "../../assets/images/s1.jpg";
import s2 from "../../assets/images/s2.jpg";
import s3 from "../../assets/images/s3.jpg";
import s4 from "../../assets/images/s4.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const slides = [s1, s2, s3, s4, s1, s2, s3, s4, s1];

function Slider2() {
  return (
    <div className="max-w-8xl mx-auto">
      {/* Slider */}
      <div className="mt-20 relative mb-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          speed={5000}
          autoplay={{
            reverseDirection: true,
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
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((img, index) => (
            <SwiperSlide>
              <div className="h-[250px] w-[350px] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10 relative mb-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          speed={5000}
          autoplay={{
            reverseDirection: false,
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
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((img, index) => (
            <SwiperSlide>
              <div className="h-[250px] w-[350px] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider2;
