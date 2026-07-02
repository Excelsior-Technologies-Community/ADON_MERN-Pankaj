import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);

      if (image) {
        data.append("image", image);
      }

      const res = await axios.post("http://localhost:5000/api/blog", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);

      navigate("/admin/blogs");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "failed to add");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add Blog</h1>
        <p className="text-slate-400 mt-2">
          Create a new blog post for your website.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Blog Image */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-6">Blog Image</h2>

          <label className="border-2 border-dashed border-slate-700 rounded-2xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-orange-500 transition">
            <FiUploadCloud className="text-orange-500" size={50} />
            <p className="text-slate-300 mt-4">Upload Blog Image</p>

            <input type="file" hidden accept="image/*" onChange={handleImage} />
          </label>

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="mt-6 rounded-xl h-56 object-cover"
            />
          )}
        </div>

        {/* Blog Details */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <h2 className="text-xl text-white font-semibold mb-8">
            Blog Details
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-slate-300 mb-2 block">Blog Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="text-slate-300 mb-2 block">Category</label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500"
                placeholder="e.g. Development"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
          <label className="text-slate-300 mb-2 block">Description</label>

          <textarea
            rows="8"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
            placeholder="Write blog description..."
          />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
