// src/pages/admin/AddProject.jsx

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    category: "",
    client: "",
    year: "",
    duration: "",
    description: "",
    challenge: "",
    solution: "",
    services: "",
    traffic: "",
    conversions: "",
    engagement: "",
  });
  const [heroImage, setHeroImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  const handleHero = (e) => {
    setHeroImage(e.target.files[0]);
  };

  const handleGallery = (e) => {
    setGallery(Array.from(e.target.files));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,

      ...(name === "title" && {
        slug: value
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""),
      }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      // Text Fields
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Hero Image
      if (heroImage) {
        data.append("heroImage", heroImage);
      }

      // Gallery Images
      gallery.forEach((image) => {
        data.append("gallery", image);
      });

      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:5000/api/projects", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      // Reset Form
      setFormData({
        slug: "",
        title: "",
        category: "",
        client: "",
        year: "",
        duration: "",
        description: "",
        challenge: "",
        solution: "",
        services: "",
        traffic: "",
        conversions: "",
        engagement: "",
      });

      setHeroImage(null);
      setGallery([]);

      navigate("/admin/projects");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add Project</h1>

        <p className="text-slate-400 mt-2">Create a new portfolio project.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">Hero Image</h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={50} />

            <p className="text-slate-300 mt-4">Click to Upload Hero Image</p>

            <input type="file" hidden accept="image/*" onChange={handleHero} />
          </label>

          {heroImage && (
            <img
              src={URL.createObjectURL(heroImage)}
              alt=""
              className="mt-6 rounded-xl h-56 object-cover"
            />
          )}
        </div>

        {/* Gallery */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">
            Gallery Images
          </h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-48 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={45} />

            <p className="text-slate-300 mt-3">Upload Gallery Images</p>

            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handleGallery}
            />
          </label>

          {gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
              {gallery.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="rounded-xl h-40 w-full object-cover"
                  />

                  <button
                    type="button"
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-8">
            Project Details
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              "slug",
              "title",
              "category",
              "client",
              "year",
              "duration",
              "traffic",
              "conversions",
              "engagement",
            ].map((field) => (
              <div key={field}>
                <label className="text-slate-300 capitalize mb-2 block">
                  {field}
                </label>

                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Textareas */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 space-y-6">
          {["description", "challenge", "solution", "services"].map((field) => (
            <div key={field}>
              <label className="text-slate-300 capitalize mb-2 block">
                {field}
              </label>

              <textarea
                rows="5"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="
  px-8
  py-4
  rounded-xl
  bg-gradient-to-r
  from-orange-500
  to-amber-500
  text-white
  font-semibold
  hover:scale-105
  transition
  disabled:opacity-60
  disabled:cursor-not-allowed
  "
          >
            {loading ? "Publishing..." : "Publish Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
