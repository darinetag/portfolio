// components/ProjectExample.js
import { useState } from "react";
import Layout from "@/components/Layout";

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
        <h1 className="text-6xl text-[#FBC408] text-center my-6" style={{ fontFamily: "Science" }}>
          {title}
        </h1>

        {/* Subtitle + Description */}
        <div className="flex justify-between items-start gap-10 flex-wrap md:flex-nowrap my-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl mb-4">
              <span className="bg-[#BC0700] px-2">{subtitle}</span> {current.heading}
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="max-w-xl ml-auto text-sm bg-[#FBC408] px-4 py-2 rounded">
              {current.description}
            </p>
          </div>
        </div>

        {/* Background GIF + Foreground Image */}
        <div className="relative w-full h-[206px] mt-16">
          <img
            src="/mondrian.gif"
            alt="Background gif"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
          />
          <div className="relative z-10 flex justify-center items-center h-full">
            <img src={current.image} alt="Example visual" className="w-[784px] object-contain" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-10">
          <button onClick={prev} className="bg-[#BC0700] text-white px-4 py-2 rounded">Previous</button>
          <button onClick={next} className="bg-[#FBC408] text-black px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </Layout>
  );
}
