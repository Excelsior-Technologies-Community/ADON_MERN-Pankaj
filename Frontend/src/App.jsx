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
function App() {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />

          <Route path="projects/add" element={<AddProject />} />

          <Route path="projects/edit/:id"  element={<EditProject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
