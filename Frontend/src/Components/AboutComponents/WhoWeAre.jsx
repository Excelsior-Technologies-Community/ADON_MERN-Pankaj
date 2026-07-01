import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WhoWeAre = ({ about }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}

          <div className="relative group">
            <div className="absolute -left-6 -bottom-6 w-40 h-40 border-2 border-dashed border-orange-200 rounded-full"></div>

            <img
              src={about?.about_image}
              alt=""
              className="rounded-[35px] shadow-xl w-full group-hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* Right Content */}

          <div>
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Who We Are
            </span>

            <h2 className="text-5xl lg:text-6xl font-semibold leading-tight mt-5">
              {about?.about_title}
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-8">
              {about?.about_description}
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-orange-500 mt-2"></div>

                <p className="text-gray-600">
                  Creative and modern UI/UX solutions tailored for your
                  business.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-orange-500 mt-2"></div>

                <p className="text-gray-600">
                  High-performance websites optimized for speed and SEO.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-orange-500 mt-2"></div>

                <p className="text-gray-600">
                  Long-term partnership and support after project delivery.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white hover:translate-x-2 transition"
            >
              More About Us
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
