// components/ProjectExample.js
import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from 'next/image';


export default function ProjectExample({ title, subtitle, examples }) {
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
        <h1 className="lg:text-6xl text-3xl my-8 text-[#FBC408] text-center lg:my-4" style={{ fontFamily: "Science" }}>
          {title}
        </h1>

        {/* Subtitle + Description */}
        <div className="flex justify-between items-start lg:gap-10 gap-4 flex-wrap md:flex-nowrap lg:my-14">
          <div className="w-full md:w-1/2">
            <h2 className="lg:text-4xl text-xl lg:mb-4 lg:mt-10 mt-2">
              <span className="bg-[#BC0700] lg:px-2 rounded">{subtitle}</span> {current.heading}
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="lg:w-[500px] ml-auto text-sm  lg:px-4 lg:py-2 rounded ">
              {current.description}
            </p>
          </div>
        </div>

         {/* Image Container with Side Arrows */}
        <div className="relative w-full lg:h-[300px] lg:mt-14  flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute lg:left-4 left-0 md:left-10 z-20 lg:text-[#0E2A8B] text-[#FBC408] lg:p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Background GIF */}
          <Image
            src="/mondrian.gif"
            alt="Background gif"
            className="absolute top-48 left-0 w-full h-[228px] object-cover z-0 opacity-20 lg:block hidden"
            width={400}
  height={300}
          />

          {/* Foreground Image */}
          <div className="relative z-10 flex justify-center items-center h-full lg:mt-30 mt-8 ">
            <Image src={current.image} alt="Example visual" className="lg:w-[784px] w-[260px] object-contain rounded-xl "  width={400}
  height={300} unoptimized />
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute lg:right-4 right-0 md:right-10 z-20  lg:text-[#0E2A8B] text-[#FBC408] lg:p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
