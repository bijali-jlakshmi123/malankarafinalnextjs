import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";

export default function ExperiencesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" // Placeholder for woman in pool
          alt="Woman in pool enjoying a drink"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Overlay for text readability */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Experiences Beyond the Stay
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Enjoy curated in-house activities and outdoor adventures that take
            you beyond the resort.
          </p>
        </div>
      </section>

      {/* Existing Experiences List */}
      <Experiences />

      <Footer />
    </main>
  );
}
