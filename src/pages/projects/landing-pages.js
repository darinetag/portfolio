import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ProjectExample() {
 const examples = [
  { id: "about us", type: "video", src: "/projects/elysian.mp4" },
  { id: "services", type: "image", src: "/projects/ai.jpg" },
  { id: "chatapp", type: "image", src: "/projects/chatpp.jpg" }
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
      <div className="min-h-screen flex flex-col px-6" style={{ fontFamily: "Montreal" }}>
        {/* Title */}
        <h1 className="text-6xl text-[#BC0700] text-center my-4" style={{ fontFamily: "Science" }}>
          Landing pages
        </h1>

        {/* Description */}
        <p className="text-center w-full md:w-[800px] mx-auto">
          {description}
        </p>

        {/* Image Carousel */}
        <div className="relative flex-grow flex items-center justify-center py-16">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 z-20 text-[#FBC408] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronLeft size={48} />
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

    className="w-[900px] h-[2000px] max-h-[160vh] w-auto rounded-2xl object-contain"
  />
) : (
  <img
    src={current.src}
    alt={current.id}
    className="w-[900px] h-[2000px] max-h-[160vh] w-auto rounded-2xl object-contain"
  />
)}
</div>



          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 z-20 text-[#FBC408] p-2 rounded-full hover:scale-105 transition cursor-pointer hover:text-[#0E2A8B]"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
