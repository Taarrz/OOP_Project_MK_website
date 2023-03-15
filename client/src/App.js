import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Category from "./pages/Category";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category category={this.props.params.category} />} />
        <Route path="/product/:id" element={<SingleProduct product={this.props.params.product} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
