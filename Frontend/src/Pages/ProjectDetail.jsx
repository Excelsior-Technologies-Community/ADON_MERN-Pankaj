import React from "react";
import { useParams, Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProject();
  }, [slug]);

  const getProject = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:5000/api/projects/${slug}`,
      );
      setProjects({
        ...data.project,

        services: data.services.map((item) => item.service_name),

        gallery: data.gallery.map((item) => item.image_url),
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Project not Found");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <section className="py-40 text-center">
        <h2 className="text-3xl font-semibold">Loading...</h2>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-4xl font-medium">Project Not Found</h2>
      </section>
    );
  }

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Hero Image */}
        <div className="overflow-hidden rounded-[30px]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover"
          />
        </div>

        {/* Header */}
        <div className="mt-16">
          <span className="inline-block px-5 py-2 border border-gray-300 rounded-full">
            {project.category}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium leading-[0.9] mt-8">
            {project.title}
          </h1>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 border-t border-gray-300 pt-12">
          <div>
            <p className="text-gray-500">Client</p>

            <h3 className="text-xl font-medium mt-2">{project.client}</h3>
          </div>

          <div>
            <p className="text-gray-500">Year</p>

            <h3 className="text-xl font-medium mt-2">{project.year}</h3>
          </div>

          <div>
            <p className="text-gray-500">Duration</p>

            <h3 className="text-xl font-medium mt-2">{project.duration}</h3>
          </div>

          <div>
            <p className="text-gray-500">Category</p>

            <h3 className="text-xl font-medium mt-2">{project.category}</h3>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-medium">Services</h2>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.services.map((service, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white rounded-full border border-gray-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mt-20">
          <h2 className="text-4xl lg:text-5xl font-medium">Project Overview</h2>

          <p className="text-lg text-gray-600 leading-relaxed mt-8 max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <div className="bg-white rounded-[25px] p-8">
            <h2 className="text-3xl font-medium">Challenge</h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-white rounded-[25px] p-8">
            <h2 className="text-3xl font-medium">Solution</h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="mt-20">
          <h2 className="text-4xl font-medium mb-10">Results</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[25px] p-8 text-center">
              <h3 className="text-5xl font-medium">{project.traffic}</h3>

              <p className="text-gray-500 mt-4">Traffic Growth</p>
            </div>

            <div className="bg-white rounded-[25px] p-8 text-center">
              <h3 className="text-5xl font-medium">{project.conversions}</h3>

              <p className="text-gray-500 mt-4">Conversions</p>
            </div>

            <div className="bg-white rounded-[25px] p-8 text-center">
              <h3 className="text-5xl font-medium">{project.engagement}</h3>

              <p className="text-gray-500 mt-4">Engagement</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <h2 className="text-4xl font-medium mb-10">Gallery</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-[25px]">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:translate-x-2 transition-all duration-300"
          >
            Back to Portfolio
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
