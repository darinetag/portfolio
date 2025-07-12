"use client";
import Layout from "@/components/Layout";
import { ChevronRight, X } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";

// ---- Slide component ----
const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  handleSeeDetails,
}) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, button, title, behanceEmbed } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]" style={{ fontFamily: 'Montreal' }}>
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* --- Visual Content --- */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#0E2A8B] rounded-3xl overflow-hidden transition-all duration-150 ease-out flex items-center justify-center"
          style={{
            boxShadow: "0 6px 48px 0 #0008",
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          {behanceEmbed ? (
            <div
              className="w-full h-full rounded overflow-hidden flex items-center justify-center bg-white"
              style={{
                aspectRatio: "404/316",
                minWidth: 220,
                minHeight: 220,
                maxHeight: 340,
              }}
            >
              <iframe
                src={behanceEmbed}
                width="404"
                height="316"
                allowFullScreen
                loading="lazy"
                frameBorder="0"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded w-full h-full"
                title={title}
                style={{
                  border: "none",
                  pointerEvents: "none", // disables click/scroll in carousel
                  overflow: "hidden",
                }}
                scrolling="no"
              />
            </div>
          ) : (
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-600 ease-in-out"
              style={{
                opacity: current === index ? 1 : 0.5,
              }}
              alt={title}
              src={src}
              loading="eager"
              decoding="sync"
            />
          )}
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none rounded-3xl" />
        </div>
        {/* --- Title and Button overlay --- */}
        <article
          className="absolute bottom-0 left-0 w-full px-8 pb-8 z-10 flex flex-col items-start"
          style={{ pointerEvents: "none" }} // overlay doesn't block button
        >
          <h2
            className="text-white text-2xl lg:text-3xl font-semibold mb-2 drop-shadow-lg"
          >
            {title}
          </h2>
          <button
            className="bg-white hover:bg-[#FBC408] text-black font-bold rounded-xl px-5 py-2 mt-2 shadow-lg text-sm transition pointer-events-auto"
            onClick={e => {
              e.stopPropagation();
              handleSeeDetails(index);
            }}
          >
            {button}
          </button>
        </article>
      </li>
    </div>
  );
};

// ---- Carousel Controls ----
const CarouselControl = ({
  type,
  title,
  handleClick
}) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-[#FBC408] dark:bg-[#FBC408] border-3 border-transparent rounded-full focus:border-[#FBC408] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ChevronRight className="text-white dark:text-white w-7 h-7" />
    </button>
  );
};

// ---- Modal (styled, clean, accessible) ----
function ArtworkModal({ open, slide, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open || !slide) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[2000] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 relative flex flex-col items-center"
        style={{ animation: "fadeIn 0.3s" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black/70 hover:text-[#BC0700] p-2"
          aria-label="Close"
        >
          <X size={28} />
        </button>
        {slide.behanceEmbed ? (
          <div
            className="w-full flex justify-center items-center rounded-xl bg-black/10 overflow-hidden mb-6"
            style={{
              aspectRatio: "404/316",
              height: 316,
              minWidth: 220,
              maxWidth: 404,
            }}
          >
            <iframe
              src={slide.behanceEmbed}
              width="404"
              height="316"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-xl w-full h-full"
              title={slide.title}
              style={{
                border: "none",
                pointerEvents: "auto"
              }}
              scrolling="no"
            />
          </div>
        ) : (
          <img
            src={slide.src}
            alt={slide.title}
            className="rounded-xl object-contain w-full max-h-72 mb-6 shadow-lg bg-gray-100"
          />
        )}
        <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
        {slide.description && (
  <div
    className="text-black/80 text-base text-center leading-relaxed max-h-48 overflow-y-auto"
    style={{ whiteSpace: 'pre-line' }}
  >
    {(() => {
      // Split at the phrase (with and without a newline for robustness)
      const [before, after] = slide.description.split(/Important Details about the Art:\s*\n?/);
      if (!after) return slide.description;
      return (
        <>
          {before}
          <br />
          <span className="font-bold block my-2">Important Details about the Art:</span>
          {after}
        </>
      );
    })()}
  </div>
)}
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px);}
          to   { opacity: 1; transform: none;}
        }
      `}</style>
    </div>
  );
}

// ---- Carousel Component ----
export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [modalIdx, setModalIdx] = useState(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleSeeDetails = (index) => {
    setModalIdx(index);
  };

  const closeModal = () => setModalIdx(null);

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            handleSeeDetails={handleSeeDetails}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
      {/* Modal below Carousel */}
      <ArtworkModal
        open={modalIdx !== null}
        slide={slides[modalIdx]}
        onClose={closeModal}
      />
    </div>
  );
}

// ---- Slide Data ----
const slides = [
  {
    behanceEmbed: "https://www.behance.net/embed/project/207414081?ilo0=1",
    title: "Banner Design",
    button: "See Details",
    description: `This banner is designed to showcase Hyko as an AI tool, instantly creating a connection between AI and technology in the viewer's mind. The image simplifies the message, allowing the brain to process and understand it quickly, making further explanation easier.

Important Details about the Art:
1- Keyboard Theme:
As previewed, it was adopted in the CTA (Call to Action) text keys as well as one key in the middle holding the Product's logo. 
The text of "Enter Easy Mode" was inspired by the keyboard as well, as we have the word "Enter" with an arrow under it.

2- Copywriting:
Along with the design, I made sure the texts included made sense and are related to the values of the tech company.

3- Colors:
Combining more than three colors was the hardest part; their order was chosen carefully.
Automation in Blue: resembling the flow of the work and the flow of the blue water's motion "as it appears to the human eye surely".
Miss Out in Red: resembling the grave dangers and consequences of not using the product, as it is an error not to.
`,
  },
  {
    behanceEmbed: "https://www.behance.net/embed/project/210803221?ilo0=1",
    title: "Event Visuals",
    button: "See Details",
    description: `In my design, everyone in the building is up late working hard, but the Hyko user is sound asleep! They’ve finished all their tasks early and can enjoy a good night’s rest. The fun message here is: “I’m not lazy; I’m smart!”

The Idea Behind Hyko:
Hyko is all about making work easier and saving you time! I wanted to show this in a fun way, so people can quickly get the idea without a long explanation.`,
  },
  {
    behanceEmbed: "https://www.behance.net/embed/project/207421477?ilo0=1",
    title: "Art Direction",
    button: "See Details",
    description: "Original Powerpuff meme design to show the ingredients of any AI product.",
  },
  
  // ... add more slides as needed
];

// ---- Page Component ----
export default function VisualGalleryPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1
          className="text-3xl lg:text-7xl font-bold  text-[#0E2A8B] text-center mt-12 mb-8 leading-tight"
          style={{ fontFamily: "Science, serif" }}
        >
          Visual Storytelling
        </h1>
        <Carousel slides={slides} />
      </div>
    </Layout>
  );
}
