"use client";
import Layout from "@/components/Layout";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function VideoPage() {
  return (
    <Layout>
      <main className="min-h-[100vh] flex flex-col items-center justify-center px-4 py-20">
        <h1
          className="text-4xl md:text-6xl font-bold text-[#0E2A8B] mb-4 text-center"
          style={{ fontFamily: "Science, serif" }}
        >
          🎬 Video and Filmmaking
        </h1>
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
