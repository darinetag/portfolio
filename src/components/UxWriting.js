
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
      <div className="lg:min-h-screen min-h-[70vh] px-6 relative overflow-hidden" style={{ fontFamily: "Montreal" }}>
        {/* Page Title */}
        <h1 className="lg:text-6xl text-2xl text-[#FBC408] text-center my-4" style={{ fontFamily: "Science" }}>
          {title}
        </h1>
     <p className="flex items-center justify-center text-center w-full md:w-[800px] mx-auto lg:text-base text-[9px] ">
  {description}
</p>



        {/* Subtitle + Description */}
       <div className="flex justify-between items-start lg:gap-10 flex-nowrap lg:mt-25 mt-6">
  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2">
    <h2 className="lg:text-4xl text-[12px] lg:mb-4 lg:mt-10 lg:ml-40 ml-20">
      <span className="bg-[#BC0700] px-2 rounded">{subtitle}</span> {current.heading}
    </h2>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-1/2">
    <h2 className="lg:text-4xl text-[12px] lg:mb-4 lg:mt-10 mt-0 text-right mr-50 lg:mr-40">
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
            className="lg:absolute lg:left-4 md:left-10 z-20 text-[#0E2A8B] lg:p-2 p-3 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
           <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />

          </button>

          {/* Background GIF */}
          <img
            src="/mondrian.gif"
            alt="Background gif"
            className="absolute top-24 left-0 w-full h-[228px] object-cover z-0 opacity-20 lg:block hidden"
          />

          {/* Foreground Image */}
          <div className="relative z-10 flex lg:ml-30 mt-10 lg:mt-30 ">
  <img
    src={current.image}
    alt="Example visual"
    className={`object-contain lg:rounded-xl  ${
      current.id === "google" ? "lg:w-[370px] w-[240px] h-[200px] lg:h-[400px]  " : "lg:w-[420px] w-[370px] h-[370px] lg:h-[460px] lg:mt-14 mt-20"
    }`}
  />
</div>

<div className="relative z-10 flex lg:mr-20 mt-35 lg:mt-30 ">
  
  <img
    src={current.images}
    alt="Example visual"
    className={`object-contain lg:rounded-xl ${
      current.id === "google" ? "lg:w-[320px] w-[240px] h-[200px] lg:h-[400px] lg:ml-14 lg:mb-40 ml-2 mb-34" : "lg:w-[400px] w-[320px] h-[320px] lg:h-[400px] lg:mt-2 lg:mb-3 mb-15 ml-2"
    }`}
  />
</div>


          {/* Right Arrow */}
          <button
            onClick={next}
            className="lg:absolute lg:right-4 md:right-10 z-20  text-[#0E2A8B] lg:p-2 p-3 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
            <ChevronRight className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </button>
        </div>
      </div>
    </Layout>
  );
}
