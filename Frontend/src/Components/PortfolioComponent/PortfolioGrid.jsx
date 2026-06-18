import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import portfolioData from "../../data/ProjectData.js";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import p5 from "../../assets/images/p5.jpg";
import p6 from "../../assets/images/p6.jpg";
import { Link } from "react-router-dom";
function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // const portfolioData = [
  //   {
  //     id: 1,
  //     title: "Digital Agency",
  //     category: "Branding",
  //     image: p1,
  //   },
  //   {
  //     id: 2,
  //     title: "Creative Studio",
  //     category: "UI/UX",
  //     image: p2,
  //   },
  //   {
  //     id: 3,
  //     title: "Business Website",
  //     category: "Development",
  //     image: p3,
  //   },
  //   {
  //     id: 4,
  //     title: "Marketing Agency",
  //     category: "Marketing",
  //     image: p4,
  //   },
  //   {
  //     id: 5,
  //     title: "Startup Landing",
  //     category: "UI/UX",
  //     image: p5,
  //   },
  //   {
  //     id: 6,
  //     title: "Portfolio Design",
  //     category: "Branding",
  //     image: p6,
  //   },
  // ];
  const categories = ["All", "Branding", "UI/UX", "Development", "Marketing"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-6 py-3 rounded-full border transition-all duration-300
              ${
                activeCategory === item
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-[30px] bg-[#e8e8e8]">
                <img
                  src={project.heroImage}
                  alt=""
                  className="w-full transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-gray-500">{project.category}</p>

                  <h3 className="text-3xl font-medium mt-2">{project.title}</h3>
                </div>
                <Link to={`/project/${project.slug}`}>
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;
