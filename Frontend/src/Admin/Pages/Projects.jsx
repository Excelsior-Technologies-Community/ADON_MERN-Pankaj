// src/pages/admin/Projects.jsx

import { Link } from "react-router-dom";
import { FiPlus, FiSearch, FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
// const projects = [
//   {
//     id: 1,
//     image: "https://picsum.photos/100",
//     title: "Digital Agency",
//     category: "Web Development",
//     client: "Google",
//     date: "24 Jun 2026",
//     status: "Active",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/101",
//     title: "Restaurant",
//     category: "Branding",
//     client: "Domino's",
//     date: "20 Jun 2026",
//     status: "Completed",
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/102",
//     title: "Real Estate",
//     category: "UI/UX",
//     client: "Square Yards",
//     date: "18 Jun 2026",
//     status: "Pending",
//   },
// ];

// const statusStyle = {
//   Active: "bg-green-500/20 text-green-400",
//   Completed: "bg-blue-500/20 text-blue-400",
//   Pending: "bg-yellow-500/20 text-yellow-400",
// };

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const { data } = await axios.get("http://localhost:5000/api/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    try {
      const isDelete = window.confirm(
        "Are u sure u want to delete this project",
      );

      if (!isDelete) return;

      const token = localStorage.getItem("token");

      const { data } = await axios.delete(
        `http://localhost:5000/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(data.message);

      getProjects();
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  if (loading) {
    return (
      <div className="text-white text-center py-20">Loading Projects...</div>
    );
  }
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>

          <p className="text-slate-400 mt-2">Manage all your projects.</p>
        </div>

        <Link
          to="/admin/projects/add"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          <FiPlus />
          Add Project
        </Link>
      </div>

      {/* Search */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
        <FiSearch className="text-slate-400 text-xl" />

        <input
          type="text"
          placeholder="Search projects..."
          className="bg-transparent outline-none w-full text-white placeholder:text-slate-500"
        />
      </div>

      {/* Desktop Table */}

      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="text-left p-5">Image</th>
              <th className="text-left p-5">Title</th>
              <th className="text-left p-5">Category</th>
              <th className="text-left p-5">Client</th>
              <th className="text-left p-5">Date</th>
              <th className="text-left p-5">Status</th>
              <th className="text-center p-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-t border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="p-5">
                  <img
                    src={project.heroImage}
                    alt=""
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </td>

                <td className="p-5 font-semibold text-white">
                  {project.title}
                </td>

                <td className="p-5 text-slate-300">{project.category}</td>

                <td className="p-5 text-slate-300">{project.client}</td>

                <td className="p-5 text-slate-400">{project.created_at}</td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex justify-center gap-3">
                    <button className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-white transition">
                      <FiEye />
                    </button>

                    <Link to={`/portfolio/${project.slug}`}>
                      <button className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-orange-500 flex items-center justify-center text-white transition">
                        <FiEdit />
                      </button>
                    </Link>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-600 flex items-center justify-center text-white transition"
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

      {/* Mobile Cards */}

      <div className="grid gap-5 lg:hidden">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
          >
            <div className="flex gap-4">
              <img
                src={project.heroImage}
                alt=""
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>

                <p className="text-slate-400 mt-1">{project.category}</p>

                <p className="text-slate-400">{project.client}</p>

                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-xs `}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button className="flex-1 mr-2 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-white transition">
                <FiEye className="mx-auto" />
              </button>

              <Link to={`/portfolio/${project.slug}`}>
                {" "}
                <button className="flex-1 mx-2 py-3 rounded-xl bg-slate-800 hover:bg-orange-500 text-white transition">
                  <FiEdit className="mx-auto" />
                </button>
              </Link>

              <button
                onClick={() => deleteProject(project.id)}
                className="flex-1 ml-2 py-3 rounded-xl bg-slate-800 hover:bg-red-600 text-white transition"
              >
                <FiTrash2 className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
