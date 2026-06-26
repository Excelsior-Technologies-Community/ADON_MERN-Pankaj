import { FiFolder, FiUsers, FiMail, FiTrendingUp } from "react-icons/fi";
import DashboardCard from "../AdminComponents/DashboardCard";

const Dashboard = () => {
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
          value="18"
          change="+5 this month"
          icon={<FiFolder />}
        />

        <DashboardCard
          title="Users"
          value="6"
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
          title="Visitors"
          value="4,250"
          change="+15%"
          icon={<FiTrendingUp />}
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
            <div className="flex justify-between">
              <span className="text-slate-300">Digital Agency</span>

              <span className="text-orange-500">Web</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-300">Restaurant</span>

              <span className="text-orange-500">Branding</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-300">Real Estate</span>

              <span className="text-orange-500">Marketing</span>
            </div>
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
            <div>
              <p className="text-white">John Smith</p>

              <p className="text-slate-400">Need Website Development...</p>
            </div>

            <div>
              <p className="text-white">Rahul Patel</p>

              <p className="text-slate-400">Let's discuss the project...</p>
            </div>

            <div>
              <p className="text-white">Michael</p>

              <p className="text-slate-400">Can you redesign my website...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
