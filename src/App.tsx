import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Studio from "./pages/Studio.tsx";
import Pricing from "./pages/Pricing.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;