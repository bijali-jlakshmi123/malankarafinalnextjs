"use client";

import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Large Infinity Pool",
    description:
      "A spacious infinity pool set amidst calm surroundings, featuring a large main pool and a separate kids' pool – perfect for relaxed swims, family fun, and leisurely poolside time.",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2dc72af?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sunset & Lake Views",
    description:
      "Relax at dedicated benches and lakeside sitting areas set on green lawns, offering peaceful lake views and beautiful sunset moments to unwind and enjoy the evening.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Live Rod Fishing",
    description:
      "You can experience live rod fishing along the calm lakeside waters, enjoying a peaceful and engaging leisure activity.",
    image:
      "https://images.unsplash.com/photo-1544551763-87405234241e?q=80&w=2071&auto=format&fit=crop",
  },
];

const lakeActivities = [
  {
    title: "Fish Netting",
    description:
      "Take part in guided fish netting experiences inspired by local backwater traditions, offering an authentic glimpse into traditional fishing practices.",
    image:
      "https://images.unsplash.com/photo-1544551763-87405234241e?q=80&w=2071&auto=format&fit=crop", // Fishing net/activity
  },
  {
    title: "Kayaking",
    description:
      "Glide through calm waters and enjoy scenic lake views with guided kayaking sessions for a peaceful outdoor experience.",
    image:
      "https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?q=80&w=2070&auto=format&fit=crop", // Kayaking
  },
  {
    title: "Boat Safari",
    description:
      "Enjoy boating and light adventure activities when conditions permit. (Seasonal Activity)",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop", // Scenic lake view
  },
];

const recreationActivities = [
  {
    title: "Indoor Games",
    description:
      "A dedicated indoor recreation area featuring snooker, table football, carrom, and chess.",
    image:
      "https://images.unsplash.com/photo-1596707328639-5a1d7f4ce9d3?q=80&w=2070&auto=format&fit=crop", // Foosball/Indoor games
  },
  {
    title: "Badminton Court & Open Activity Spaces",
    description:
      "A designated badminton court along with open spaces for outdoor games and group activities.",
    image:
      "https://images.unsplash.com/photo-1626224583764-8478ab2d64d5?q=80&w=2070&auto=format&fit=crop", // Badminton/Activity
  },
  {
    title: "Kids Play Area",
    description:
      "A safe and cheerful play space thoughtfully designed for children to enjoy freely.",
    image:
      "https://images.unsplash.com/photo-1544766023-c901235b0b2e?q=80&w=2008&auto=format&fit=crop", // Playground
  },
];

const nearbyExperiences = [
  {
    title: "Nature & Village Walks",
    description:
      "Guided walks through the scenic lanes of Kudayathoor, a renowned film village where over 100 movies have been shot, showcasing timeless rural charm, natural landscapes, and authentic village life.",
    image:
      "https://images.unsplash.com/photo-1541367777749-8c290197d096?q=80&w=2070&auto=format&fit=crop", // Village/nature path
  },
  {
    title: "Farm & Plantation Visit",
    description:
      "Explore nearby farms and spice plantations, experiencing the sights and aromas of cardamom, pepper, and nutmeg while learning about traditional cultivation and rural life in the region.",
    image:
      "https://images.unsplash.com/photo-1596568461757-5586617a2a5e?q=80&w=2070&auto=format&fit=crop", // Plantation/spices
  },
  {
    title: "Trekking",
    description:
      "Experience scenic trekking trails across open hill landscapes, offering wide valley views, dramatic skies, and a refreshing escape into nature at Ilaveezhapoonchira.",
    image:
      "https://images.unsplash.com/photo-1502391060939-feb70ad28854?q=80&w=2070&auto=format&fit=crop", // Trekking/Hill view
  },
  {
    title: "Off-Road Drive",
    description:
      "Enjoy an adventurous off-road drive through rugged hill tracks leading to Ilaveezhapoonchira, offering raw landscapes, panoramic views, and a thrilling nature escape.",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Temple & Local Heritage Visits",
    description:
      "Visit nearby temples and heritage sites including Saramkuthi Temple, Vayanakkavu, and historic churches, offering a glimpse into the region’s spiritual traditions, architecture, and local culture.",
    image:
      "https://images.unsplash.com/photo-1621831885876-06aa4201712a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Dam & Viewpoint Visits",
    description:
      "Explore the Malankara Dam area with its multiple viewpoints, scenic bridges, lakeside green lawns, and open spaces, perfect for relaxed walks, photography, and peaceful sightseeing.",
    image:
      "https://images.unsplash.com/photo-1566376599763-7e2dc33ee72c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Experiences() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Experiences by the Lake
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Life at Malankara Palace flows gently with its surroundings,
            offering experiences that feel natural, peaceful, and deeply
            memorable.
          </p>
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900">
            In-House Experiences
          </h3>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experiences.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-2xl font-serif text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lake Activities Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {lakeActivities.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recreation & Kids Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recreationActivities.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nearby Experiences Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Nearby Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {nearbyExperiences.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-2xl font-serif text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-20 bg-yellow-50 p-8 md:p-12 rounded-sm text-center">
          <h4 className="text-2xl font-serif text-gray-900 mb-4">Note:</h4>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Certain experiences are seasonal and subject to weather conditions.
            Nearby experiences like fish netting, boat safari, and cultural
            performances are arranged on request and offered on a prior-demand
            basis.
          </p>
        </div>
      </div>
    </section>
  );
}
