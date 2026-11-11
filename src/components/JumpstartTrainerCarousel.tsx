"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  topic: string;
}

const slides: Slide[] = [
  {
    src: "/jumpstart/lessons/lesson-1-networking.jpg",
    alt: "Taufiq Rashid speaking at ESSEC Business School on Networking and Career Insights",
    topic: "Networking & Career Insights",
  },
  {
    src: "/jumpstart/lessons/lesson-2-career-fair.jpg",
    alt: "Taufiq Rashid on panel at ESSEC Business School on Preparing for Career Fair",
    topic: "Preparing for Career Fair",
  },
  {
    src: "/jumpstart/lessons/lesson-3-ai-portrait.jpg",
    alt: "Taufiq Rashid speaking on Career Success Today in the World of AI",
    topic: "Career Success Today in the World of AI: What does it actually mean?",
  },
  {
    src: "/jumpstart/lessons/lesson-4-ai-panel.jpg",
    alt: "Taufiq Rashid on executive panel at ESSEC Business School discussing AI disruption and career strategy",
    topic: "Career Success Today in the World of AI: What does it actually mean?",
  },
];

export default function JumpstartTrainerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div className="w-full max-w-sm mx-auto lg:mx-0">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group select-none bg-[#14181a] shadow-lg border border-white/5"
        role="region"
        aria-roledescription="carousel"
        aria-label="Taufiq Rashid at ESSEC Business School"
      >
        {/* Slides without text overlay */}
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.topic}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation arrows (visible on hover or tap) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-[#efe9d8] flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f5cb1d]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-[#efe9d8] flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f5cb1d]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2 py-1 rounded-full border border-white/10">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-4 h-1.5 bg-[#f5cb1d]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Clean caption below image */}
      <div className="mt-3 text-center lg:text-left">
        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#f5cb1d]/10 border border-[#f5cb1d]/20 text-[#f5cb1d]">
          Keynote Speaker: ESSEC Business School
        </span>
        <p className="mt-1 text-xs text-[#efe9d8]/80 leading-normal font-medium">
          {slides[currentIndex].topic}
        </p>
      </div>
    </div>
  );
}
