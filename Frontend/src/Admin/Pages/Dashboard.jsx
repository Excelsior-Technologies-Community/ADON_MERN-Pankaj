import { FiFolder, FiUsers, FiMail, FiTrendingUp } from "react-icons/fi";
import DashboardCard from "../AdminComponents/DashboardCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { FiTool } from "react-icons/fi";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashBoard();
  }, []);

  const getDashBoard = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:5000/api/dashdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDashboard(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-white text-center py-20">Loading Dashboard...</div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>

        <p className="text-slate-400 mt-2">Welcome back 👋</p>
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCard
          title="Projects"
          value={dashboard.stats.totalProjects}
          change="+5 this month"
          icon={<FiFolder />}
        />

        <DashboardCard
          title="Users"
          value={dashboard.stats.totalUsers}
          change="+2 today"
          icon={<FiUsers />}
        />

        <DashboardCard
          title="Messages"
          value="12"
          change="+4 unread"
          icon={<FiMail />}
        />

        <DashboardCard
          title="Services"
          value={dashboard.stats.totalServices}
          change="+15%"
          icon={<FiTool />}
        />
      </div>

      {/* Bottom */}

      <div className="grid xl:grid-cols-2 gap-6 mt-8">
        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          "
        >
          <h2 className="text-white text-xl font-semibold mb-6">
            Recent Projects
          </h2>

          <div className="space-y-5">
            {dashboard.recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />

                  <div>
                    <p className="text-white font-medium">{project.title}</p>

                    <p className="text-slate-400 text-sm">{project.client}</p>
                  </div>
                </div>

                <span className="text-orange-500">{project.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          "
        >
          <h2 className="text-white text-xl font-semibold mb-6">
            Latest Messages
          </h2>
          <div className="space-y-5">
            {dashboard?.recentMessages?.map((message) => (
              <div
                key={message.id}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="text-white font-medium">{message.name}</p>

                  <p className="text-slate-400 text-sm">{message.subject}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    message.is_read
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {message.is_read ? "Read" : "Unread"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
