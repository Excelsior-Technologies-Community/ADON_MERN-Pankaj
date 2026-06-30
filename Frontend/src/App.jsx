import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ProjectDetail from "./Pages/ProjectDetail";
import AuthPage from "./Pages/AuthPage";
import AdminLayout from "./Admin/Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";
import Dashboard from "./Admin/Pages/Dashboard";
import Projects from "./Admin/Pages/Projects";
import AddProject from "./Admin/Pages/AddProject";
import EditProject from "./Admin/Pages/EditProject";
import Help from "./Pages/Help";
import { Toaster } from "react-hot-toast";
import Messages from "./Admin/Pages/Messages";
import ViewMessages from "./Admin/Pages/ViewMessages";
import About from "./Admin/Pages/About";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/help" element={<Help />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/add" element={<AddProject />} />
          <Route path="projects/edit/:id" element={<EditProject />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/view/:id" element={<ViewMessages />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
