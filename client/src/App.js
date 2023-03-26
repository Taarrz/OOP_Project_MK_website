import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registor from "./pages/Registor";
import Header from "./components/Header";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
