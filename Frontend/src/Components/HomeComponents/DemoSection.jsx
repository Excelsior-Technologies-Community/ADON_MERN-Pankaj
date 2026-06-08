import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DemoSection = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".word", {
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.2,
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
    <section className="bg-[#f5f5f5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Badge */}
          <div className="col-span-1">
            <span className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm">
              pre-built demos
            </span>
          </div>

          {/* Center Number */}
          <div className="flex justify-center col-span-1">
            <h2 className="text-[120px] md:text-[180px] lg:text-[220px] leading-none font-light">
              32+
            </h2>
          </div>

          {/* Right Content */}
          <div ref={titleRef} className="col-span-3 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight">
              <span className="word inline-block">Best-in-class</span>{" "}
              <span className="word inline-block text-gray-400">designs</span>
              <br />
              <span className="word inline-block">to get you started.</span>
            </h2>

            <p className="mt-8 text-gray-600 max-w-md text-lg mx-auto">
              Award-winning design collection. Install any demo or template with
              a single click. You can mix and match all the demos and templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
