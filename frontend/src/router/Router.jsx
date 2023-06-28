import { Routes, Route } from "react-router-dom";
import Connexion from "../pages/Connexion";
import Estimation from "../pages/Estimation";
import Home from "../pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Connexion />} />
      <Route path="/home" element={<Home />} />
      <Route path="/estimation" element={<Estimation />} />
    </Routes>
  );
}

export default Router;
