"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "/jumpstart/lessons/lesson-1-keynote.jpg",
    alt: "Taufiq Rashid speaking on marketing analytics, AI, and enterprise data leadership",
    caption: "Keynote & Panel Speaker",
  },
  {
    src: "/jumpstart/lessons/lesson-2-essec-panel.jpg",
    alt: "Taufiq Rashid addressing attendees at ESSEC Business School",
    caption: "ESSEC Business School Masterclass",
  },
  {
    src: "/jumpstart/lessons/lesson-3-mentoring.jpg",
    alt: "Taufiq Rashid in interactive discussion and practical walkthrough",
    caption: "Hands-on Discussion & Mentoring",
  },
  {
    src: "/jumpstart/lessons/lesson-4-lecture-hall.jpg",
    alt: "Taufiq Rashid conducting executive training in a full lecture theatre",
    caption: "Live Lecture & Executive Training",
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
    <div
      className="relative aspect-[4/5] w-72 max-w-full lg:w-full lg:max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-sm group select-none bg-[#14181a]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Taufiq Rashid in lessons and training sessions"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${slide.caption}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 80vw, 400px"
            className="object-cover object-top"
            priority={index === 0}
          />
          {/* Subtle gradient overlay at bottom for caption legibility */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Caption chip */}
      <div className="absolute bottom-3 left-3 right-12 z-20 pointer-events-none">
        <span className="inline-block text-[11px] sm:text-xs font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[#efe9d8]/90 border border-white/10 truncate max-w-full">
          {slides[currentIndex].caption}
        </span>
      </div>

      {/* Navigation arrows (visible on hover or tap) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-[#efe9d8] flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f5cb1d]"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-[#efe9d8] flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f5cb1d]"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
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
  );
}
