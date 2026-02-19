"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// If react-icons is not installed, I will use text or SVGs. Let's check package.json first? No, I'll just use simple buttons or SVGs to be safe.

const rooms = [
  {
    id: 1,
    name: "The Lakeview Royal Suite",
    images: [
      "https://images.unsplash.com/photo-1591088398332-6177805c7460?q=80&w=2070&auto=format&fit=crop", // Bedroom view
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop", // Balcony/View
    ],
    description: [
      "The Lakeview Royal Suite offers a refined luxury stay with a breathtaking 180-degree panoramic view of the Ilaveezhapoonchira Hills and the serene Malankara Lake. Designed for guests who seek privacy, elegance, and uninterrupted scenic beauty, this suite blends spacious interiors with nature-led comfort.",
      "A huge private balcony overlooks the swimming pool and landscaped gardens, creating the perfect setting to unwind while staying connected to the surroundings. Large windows allow abundant natural light throughout the day, while evenings unfold with stunning sunset views that reflect beautifully across the lake.",
      "Ideal for couples and luxury travellers, The Lakeview Royal Suite is a space where calm mornings, golden evenings, and thoughtful details define the stay experience.",
    ],
  },
];

export default function RoomsList() {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-medium">
            Thoughtfully Designed Stays by the Lake
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
            Wake up to open skies, spend evenings watching the lake change
            colours, and rest in spaces designed for unhurried living.
          </p>
        </div>

        {/* Room Cards */}
        <div className="space-y-24">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room }: { room: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length,
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-neutral-50 p-8 rounded-sm">
      {/* Image Slider */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm group">
        <Image
          src={room.images[currentImageIndex]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500"
        />

        {/* Slider Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            {room.name}
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] md:text-base font-light text-justify">
            {room.description.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="bg-[#702C8B] hover:bg-[#5a2370] text-white px-8 py-3 rounded text-sm tracking-wider font-medium transition-colors uppercase">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}
