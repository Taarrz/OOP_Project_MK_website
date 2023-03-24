import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registor from "./pages/Registor";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CategoryBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
