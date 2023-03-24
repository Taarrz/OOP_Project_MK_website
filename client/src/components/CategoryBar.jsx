import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../static/data";
import FilterBar from "../components/Filter";

export default function CategoryBar() {
  const [data, setData] = useState("จานเดี่ยว");
  const navigate = useNavigate();

  return (
    <div>
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
                className="grid place-items-center mx-14 my-2"
                onClick={() => handleSubmit(category)}
              >
                <img src={category.imageUrl} width={60} alt="logo-category" />
                <h1 className="text-sm">{category.title}</h1>
              </div>
            );
          })}
      </div>
      <FilterBar title={data} />
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-3 w-4/6"></div>
      </div>
    </div>
  );
}
