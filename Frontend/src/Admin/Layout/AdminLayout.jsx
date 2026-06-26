import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../AdminComponents/Sidebar";
import Topbar from "../AdminComponents/Topbar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 lg:ml-72">
        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
