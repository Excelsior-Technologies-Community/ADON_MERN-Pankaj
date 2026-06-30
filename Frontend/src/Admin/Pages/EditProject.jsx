import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiTrash2, FiUploadCloud } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [heroImage, setHeroImage] = useState(null);

  const [gallery, setGallery] = useState([]);
  const [deletedImg, setDeletedImg] = useState([]);

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

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `http://localhost:5000/api/projects/id/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const project = data.project;

      setFormData({
        slug: project.slug || "",
        title: project.title || "",
        category: project.category || "",
        client: project.client || "",
        year: project.year || "",
        duration: project.duration || "",
        description: project.description || "",
        challenge: project.challenge || "",
        solution: project.solution || "",

        services: data.services.map((item) => item.service_name).join(", "),

        traffic: project.traffic || "",
        conversions: project.conversions || "",
        engagement: project.engagement || "",
      });

      setHeroImage(project.heroImage);

      setGallery(data.gallery.map((item) => item.image_url));
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to load project");
    } finally {
      setLoading(false);
    }
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

  const handleHero = (e) => {
    setHeroImage(e.target.files[0]);
  };

  const handleGallery = (e) => {
    setGallery(Array.from(e.target.files));
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

      gallery.forEach((img) => {
        if (img instanceof File) {
          data.append("gallery", img);
        }
      });
      data.append("deletedImg", JSON.stringify(deletedImg));

      const res = await axios.put(
        `http://localhost:5000/api/projects/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(res.data.message);

      navigate("/admin/projects");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const removeGalleryImage = (index) => {
    const removedImg = gallery[index];
    setDeletedImg((prev) => [...prev, removedImg]);
    setGallery((prev) => prev.filter((_, i) => i !== index));
  };

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Edit Project</h1>

        <p className="text-slate-400 mt-2">Update your portfolio project.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Image */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">Hero Image</h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={50} />

            <p className="text-slate-300 mt-4">Change Hero Image</p>

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

        {/* Gallery */}

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">
            Gallery Images
          </h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-48 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={45} />

            <p className="text-slate-300 mt-3">Upload New Gallery Images</p>

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
                    src={img instanceof File ? URL.createObjectURL(img) : img}
                    alt=""
                    className="rounded-xl h-40 w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition"
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
        "
          >
            {loading ? "Updating..." : "Update Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
