import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

const Blogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("http://localhost:5000/api/blog");

      setBlogs(data.data || []);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const deleteBlog = window.confirm("Delete this Blog ?");
    if (!deleteBlog) return;
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.delete(
        `http://localhost:5000/api/blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(data.message);
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "delete failed");
    }
  };

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Blogs</h1>
          <p className="text-slate-400 mt-2">Manage your blog posts.</p>
        </div>

        <Link
          to="/admin/blogs/add"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:scale-105 transition"
        >
          <FiPlus />
          Add Blog
        </Link>
      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        {blogs.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            No blogs found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px]">
              <thead className="bg-slate-800/60">
                <tr className="text-left">
                  <th className="px-6 py-4 text-slate-300 font-medium">
                    Image
                  </th>
                  <th className="px-6 py-4 text-slate-300 font-medium">
                    Title
                  </th>
                  <th className="px-6 py-4 text-slate-300 font-medium">
                    Category
                  </th>
                  <th className="px-6 py-4 text-slate-300 font-medium">
                    Created
                  </th>
                  <th className="px-6 py-4 text-slate-300 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <h3 className="text-white font-medium max-w-[280px] line-clamp-2">
                        {blog.title}
                      </h3>
                    </td>

                    <td className="px-6 py-4 text-slate-300">
                      {blog.category}
                    </td>

                    <td className="px-6 py-4 text-slate-400">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/admin/blogs/edit/${blog.id}`}
                          className="w-10 h-10 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                        >
                          <FiEdit2 />
                        </Link>

                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="w-10 h-10 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
