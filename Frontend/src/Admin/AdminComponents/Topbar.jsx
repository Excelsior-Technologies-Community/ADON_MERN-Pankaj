import { useState } from "react";
import {
  FiBell,
  FiMenu,
  FiSearch,
  FiChevronDown,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Topbar = ({ setSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#020617]/80 border-b border-slate-800">
      <div className="h-20 px-4 lg:px-8 flex items-center justify-between">
        {/* Left */}

        <div className="flex items-center gap-5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white"
          >
            <FiMenu size={28} />
          </button>

          <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 w-[360px]">
            <FiSearch className="text-slate-500 mr-3" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full outline-none text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          {/* Date */}
          <Link to="/">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl">
              Visit Website
            </button>
          </Link>

          <div className="hidden xl:block text-right">
            <p className="text-white font-medium">Welcome back 👋</p>

            <p className="text-sm text-slate-400">{today}</p>
          </div>

          {/* Notification */}

          <button className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-orange-500 transition">
            <FiBell className="text-white" />

            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-500"></span>
          </button>

          {/* Profile */}

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div className="hidden md:block text-left">
                <h3 className="text-white font-semibold">{user?.name}</h3>

                <p className="text-slate-400 text-sm capitalize">
                  {user?.role}
                </p>
              </div>

              <FiChevronDown
                className={`text-white transition ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}

            {profileOpen && (
              <div className="absolute right-0 top-16 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-5 border-b border-slate-800">
                  <h3 className="text-white font-semibold">{user?.name}</h3>

                  <p className="text-slate-400 text-sm">{user?.email}</p>
                </div>

                <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-slate-800 text-white transition">
                  <FiUser />
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-500 text-red-400 hover:text-white transition"
                >
                  <FiLogOut />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
