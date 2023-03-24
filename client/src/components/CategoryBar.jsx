import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { categoriesData, productData } from "../static/data";
import FilterBar from "../components/Filter";
import ProductCard from "./ProductCard";

export default function CategoryBar() {
  const [data, setData] = useState("โปรโมชั่น");
  //const navigate = useNavigate();

  const productfilter = productData.filter(
    (product) => product.category === data
  );

  return (
    <div className="font-kanit">
      <div className="flex w-full justify-center">
        {categoriesData &&
          categoriesData.map((category, index) => {
            const handleSubmit = (category) => {
              //navigate(`/product?category=${category.title}`);
              setData(category.title);
            };
            return (
              <div
                key={index}
                className="grid place-items-center px-14 py-2"
                style={{
                  backgroundColor: data === category.title && "#EEEEEE",
                }}
                onClick={() => handleSubmit(category)}
              >
                <img src={category.imageUrl} width={60} alt="logo-category" />
                <h1 className="text-sm font-semibold text-darkgray">
                  {category.title}
                </h1>
              </div>
            );
          })}
      </div>
      <FilterBar title={data} />
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-3 w-4/6">
          {productfilter.map((product, index) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
