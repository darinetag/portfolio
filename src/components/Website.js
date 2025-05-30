import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react"; 

export default function ProjectExample({ title, subtitle, examples, subtitles, description }) {
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
<div className="relative w-full h-[1px] mt-110 flex items-center justify-center flex-grow pb-100">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 z-20 text-[#FBC408] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Foreground Image */}
          <div className="flex items-center justify-center ">
  <img
    src={current.image}
    alt="Example visual"
    className=" w-[550px] h-[800px] "
  />
</div>
{/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 z-20  text-[#FBC408] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
      
    </Layout>
  );
}