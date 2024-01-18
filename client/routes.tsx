import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home/HomePage";
import ProjectPage from "./components/ProjectPage";

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/projects/:project" element={<ProjectPage />} />
  </Route>,
);
