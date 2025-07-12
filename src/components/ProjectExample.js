import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from 'next/image';

export default function ProjectExample({ title, subtitle, examples }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = examples[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % examples.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);

  return (
    <Layout>
      <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center px-2 py-8 relative">
        {/* Mondrian background, soft and non-intrusive */}
        <Image
          src="/mondrian.gif"
          alt="Mondrian background"
          fill
          className="object-cover opacity-10 absolute inset-0 z-0"
          style={{ pointerEvents: 'none' }}
        />

        {/* Section title */}
        <h1
          className="font-science lg:text-7xl text-3xl text-[#0E2A8B] mb-2 z-10"
          style={{ fontFamily: "Science" }}
        >
          {title}
        </h1>
        {/* Subtitle/tag */}
        <div className="bg-[#BC0700] text-white text-xs px-4 py-1 rounded-full mb-6 z-10 uppercase tracking-wider shadow-md">
          {subtitle}
        </div>

        {/* Card */}
        <div className="relative w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl border p-6 md:p-12 z-10 overflow-hidden transition-all duration-300">
          {/* Navigation */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FBC408] text-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition z-20 "
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FBC408] text-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition z-20 "
          >
            <ChevronRight size={28} />
          </button>
          {/* Slide count */}
          <div className="absolute right-5 top-5 bg-[#0E2A8B] text-white text-xs rounded-full px-3 py-1 shadow-lg z-10">
            {currentIndex + 1} / {examples.length}
          </div>

          {/* Image */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-lg bg-[#faf8f5] p-3 border">
              <Image
                src={current.image}
                alt={current.heading}
                width={720}
                height={420}
                className="w-full h-[320px] object-contain rounded-lg"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Heading & Description */}
          <h2 className="font-bold text-2xl lg:text-4xl text-[#0E2A8B] mb-4">{current.heading}</h2>
          <p className="text-gray-800 text-base lg:text-lg">{current.description}</p>
        </div>
      </div>
    </Layout>
  );
}
