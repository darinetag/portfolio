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
      <div className="min-h-screen px-6 relative overflow-hidden" style={{ fontFamily: "Montreal" }}>
        {/* Page Title */}
        <h1 className="text-6xl text-[#FBC408] text-center my-4" style={{ fontFamily: "Science" }}>
          {title}
        </h1>

        {/* Subtitle + Description */}
        <div className="flex justify-between items-start gap-10 flex-wrap md:flex-nowrap my-14">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl mb-4 mt-10">
              <span className="bg-[#BC0700] px-2 rounded">{subtitle}</span> {current.heading}
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="w-[500px] ml-auto text-sm  px-4 py-2 rounded ">
              {current.description}
            </p>
          </div>
        </div>

         {/* Image Container with Side Arrows */}
        <div className="relative w-full h-[300px] mt-14 flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 z-20 text-[#0E2A8B] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#FBC408]"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Background GIF */}
          <Image
            src="/mondrian.gif"
            alt="Background gif"
            className="absolute top-48 left-0 w-full h-[228px] object-cover z-0 opacity-20 "
            width={400}
  height={300}
          />

          {/* Foreground Image */}
          <div className="relative z-10 flex justify-center items-center h-full mt-30 ">
            <Image src={current.image} alt="Example visual" className="w-[784px]  object-contain rounded-xl "  width={400}
  height={300} unoptimized />
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
