import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: 150,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    number: 50,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    number: 10,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 99,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

function StatsSection() {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((item, index) => {
      const targetValue = stats[index].number;

      gsap.fromTo(
        item,
        {
          innerText: 0,
        },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power2.out",
          snap: {
            innerText: 1,
          },
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
          onUpdate: function () {
            item.innerHTML =
              Math.ceil(this.targets()[0].innerText) + stats[index].suffix;
          },
        },
      );
    });
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-28">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h2
                ref={(el) => (statsRef.current[index] = el)}
                className="text-6xl lg:text-8xl font-medium"
              >
                0
              </h2>

              <p className="text-gray-500 mt-4 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
