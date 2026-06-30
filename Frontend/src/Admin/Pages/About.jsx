import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
const About = () => {
  const [heroImage, setHeroImage] = useState(null);
  const [aboutImage, setAboutImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAbout();
  }, []);

  const [formData, setFormData] = useState({
    hero_title: "",
    hero_description: "",
    about_title: "",
    about_description: "",
    mission: "",
    vision: "",
    experience: "",
    projects_completed: "",
    happy_clients: "",
    team_members: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHero = (e) => {
    setHeroImage(e.target.files[0]);
  };

  const handleAbout = (e) => {
    setAboutImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (heroImage instanceof File) {
        data.append("heroImage", heroImage);
      }

      if (aboutImage instanceof File) {
        data.append("aboutImage", aboutImage);
      }

      const res = await axios.put("http://localhost:5000/api/about", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      getAbout();
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Update Failed");
    } finally {
      setLoading(false);
    }
  };
  const getAbout = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("http://localhost:5000/api/about");

      const about = data.about;

      setFormData({
        hero_title: about.hero_title,
        hero_description: about.hero_description,
        about_title: about.about_title,
        about_description: about.about_description,
        mission: about.mission,
        vision: about.vision,
        experience: about.experience,
        projects_completed: about.projects_completed,
        happy_clients: about.happy_clients,
        team_members: about.team_members,
      });

      setHeroImage(about.hero_image);

      setAboutImage(about.about_image);
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to load About");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">About Page</h1>

        <p className="text-slate-400 mt-2">Update your About section.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Image */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">Hero Image</h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={50} />

            <p className="text-slate-300 mt-4">Upload Hero Image</p>

            <input type="file" hidden accept="image/*" onChange={handleHero} />
          </label>

          {heroImage && (
            <img
              src={
                heroImage instanceof File
                  ? URL.createObjectURL(heroImage)
                  : heroImage
              }
              alt=""
              className="mt-6 rounded-xl h-56 object-cover"
            />
          )}
        </div>
        {/* About Image */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">About Image</h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={50} />

            <p className="text-slate-300 mt-4">Upload About Image</p>

            <input type="file" hidden accept="image/*" onChange={handleAbout} />
          </label>

          {aboutImage && (
            <img
              src={
                aboutImage instanceof File
                  ? URL.createObjectURL(aboutImage)
                  : aboutImage
              }
              alt=""
              className="mt-6 rounded-xl h-56 object-cover"
            />
          )}
        </div>{" "}
        {/* Details */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-8">
            About Details
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-slate-300 mb-2 block">Hero Title</label>

              <input
                type="text"
                name="hero_title"
                value={formData.hero_title}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">About Title</label>

              <input
                type="text"
                name="about_title"
                value={formData.about_title}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">Experience</label>

              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">
                Projects Completed
              </label>

              <input
                type="text"
                name="projects_completed"
                value={formData.projects_completed}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">Happy Clients</label>

              <input
                type="text"
                name="happy_clients"
                value={formData.happy_clients}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">Team Members</label>

              <input
                type="text"
                name="team_members"
                value={formData.team_members}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>
        {/* Textareas */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 space-y-6">
          <div>
            <label className="text-slate-300 mb-2 block">
              Hero Description
            </label>

            <textarea
              rows="5"
              name="hero_description"
              value={formData.hero_description}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
            />
          </div>

          <div>
            <label className="text-slate-300 mb-2 block">
              About Description
            </label>

            <textarea
              rows="5"
              name="about_description"
              value={formData.about_description}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
            />
          </div>

          <div>
            <label className="text-slate-300 mb-2 block">Mission</label>

            <textarea
              rows="4"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
            />
          </div>

          <div>
            <label className="text-slate-300 mb-2 block">Vision</label>

            <textarea
              rows="4"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
            />
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update About"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
