import { useState, useEffect } from "react";
import banner1 from "../assets/banner-1.webp";
import banner2 from "../assets/banner-2.webp";
import banner3 from "../assets/banner-3.webp";

const images = [banner1, banner2, banner3];

const Body1 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:p-10 ">
    <div className="relative h-64 sm:h-80 md:h-90 lg:h-[32rem] bg-zinc-900 overflow-hidden w-full max-w-screen-xl mx-auto rounded-lg md:p-10">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full   h-full bg-cover bg-center  transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
    </div>
  );
};

export default Body1;
