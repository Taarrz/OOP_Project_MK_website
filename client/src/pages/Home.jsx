import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import FilterBar from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Login from "./Login";
import React from "react";

function Home() {
  return (
    <div className="font-kanit">
      <Header />
      <CategoryBar />
      <FilterBar />
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-3 w-4/6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
