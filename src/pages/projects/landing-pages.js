import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from 'next/image';

export default function ProjectExample() {
 const examples = [
  { id: "about us", type: "video", src: "/projects/elysian.mp4" },
  { id: "services", type: "image", src: "/projects/ai.webp" },
  { id: "chatapp", type: "image", src: "/projects/chatpp.webp" }
];


  const description = "This is an example of a long image slider layout for a landing page. Use the arrows to navigate.";

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
      <div className="lg:min-h-screen flex flex-col px-6" style={{ fontFamily: "Montreal" }}>
        {/* Title */}
        <h1 className="lg:text-6xl text-2xl text-[#BC0700] text-center my-4" style={{ fontFamily: "Science" }}>
          Landing pages
        </h1>

        {/* Description */}
        <p className="text-center w-full md:w-[800px] mx-auto lg:text-lg text-[12px]">
          {description}
        </p>

        {/* Image Carousel */}
        <div className="relative flex-grow flex items-center justify-center lg:py-16 py-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute lg:left-4 left-0 md:left-10 z-20 text-[#FBC408] lg:p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronLeft className="w-8 h-8 lg:w-14 lg:h-14"  />
          </button>

          {/* Image */}
       <div className="flex items-center justify-center"  >
 {current.type === "video" ? (
  <video
    src={current.src}
    autoPlay
    loop
    muted
    playsInline

    className="w-[900px] lg:h-[2000px] h-[600px] max-h-[160vh] w-auto rounded-2xl object-contain"
  />
) : (
  <Image
    src={current.src}
    alt={current.id}
    className="lg:w-[900px] lg:h-[2000px] h-[700px] max-h-[160vh] w-auto rounded-2xl object-contain"
     width={400}
  height={300}
  />
)}
</div>



          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute lg:right-4 right-0 md:right-10 z-20 text-[#FBC408] lg:p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronRight className="w-8 h-8 lg:w-14 lg:h-14" />
          </button>
        </div>
      </div>
    </Layout>
  );
}
