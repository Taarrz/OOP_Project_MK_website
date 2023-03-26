import React from "react";
import CategoryBar from "../components/CategoryBar";
import { Slide } from "react-slideshow-image";
import { slideImages } from "../static/data";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-center bg-cover h-[400px]"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    );
  };

  return (
    <div className="font-kanit">
      <CategoryBar />
      <Slideshow />
    </div>
  );
}

export default Home;
