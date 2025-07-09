import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft, GalleryVerticalEnd } from "lucide-react";

export default function VisualShowcase({ title, subtitle, description, examples }) {
  // Handle missing or empty examples gracefully
  if (!examples || !examples.length) {
    return (
      <Layout>
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 text-[#0E2A8B] uppercase drop-shadow-md">{title || "My Art Gallery"}</h1>
          <p className="max-w-lg text-center text-lg text-black/70 font-medium mb-8">{description || "No art pieces to display yet. Please add some projects!"}</p>
          <a
            href="/projects"
            className="flex items-center gap-3 px-7 py-4 rounded-2xl border-8 border-black shadow-xl font-bold text-lg lg:text-2xl bg-[#FBC408] text-[#0E2A8B] hover:bg-[#BC0700] hover:text-white transition uppercase tracking-widest mt-5"
          >
            <GalleryVerticalEnd className="w-7 h-7" />
            See all projects
          </a>
        </section>
      </Layout>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = examples[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % examples.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);

  const mondrianColors = [
    "bg-[#FBC408]",
    "bg-[#BC0700]",
    "bg-[#0E2A8B]",
    "bg-white"
  ];
  const colorIdx = currentIndex % mondrianColors.length;

  return (
    <Layout>
      <section className="flex flex-col items-center min-h-[80vh] px-2 py-10 relative">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 text-[#0E2A8B] drop-shadow-md tracking-tight uppercase">
          {title}
        </h1>
        <p className="max-w-2xl text-center text-lg lg:text-xl mb-12 text-black/70 font-medium">
          {description}
        </p>

        {/* Mondrian-style Art Block */}
        <div className="relative w-full max-w-4xl flex flex-col md:flex-row gap-6 items-stretch mb-16">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="hidden md:flex items-center justify-center absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white border-4 border-black rounded-full shadow-lg hover:scale-110 hover:bg-[#FBC408] hover:text-[#0E2A8B] transition"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Main Image Block */}
          <div
            className={`flex-1 flex items-center justify-center rounded-2xl border-8 border-black shadow-xl transition-all duration-300 group overflow-hidden ${mondrianColors[colorIdx]} relative`}
            style={{ minHeight: 320 }}
          >
            <img
              src={current.image}
              alt={current.heading}
              className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
            />
            {/* Overlay: Project Title & Subtitle */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 p-5 text-white">
              <h2 className="text-xl lg:text-3xl font-bold uppercase mb-1 tracking-wide">
                {subtitle}: <span className="text-[#FBC408]">{current.heading}</span>
              </h2>
              <p className="text-base">{current.description}</p>
            </div>
          </div>

          {/* Optionally, second image or block */}
          {current.images && (
            <div
              className={`flex-1 rounded-2xl border-8 border-black shadow-xl overflow-hidden ${mondrianColors[(colorIdx + 1) % 4]} flex items-center justify-center`}
              style={{ minHeight: 320 }}
            >
             {current.behanceEmbed ? (
  <iframe
    src={current.behanceEmbed}
    height={316}
    width={404}
    allowFullScreen
    loading="lazy"
    frameBorder={0}
    allow="clipboard-write"
    referrerPolicy="strict-origin-when-cross-origin"
    className="rounded-2xl border-8 border-black shadow-xl w-full h-[320px]"
  ></iframe>
) : (
  <img
    src={current.image}
    alt={current.heading}
    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
  />
)}

            </div>
          )}

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next project"
            className="hidden md:flex items-center justify-center absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white border-4 border-black rounded-full shadow-lg hover:scale-110 hover:bg-[#0E2A8B] hover:text-[#FBC408] transition"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Arrow Navigation */}
        <div className="flex gap-6 mb-10 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-12 h-12 bg-white border-4 border-black rounded-full shadow-lg hover:scale-110 hover:bg-[#FBC408] hover:text-[#0E2A8B] transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="w-12 h-12 bg-white border-4 border-black rounded-full shadow-lg hover:scale-110 hover:bg-[#0E2A8B] hover:text-[#FBC408] transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* See All Projects - Mondrian Block */}
        <a
          href="/projects"
          className="flex items-center gap-3 px-7 py-4 rounded-2xl border-8 border-black shadow-xl font-bold text-lg lg:text-2xl bg-[#BC0700] text-white hover:bg-[#FBC408] hover:text-[#0E2A8B] transition uppercase tracking-widest mt-5"
        >
          <GalleryVerticalEnd className="w-7 h-7" />
          See all projects
        </a>
      </section>
    </Layout>
  );
}
