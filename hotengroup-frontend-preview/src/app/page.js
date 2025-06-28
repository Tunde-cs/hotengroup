"use client";

// ✅ /src/app/page.js (Hoten Group Premium Landing Page)

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-sans text-gray-100 bg-[#111827]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Your Full-Service Real Estate & AI Partner
          </h1>
          <p className="text-xl mb-6">
            From flipping homes to powering smart properties — Hoten Group does it all.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/services#buy-sell" className="block">
            <ServiceCard
              title="Buy & Sell Homes"
              icon="🏨️"
              desc="We help you buy, flip, or sell homes profitably."
            />
          </Link>
          <Link href="/services#remodeling" className="block">
            <ServiceCard
              title="Remodeling"
              icon="💪️"
              desc="Full home, kitchen, and bathroom renovations."
            />
          </Link>
          <Link href="/services#construction" className="block">
            <ServiceCard
              title="New Construction"
              icon="🏟️"
              desc="From land to luxury — we build it all."
            />
          </Link>
          <Link href="/inspections" className="block">
            <ServiceCard
              title="Home Inspections"
              icon="🕵️"
              desc="Certified inspections for peace of mind."
            />
          </Link>
          <Link href="/services#subcontracting" className="block">
            <ServiceCard
              title="Subcontracting"
              icon="🔧"
              desc="Plumbing, Electrical, HVAC, Roofing & more."
            />
          </Link>
          <Link href="/saas" className="block">
            <ServiceCard
              title="SaaS & Tech Products"
              icon="🤖"
              desc="Smart home AI tools and contractor CRM solutions."
            />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-16 px-4">
        <h3 className="text-3xl font-bold mb-4">Ready to work with Hoten Group?</h3>
        <p className="mb-6 text-lg">
          Let us help you build, inspect, or scale with our smart real estate and AI solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-900 font-semibold px-6 py-3 rounded hover:bg-gray-100"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}

function ServiceCard({ title, icon, desc }) {
  return (
    <div className="bg-[#1f2937] text-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-700">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
