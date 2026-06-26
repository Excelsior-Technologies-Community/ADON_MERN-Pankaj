import {
  FiHome,
  FiFolder,
  FiPlusSquare,
  FiMail,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FiHome size={20} />,
      path: "/admin",
    },
    {
      title: "Projects",
      icon: <FiFolder size={20} />,
      path: "/admin/projects",
    },
    {
      title: "Add Project",
      icon: <FiPlusSquare size={20} />,
      path: "/admin/projects/add",
    },
    {
      title: "Messages",
      icon: <FiMail size={20} />,
      path: "/admin/messages",
    },
    {
      title: "Settings",
      icon: <FiSettings size={20} />,
      path: "/admin/settings",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-all duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-72
        bg-[#0F172A]
        border-r
        border-slate-800
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >
        {/* Top */}

        <div>
          {/* Logo */}

          <div className="h-20 border-b border-slate-800 flex items-center justify-between px-6">
            <img src={logo} alt="logo" className="w-32" />

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Navigation */}

          <div className="p-5 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff6b3d] to-orange-500 text-white shadow-lg"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }
                  `
                }
              >
                {item.icon}

                {item.title}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 p-5">
          <div className="flex items-center gap-4">
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-amber-500
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-xl
              "
            >
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <h3 className="text-white font-semibold">{user?.name}</h3>

              <p className="text-slate-400 text-sm">{user?.role}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="
            mt-6
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-3
            rounded-xl
            border
            border-red-500
            text-red-400
            hover:bg-red-500
            hover:text-white
            transition
            "
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
