import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const AboutHero = ({ about }) => {
  return (
    <section className="bg-[#0B1020] text-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mt-6">
              {about?.hero_title}
            </h1>

            <p className="text-slate-300 text-lg leading-8 mt-8 max-w-xl">
              {about?.hero_description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center gap-3 hover:scale-105 transition"
              >
                Let's Work Together
                <FaArrowRight />
              </Link>

              <button className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-slate-500 flex items-center justify-center hover:bg-white hover:text-black transition">
                  <FaPlay />
                </div>

                <span className="text-slate-300">Watch Our Story</span>
              </button>
            </div>

            {/* Clients */}

            <div className="flex items-center gap-5 mt-12">
              <div className="flex -space-x-4">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  className="w-12 h-12 rounded-full border-4 border-[#0B1020]"
                />

                <img
                  src="https://i.pravatar.cc/100?img=2"
                  className="w-12 h-12 rounded-full border-4 border-[#0B1020]"
                />

                <img
                  src="https://i.pravatar.cc/100?img=3"
                  className="w-12 h-12 rounded-full border-4 border-[#0B1020]"
                />

                <img
                  src="https://i.pravatar.cc/100?img=4"
                  className="w-12 h-12 rounded-full border-4 border-[#0B1020]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500">100+</h3>

                <p className="text-slate-400">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src={about?.hero_image}
              className="rounded-[40px] shadow-2xl border border-orange-500/20"
            />

            <div className="absolute -bottom-8 left-10 bg-[#1A2238] rounded-3xl px-8 py-6 shadow-xl">
              <h2 className="text-4xl font-bold text-orange-500">
                {about?.experience}
              </h2>

              <p className="text-slate-300 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
