import { FiBriefcase, FiUsers, FiAward, FiCalendar } from "react-icons/fi";

const Stats = ({ about }) => {
  const stats = [
    {
      icon: <FiCalendar />,
      value: about?.experience,
      title: "Years Experience",
      desc: "Delivering excellence for years.",
    },
    {
      icon: <FiBriefcase />,
      value: about?.projects_completed,
      title: "Projects Completed",
      desc: "Successfully delivered projects.",
    },
    {
      icon: <FiAward />,
      value: about?.happy_clients,
      title: "Happy Clients",
      desc: "Building long-term relationships.",
    },
    {
      icon: <FiUsers />,
      value: about?.team_members,
      title: "Team Members",
      desc: "Professional creative experts.",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Numbers
          </span>

          <h2 className="text-5xl font-semibold mt-5">We Believe In Results</h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Our journey is measured by successful projects, satisfied clients
            and years of experience.
          </p>
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              border
              border-gray-100
              group
              "
            >
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-orange-100
                text-orange-500
                text-3xl
                flex
                items-center
                justify-center
                group-hover:bg-orange-500
                group-hover:text-white
                transition
                "
              >
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold mt-8">{item.value}</h2>

              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>

              <p className="text-gray-500 mt-4 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
