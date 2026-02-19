"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { useState } from "react";

const data = [
  { name: "Vagamon", dist: "25 kms", time: "1 hr", cat: "Nearby Town" },
  { name: "Thekkady", dist: "40 kms", time: "1½ hrs", cat: "Nearby Town" },
  { name: "Kottayam", dist: "60 kms", time: "1½ hrs", cat: "Major Town" },
  { name: "Kumarakom", dist: "75 kms", time: "2 hrs", cat: "Major Town" },
  { name: "Munnar", dist: "91 kms", time: "3½ hrs", cat: "Major Town" },
  { name: "Kochi City", dist: "94 kms", time: "2½ hrs", cat: "Major Town" },
  { name: "Madurai", dist: "170 kms", time: "4 hrs", cat: "Major Town" },
  { name: "Trivandrum", dist: "186 kms", time: "4½ hrs", cat: "Major Town" },
  {
    name: "Kochi Airport (COK)",
    dist: "98 kms",
    time: "3 hrs",
    cat: "Primary Airport",
  },
  {
    name: "Kottayam Station",
    dist: "60 kms",
    time: "1½ hrs",
    cat: "Nearest Railway",
  },
  {
    name: "Piravom Road",
    dist: "52 kms",
    time: "1 hr 15 min",
    cat: "Nearby Railway",
  },
  {
    name: "Ernakulam (ERS/ERN)",
    dist: "92 kms",
    time: "2½ hrs",
    cat: "Major Railway Hub",
  },
  {
    name: "Angamaly Station",
    dist: "102 kms",
    time: "3 hrs",
    cat: "Major Railway Hub",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" // Professional reception/lobby shot
          alt="Contact Us - Malankara Palace"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient Overlay for text readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
              We&apos;re Here to Help
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              Have a question or booking request? Our team is ready to assist
              you.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* change items-start → items-stretch */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left side: Image */}
            <div className="w-full lg:w-1/2 relative rounded-sm overflow-hidden shadow-lg min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
                alt="Malankara Palace Poolside"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-10 leading-tight">
                  Connect With Us for a <br /> Perfect Stay You & Family
                </h2>

                <ValidatedContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.564560737!2d76.7849375!3d9.8286875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c70030d7a1d5%3A0xa15bab4e2007ca5a!2sMalankara%20Palace%20Lake%20View%20Resort%20%26%20Spa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Distance Info Heading Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 font-medium mb-10">
            Distance from Major Towns & Travel Hubs
          </h2>
          <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider border border-gray-200">
                    Destination / Gateway
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider border border-gray-200">
                    Distance
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider border border-gray-200">
                    Estimated Time
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider border border-gray-200">
                    Category
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 border border-gray-200">
                      {item.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 border border-gray-200">
                      {item.dist}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 border border-gray-200">
                      {item.time}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 border border-gray-200">
                      {item.cat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ValidatedContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        guests: "",
        checkIn: "",
        checkOut: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          suppressHydrationWarning
          className={`w-full px-4 py-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs">{errors.fullName}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          suppressHydrationWarning
          className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors`}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            suppressHydrationWarning
            className={`w-full px-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            No. of Guests
          </label>
          <input
            type="text"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="No. of Guests"
            suppressHydrationWarning
            className={`w-full px-4 py-3 border ${errors.guests ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors`}
          />
          {errors.guests && (
            <p className="text-red-500 text-xs">{errors.guests}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Check-in Date
          </label>
          <input
            type="text"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            placeholder="Check-in Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            suppressHydrationWarning
            className={`w-full px-4 py-3 border ${errors.checkIn ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors`}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-xs">{errors.checkIn}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Check-out Date
          </label>
          <input
            type="text"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            placeholder="Check-out Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            suppressHydrationWarning
            className={`w-full px-4 py-3 border ${errors.checkOut ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors`}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-xs">{errors.checkOut}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          suppressHydrationWarning
          className={`w-full px-4 py-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-sm focus:outline-none focus:border-[#702C8B] transition-colors resize-none`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        suppressHydrationWarning
        className="bg-[#702C8B] text-white px-12 py-4 rounded-sm font-medium uppercase tracking-widest hover:bg-[#5a2370] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-medium">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
