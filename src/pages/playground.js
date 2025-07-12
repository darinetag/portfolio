"use client";
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";

const mondrianColors = ["#ec140f", "#f5d219", "#170dac", "#fff"];

export default function PlaygroundPage() {
  const canvasRef = useRef(null);
  const linesRef = useRef([]);
  const contextRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState(360);

  // Set up and resize canvas
  useEffect(() => {
    function resize() {
      const size = Math.min(window.innerWidth, 580, window.innerHeight - 240, 360);
      setCanvasSize(size);

      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      contextRef.current = ctx;
      ctx.lineWidth = 8;
      ctx.strokeStyle = "#0f0408";
      ctx.fillStyle = "#fff";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill with white
      linesRef.current = [];
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  function drawline(x, y) {
    const ctx = contextRef.current;
    ctx.beginPath();
    ctx.moveTo(x, y); ctx.lineTo(x, 0);
    ctx.moveTo(x, y); ctx.lineTo(0, y);
    ctx.moveTo(x, y); ctx.lineTo(x, ctx.canvas.height);
    ctx.moveTo(x, y); ctx.lineTo(ctx.canvas.width, y);
    ctx.stroke();
    ctx.closePath();
  }
  function fillSqr(x1, y1, x2, y2) {
    const ctx = contextRef.current;
    ctx.beginPath();
    ctx.rect(x1, y1, x2 - x1, y2 - y1);
    ctx.fillStyle = mondrianColors[Math.floor(Math.random() * mondrianColors.length)];
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#0f0408";
    ctx.stroke();
    ctx.closePath();
  }
  function drawOnClick(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    linesRef.current.push({ x, y });
    let curLoc = [];
    curLoc.push(linesRef.current[linesRef.current.length - 1]);
    curLoc.push(linesRef.current[linesRef.current.length - 2]);
    drawline(x, y);

    if (linesRef.current.length === 1) {
      fillSqr(0, canvas.height, linesRef.current[0].x, linesRef.current[0].y);
      fillSqr(canvas.width, 0, linesRef.current[0].x, linesRef.current[0].y);
    }
    if (linesRef.current.length > 1) {
      fillSqr(curLoc[0].x, curLoc[0].y, curLoc[1].x, curLoc[1].y);
    }
  }
  function handleClear() {
    const ctx = contextRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Fill with white
    linesRef.current = [];
  }
  function handleSave() {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "my-mondrian-art.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function onClick(e) { drawOnClick(e); }
    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
  }, [canvasSize]);

  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-14 pb-12">
        <h1
          className="text-4xl md:text-6xl font-bold text-[#0E2A8B] text-center mb-4"
          style={{ fontFamily: "Science, serif" }}
        >
          Piet Mondrian Playground
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center max-w-xl">
          Click anywhere on the canvas to create your own Mondrian painting!
        </p>
        {/* Frame and Canvas */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="bg-white rounded-[20px] border-[8px] border-black drop-shadow-xl flex items-center justify-center p-4"
            style={{
              minWidth: canvasSize,
              minHeight: canvasSize,
              boxShadow: "0 12px 60px 0 #0002, 0 1px 8px #3333"
            }}>
            <canvas
              ref={canvasRef}
              className="rounded-[10px] bg-white shadow-lg"
              style={{
                width: canvasSize,
                height: canvasSize,
                maxWidth: "80vw",
                maxHeight: "60vw",
                cursor: "crosshair",
                border: "2px solid #f5f5f5",
                background: "#fff"
              }}
            />
          </div>
        </div>
        {/* Buttons under canvas */}
        <div className="flex flex-col items-center gap-2 mt-1">
          <button
            id="clear"
            onClick={handleClear}
            className="px-7 py-2 rounded-full bg-[#BC0700] hover:bg-[#FBC408] hover:text-black text-white font-bold shadow transition"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            className="px-7 py-2 rounded-full bg-[#0E2A8B] hover:bg-[#FBC408] hover:text-black text-white font-bold shadow transition"
          >
            Save Image
          </button>
        </div>
      </div>
    </Layout>
  );
}
