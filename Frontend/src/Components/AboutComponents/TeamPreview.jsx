import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const TeamPreview = () => {
  const team = [
    {
      id: 1,
      name: "John Carter",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/500?img=11",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "UI / UX Designer",
      image: "https://i.pravatar.cc/500?img=32",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Full Stack Developer",
      image: "https://i.pravatar.cc/500?img=15",
    },
    {
      id: 4,
      name: "Emma Johnson",
      role: "Marketing Head",
      image: "https://i.pravatar.cc/500?img=47",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <div>
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Team
            </span>

            <h2 className="text-5xl font-semibold mt-5">Meet Our Experts</h2>
          </div>

          <Link
            to="/team"
            className="flex items-center gap-3 px-7 py-4 rounded-full bg-black text-white hover:bg-orange-500 transition"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt=""
                  className="w-full h-[360px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold">{member.name}</h3>

                <p className="text-orange-500 mt-2">{member.role}</p>

                <div className="flex gap-3 mt-6">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#f3f3f3] flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#f3f3f3] flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#f3f3f3] flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
