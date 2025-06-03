import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react"; 



export default function ProjectExample({ title, subtitle, examples, subtitles, description, images, imagess }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = examples[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % examples.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);
  };
  return (
    <Layout>
        <div className="lg:min-h-[100vh] flex flex-col px-6 relative overflow-visible " style={{ fontFamily: "Montreal" }}>
        {/* Page Title */}
        <h1 className="lg:text-6xl text-2xl text-[#FBC408] text-center my-4" style={{ fontFamily: "Science" }}>
          {title}
        </h1>
        
     <p className="flex items-center justify-center text-center lg:w-full mx-auto text-[6px] lg:text-lg">
  {description}
</p>
<div className="flex">
  {current.id === "blogs" ? (
    <a
      href="https://big-mama.io/en/"
      target="_blank"
      rel="noopener noreferrer"
      className="lg:ml-20"
    >
      <img
        src={current.images}
        alt="sticky note"
        className="lg:w-[250px] lg:h-[220px] w-[50px] h-[50px] lg:mr-20 cursor-pointer"
      />
    </a>
  ) : (
    <img
      src={current.images}
      alt="sticky note"
      className="lg:w-[250px] lg:h-[220px] w-[50px] h-[50px] lg:ml-20 "
    />
  )}
  
  <img
    src={current.imagess}
    alt="sticky note"
    className="lg:w-[150px] lg:h-[140px] w-[50px] h-[50px] items-end lg:ml-200 ml-58 lg:mt-20 ml-0"
  />
</div>

<div className="relative w-full h-[1px] lg:mt-70 mt-54 flex items-center justify-center flex-grow lg:pb-100 pb-70 ">
    
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute lg:left-10 left-0 z-20 text-[#FBC408] lg:p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronLeft className="w-8 h-8 lg:w-14 lg:h-14"  />
          </button>
    
          <div className="flex items-center justify-center ">
      
  <img
    src={current.image}
    alt="Example visual"
    className={`object-contain   ${
      current.id === "about us" ? " lg:w-[800px] w-[200px]  lg:h-[1600px] lg:mt-180 mt-20 " : " lg:w-[880px] w-[270px] lg:h-[800px] h-[400px]"
    }`}
  />
</div>
{/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 lg:right-10 z-20 text-[#FBC408] lg:p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronRight className="w-8 h-8 lg:w-14 lg:h-14" />
          </button>
        </div>
      </div>
      
    </Layout>
  );
}