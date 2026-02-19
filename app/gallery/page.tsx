"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" // Resort pool/gallery theme
          alt="Gallery at Malankara Palace"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Where Every Frame Tells a Story
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              From sunrise calm to celebration nights, explore our visual
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryGrid />

      <Footer />
    </main>
  );
}

function GalleryGrid() {
  // Generate 36 placeholder images (9 rows * 4 columns)
  const images = Array.from({ length: 36 }).map((_, i) => ({
    src: `https://images.unsplash.com/photo-${
      [
        "1566073771259-6a8506099945",
        "1544984243-ec57ea16fe25",
        "1582719478250-c89cae4df85b",
        "1519167758481-83f550bb49b3",
        "1517248135467-4c7edcad34c4",
        "1596707328639-5a1d7f4ce9d3",
        "1555244162-803834f70033",
        "1519741497674-611481863552",
        "1618773928121-c32242e63f39",
        "1493246507139-91e8fad9978e",
        "1501785888041-af3ef285b470",
        "1476514525535-07fb3b4ae5f1",
      ][i % 12]
    }?q=80&w=2070&auto=format&fit=crop`,
    alt: `Gallery Image ${i + 1}`,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[250px] w-full overflow-hidden group rounded-sm shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
