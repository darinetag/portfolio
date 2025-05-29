
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
      <div className="min-h-screen px-6 relative overflow-hidden" style={{ fontFamily: "Montreal" }}>
        {/* Page Title */}
        <h1 className="text-6xl text-[#FBC408] text-center my-4" style={{ fontFamily: "Science" }}>
          {title}
        </h1>
     <p className="flex items-center justify-center text-center w-full md:w-[800px] mx-auto ">
  {description}
</p>



        {/* Subtitle + Description */}
       <div className="flex justify-between items-start gap-10 flex-wrap md:flex-nowrap mt-25">
  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl mb-4 mt-10 ml-40">
      <span className="bg-[#BC0700] px-2 rounded">{subtitle}</span> {current.heading}
    </h2>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl mb-4 mt-10 text-right mr-40">
      <span className="bg-[#FBC408] px-2 rounded">{subtitles}</span> {current.heading}
    </h2>
    <p className="w-[500px] ml-auto text-sm px-4 py-2 rounded">
      {current.description}
    </p>
  </div>
</div>

         {/* Image Container with Side Arrows */}
        <div className="relative w-full h-[1px] mt-14 flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 z-20 text-[#0E2A8B] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Background GIF */}
          <img
            src="/mondrian.gif"
            alt="Background gif"
            className="absolute top-24 left-0 w-full h-[228px] object-cover z-0 opacity-20 "
          />

          {/* Foreground Image */}
          <div className="relative z-10 flex ml-30 mt-30 ">
  <img
    src={current.image}
    alt="Example visual"
    className={`object-contain rounded-xl  ${
      current.id === "google" ? "w-[370px] h-[400px]  " : "w-[420px] h-[460px] mt-14"
    }`}
  />
</div>

<div className="relative z-10 flex mr-20  mt-30 ">
  
  <img
    src={current.images}
    alt="Example visual"
    className={`object-contain rounded-xl ${
      current.id === "google" ? "w-[320px] h-[400px] ml-14 mb-40 " : "w-[400px] h-[400px] mt-2"
    }`}
  />
</div>


          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 z-20  text-[#0E2A8B] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
