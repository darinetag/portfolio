"use client";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function VideoPage() {
  const videoRefs = [useRef(null), useRef(null)];

  // Pause other local videos when one plays
  const handlePlay = (index) => {
    videoRefs.forEach((ref, i) => {
      if (i !== index && ref.current) {
        ref.current.pause();
      }
    });
  };

  return (
    <Layout>
      <main className="min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 bg-white">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold text-[#0E2A8B] mb-10 text-center"
          style={{ fontFamily: "Science, serif" }}
        >
          🎬 Video and Filmmaking
        </h1>

        {/* Video Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
          {/* Local Video 1 */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <video
              ref={videoRefs[0]}
              src="/videos/video1.mov"
              controls
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onPlay={() => handlePlay(0)}
            />
          </div>

          {/* Local Video 2 */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <video
              ref={videoRefs[1]}
              src="/videos/video2.mov"
              controls
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onPlay={() => handlePlay(1)}
            />
          </div>

          {/* YouTube Video */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/swiALo9GSDU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Instagram Section */}
        <p className="lg:text-lg md:text-xl text-gray-800 text-center max-w-xl mb-6">
          Curious about my latest video work, reels, and behind-the-scenes? <br />
          <span className="text-[#FBC408] font-semibold">Let’s connect on Instagram!</span>
        </p>

        <Link
          href="https://www.instagram.com/darcone_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FBC408] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#0E2A8B] hover:text-white transition text-lg"
        >
          <Instagram className="w-6 h-6" />
          @darcone_
        </Link>

        <p className="text-xs text-gray-400 mt-6">Follow me for fresh content ✨</p>
      </main>
    </Layout>
  );
}
