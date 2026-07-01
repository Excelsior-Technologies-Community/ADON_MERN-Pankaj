import { FiMonitor, FiSmartphone, FiZap, FiTrendingUp } from "react-icons/fi";

const WhyChoose = () => {
  const features = [
    {
      icon: <FiMonitor />,
      title: "Modern UI/UX",
      description:
        "Beautiful and intuitive interfaces designed to deliver an exceptional user experience.",
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Design",
      description:
        "Every website is optimized to work perfectly across desktop, tablet and mobile devices.",
    },
    {
      icon: <FiZap />,
      title: "Fast Performance",
      description:
        "Optimized code and best development practices ensure blazing fast loading speeds.",
    },
    {
      icon: <FiTrendingUp />,
      title: "SEO Optimized",
      description:
        "Built with search engine optimization in mind to improve visibility and rankings.",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-semibold mt-5">
            We Build More Than Websites
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            We combine creativity, technology and strategy to build digital
            experiences that help businesses grow.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[30px]
              p-8
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              group
              "
            >
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-orange-100
                flex
                items-center
                justify-center
                text-orange-500
                text-3xl
                group-hover:bg-orange-500
                group-hover:text-white
                transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-8">{item.title}</h3>

              <p className="text-gray-500 mt-5 leading-8">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
