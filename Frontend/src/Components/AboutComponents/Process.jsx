import { AiFillRocket } from "react-icons/ai";
import { FiClipboard, FiCode, FiPenTool, FiSearch } from "react-icons/fi";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      icon: <FiSearch />,
      description:
        "We understand your business goals, audience and project requirements.",
    },
    {
      number: "02",
      title: "Planning",
      icon: <FiClipboard />,
      description:
        "A complete roadmap and strategy is prepared before development starts.",
    },
    {
      number: "03",
      title: "Design",
      icon: <FiPenTool />,
      description:
        "Modern UI/UX is crafted to create an engaging user experience.",
    },
    {
      number: "04",
      title: "Development",
      icon: <FiCode />,
      description:
        "We develop clean, scalable and high-performance applications.",
    },
    {
      number: "05",
      title: "Launch",
      icon: <AiFillRocket />,
      description:
        "Testing, optimization and deployment to ensure a successful launch.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-semibold mt-5">How We Work</h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Every successful project follows a clear process from planning to
            launch.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group text-center">
              {/* Connector */}

              {index !== steps.length - 1 && (
                <div className="hidden xl:block absolute top-10 left-[65%] w-full h-[2px] bg-orange-200"></div>
              )}

              {/* Circle */}

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-orange-500
                text-white
                text-3xl
                flex
                items-center
                justify-center
                mx-auto
                shadow-lg
                group-hover:scale-110
                transition
                "
              >
                {step.icon}
              </div>

              {/* Number */}

              <h3 className="text-orange-500 font-bold text-xl mt-6">
                {step.number}
              </h3>

              {/* Title */}

              <h2 className="text-2xl font-semibold mt-3">{step.title}</h2>

              {/* Description */}

              <p className="text-gray-500 mt-5 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
