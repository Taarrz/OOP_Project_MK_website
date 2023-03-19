import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import FilterBar from "./components/Filter";
import ProductCard from "./components/ProductCard";
import Login from "./pages/Login";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
