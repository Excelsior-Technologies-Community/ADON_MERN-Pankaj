import { FiTarget, FiEye } from "react-icons/fi";

const MissionVision = ({ about }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Purpose
          </span>

          <h2 className="text-5xl font-semibold mt-5">Mission & Vision</h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Everything we build is driven by our commitment to quality,
            innovation and helping businesses grow digitally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Mission */}

          <div className="group bg-gradient-to-br from-orange-500 to-orange-600 rounded-[35px] p-10 text-white hover:shadow-2xl transition duration-500">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl mb-8">
              <FiTarget />
            </div>

            <h2 className="text-4xl font-semibold">Our Mission</h2>

            <p className="mt-8 leading-8 text-lg text-orange-100">
              {about?.mission}
            </p>
          </div>

          {/* Vision */}

          <div className="group bg-[#0B1020] rounded-[35px] p-10 text-white hover:shadow-2xl transition duration-500">
            <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-4xl mb-8">
              <FiEye />
            </div>

            <h2 className="text-4xl font-semibold">Our Vision</h2>

            <p className="mt-8 leading-8 text-lg text-slate-300">
              {about?.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
