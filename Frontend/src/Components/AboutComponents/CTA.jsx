import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-[#0B1020] overflow-hidden relative">
      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] px-10 lg:px-20 py-20 text-center shadow-2xl">
          <span className="uppercase tracking-[4px] text-orange-100 font-semibold">
            Let's Work Together
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
            Ready To Build
            <br />
            Your Dream Website?
          </h2>

          <p className="text-orange-100 text-lg leading-8 mt-8 max-w-3xl mx-auto">
            Whether you're launching a startup, redesigning your business
            website or building a custom web application, we're here to turn
            your ideas into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
