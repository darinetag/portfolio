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
        <div className="min-h-[100vh] flex flex-col px-6 relative overflow-visible " style={{ fontFamily: "Montreal" }}>
        {/* Page Title */}
        <h1 className="text-6xl text-[#FBC408] text-center my-4" style={{ fontFamily: "Science" }}>
          {title}
        </h1>
        
     <p className="flex items-center justify-center text-center w-full md:w-[800px] mx-auto ">
  {description}
</p>
<div className="flex">
  {current.id === "blogs" ? (
    <a
      href="https://big-mama.io/en/"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-20"
    >
      <img
        src={current.images}
        alt="sticky note"
        className="w-[250px] h-[220px] cursor-pointer"
      />
    </a>
  ) : (
    <img
      src={current.images}
      alt="sticky note"
      className="w-[250px] h-[220px] ml-20"
    />
  )}
  
  <img
    src={current.imagess}
    alt="sticky note"
    className="w-[150px] h-[140px] items-end ml-200 mt-20"
  />
</div>

<div className="relative w-full h-[1px] mt-70 flex items-center justify-center flex-grow pb-100">
    
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 z-20 text-[#FBC408] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronLeft size={48} />
          </button>
    
          <div className="flex items-center justify-center ">
      
  <img
    src={current.image}
    alt="Example visual"
    className={`object-contain   ${
      current.id === "about us" ? " w-[800px] h-[1600px] mt-180 " : " w-[880px] h-[800px]"
    }`}
  />
</div>
{/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 z-20  text-[#FBC408] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronRight size={48}/>
          </button>
        </div>
      </div>
      
    </Layout>
  );
}