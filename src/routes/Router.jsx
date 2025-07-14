// src/routes/Router.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Logement from "../pages/logement/Logement";
import Error404 from "../pages/error404/Error404";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
