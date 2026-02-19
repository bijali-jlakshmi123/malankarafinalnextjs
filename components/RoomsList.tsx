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
  {
    id: 2,
    name: "The Lakeview Presidential Suite",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop", // Master Bedroom
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop", // Balcony/View
    ],
    description: [
      "The Lakeview Presidential Suite is a spacious interconnected luxury accommodation designed for families and premium guests who value space, privacy, and scenic surroundings. Thoughtfully planned with comfort and functionality in mind, this suite features two interconnected rooms with a single private entrance, offering both togetherness and personal space within the same stay.",
      "A large shared private balcony connects both rooms and opens to beautiful panoramic views of Malankara Lake, along with garden and swimming pool views, and a partial view of the Illavizha Poonchira Hills. The elevated position and open outlook create a relaxed, airy atmosphere throughout the day.",
      "Ideal for families, small groups, and extended-stay guests, The Lakeview Presidential Suite combines scale, comfort, and refined lakeview living for a truly memorable stay experience.",
    ],
  },
  {
    id: 3,
    name: "The Lakeview Sunset Mirage",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop", // Bedroom view
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop", // Balcony/View
    ],
    description: [
      "The Lakeview Sunset Mirage is a stylish and relaxing lake-facing room designed for guests who want to experience nature’s colours at their finest. Carefully positioned to capture some of the most beautiful evening views, this room offers a calm and refreshing stay defined by light, openness, and scenic surroundings.",
      "The private balcony overlooks Malankara Lake along with garden and swimming pool views, creating a layered landscape that changes throughout the day. As the sun sets, the sky and water glow with warm tones, turning everyday moments into memorable experiences.",
      "Ideal for couples and leisure travellers, The Lakeview Sunset Mirage blends comfort, simplicity, and visual beauty into a peaceful stay experience.",
    ],
  },
  {
    id: 4,
    name: "The Lakeview Premium Twin",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2603&auto=format&fit=crop", // Twin Beds
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2574&auto=format&fit=crop", // View
    ],
    description: [
      "The Lakeview Premium Twin is a refined luxury accommodation designed for guests who value comfort, elegance, and a peaceful scenic setting. With its twin-bed configuration and thoughtfully planned layout, this room is ideal for friends, colleagues, and travellers who prefer shared space without compromising on privacy and comfort.",
      "The private balcony overlooks Malankara Lake along with garden and swimming pool views, offering a calm and refreshing outlook throughout the day. Evenings are especially memorable, with soft sunset colours reflecting across the water and surrounding landscape.",
      "Blending premium interiors with nature-facing openness, The Lakeview Premium Twin delivers a relaxed and comfortable lakeview stay experience.",
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
        <div className="space-y-24 max-w-4xl mx-auto">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room, index }: { room: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length,
    );
  };

  // Determine order classes for alternating layout
  const imageOrder = index % 2 !== 0 ? "lg:order-last" : "lg:order-first";
  const contentOrder = index % 2 !== 0 ? "lg:order-first" : "lg:order-last";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch font-sans">
      {/* Image Slider */}
      <div
        className={`relative h-[300px] sm:h-[400px] lg:h-auto w-full overflow-hidden group ${imageOrder}`}
      >
        <Image
          src={room.images[currentImageIndex]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500"
        />

        {/* Slider Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 hover:text-white/80 text-white p-2 transition-all z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white/80 text-white p-2 transition-all z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Overlay gradient for text readability if needed, though buttons are clear */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Content */}
      <div
        className={`bg-[#F4F4F1] p-8 lg:p-12 flex flex-col justify-center ${contentOrder}`}
      >
        <h3 className="text-3xl font-serif text-gray-900 mb-6">{room.name}</h3>
        <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] font-light text-justify mb-8">
          {room.description.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div>
          <button className="bg-[#702C8B] hover:bg-[#5a2370] text-white px-8 py-3 rounded-sm text-sm tracking-widest font-medium transition-colors uppercase">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}
