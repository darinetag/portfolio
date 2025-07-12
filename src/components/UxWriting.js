import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function UxWriting({ title, description, examples }) {
  const [current, setCurrent] = useState(0);
  const slide = examples[current];

  const next = () => setCurrent((prev) => (prev + 1) % examples.length);
  const prev = () => setCurrent((prev) => (prev - 1 + examples.length) % examples.length);

  return (
    <Layout>
      <div className="min-h-screen bg-white flex flex-col items-center py-16 px-2">
        {/* Title */}
        <h1 className="font-science text-center text-3xl md:text-6xl text-[#0E2A8B] mb-2" style={{ fontFamily: "Science" }}>
          {title}
        </h1>
        {/* Description */}
        <p
          className="text-center max-w-2xl mx-auto text-[12px] md:text-[16px] text-black mb-10 font-normal"
          style={{ fontFamily: "Montreal" }}
        >
          {description}
        </p>

        {/* --- NAVIGATION BUTTONS (desktop only) --- */}
        <div className="relative w-full max-w-4xl flex items-center justify-center mb-16">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="
              hidden md:flex items-center justify-center
              absolute z-30
              left-[-90px] xl:left-[-140px] 2xl:left-[-180px]
              top-1/2 -translate-y-1/2
              bg-[#0E2A8B] text-white hover:bg-[#FBC408] hover:text-[#0E2A8B]
              rounded-full w-16 h-16 shadow-lg transition-all
            "
            style={{ outline: "none" }}
          >
            <ChevronLeft size={38} />
          </button>

          {/* Horizontal Comparison Block */}
          <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 relative">
            {/* BEFORE */}
            <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-3xl shadow-2xl px-5 pt-16 pb-10 min-h-[370px] relative">
              {/* Badge */}
              <span className="absolute left-1/2 -translate-x-1/2 -top-7 bg-[#BC0700] text-white px-6 py-2 rounded-full font-bold text-base tracking-wide shadow-lg uppercase z-10">
                Before
              </span>
              {slide.beforeImage && (
                <Image
                  src={slide.beforeImage}
                  alt="Before"
                  width={500}
                  height={200}
                  className="mb-6 w-full max-w-[350px] h-auto object-contain"
                  unoptimized
                />
              )}
              <p className="text-[#BC0700] text-center text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                {slide.beforeText}
              </p>
            </div>

            {/* ARROW */}
            <div className="hidden md:flex flex-col items-center justify-center w-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <ArrowRight size={44} className="text-[#FBC408] animate-bounce" />
                <span className="text-gray-400 mt-2 text-xs md:text-sm text-center whitespace-nowrap">How I improved it</span>
              </div>
            </div>
            {/* On mobile: arrow below (between cards) */}
            <div className="md:hidden flex flex-col items-center justify-center my-4">
              <ArrowRight size={44} className="text-[#FBC408] animate-bounce" />
              <span className="text-gray-400 mt-2 text-xs md:text-sm">How I improved it</span>
            </div>

            {/* AFTER */}
            <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-3xl shadow-2xl px-5 pt-16 pb-10 min-h-[370px] relative">
              {/* Badge */}
              <span className="absolute left-1/2 -translate-x-1/2 -top-7 bg-[#FBC408] text-black px-6 py-2 rounded-full font-bold text-base tracking-wide shadow-lg uppercase z-10">
                After
              </span>
              {slide.afterImage && (
                <Image
                  src={slide.afterImage}
                  alt="After"
                  width={500}
                  height={200}
                  className="mb-6 w-full max-w-[350px] h-auto object-contain"
                  unoptimized
                />
              )}
              <p className="text-[#0E2A8B] text-center text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                {slide.afterText}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="
              hidden md:flex items-center justify-center
              absolute z-30
              right-[-90px] xl:right-[-140px] 2xl:right-[-180px]
              top-1/2 -translate-y-1/2
              bg-[#0E2A8B] text-white hover:bg-[#FBC408] hover:text-[#0E2A8B]
              rounded-full w-16 h-16 shadow-lg transition-all
            "
            style={{ outline: "none" }}
          >
            <ChevronRight size={38} />
          </button>
        </div>

        {/* --- NAVIGATION (MOBILE) --- */}
        <div className="flex md:hidden items-center gap-10 mt-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="bg-[#0E2A8B] text-white hover:bg-[#FBC408] hover:text-[#0E2A8B] rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl transition"
          >
            <ChevronLeft size={32} />
          </button>
          <span className="text-xl font-bold text-[#0E2A8B]">{current + 1} / {examples.length}</span>
          <button
            onClick={next}
            aria-label="Next"
            className="bg-[#0E2A8B] text-white hover:bg-[#FBC408] hover:text-[#0E2A8B] rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
