"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "The Experience",
    subtitle: "Unwind & Rejuvenate",
    description: "Experiences shaped by water, nature, and unhurried moments.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop", // Spa/Massage/Relaxation
    link: "/experiences",
  },
  {
    id: 2,
    title: "Nature & Serenity",
    subtitle: "Connect with Nature",
    description:
      "Immerse yourself in the tranquility of our lush surroundings and scenic views.",
    image:
      "https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2070&auto=format&fit=crop", // Nature/Pool
    link: "/experiences",
  },
];

export default function ExperienceSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
              <div className="max-w-2xl text-white">
                <h2 className="text-5xl md:text-6xl font-serif mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
                  {slide.description}
                </p>

                <Link
                  href={slide.link}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-8 py-3 rounded transition-colors duration-300"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
