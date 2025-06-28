"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa"; // ✅ using react-icons (install if not yet)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
          <FaHome className="text-3xl text-yellow-400 drop-shadow-md" />
          <span className="text-2xl font-extrabold tracking-wide font-serif text-white">
            Hoten Group
          </span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <NavLink href="/" label="Home" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/saas" label="SaaS" />
          <NavLink href="/inspections" label="Inspections" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>

      {/* Mobile nav */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} px-6 pb-4`}>
        <nav className="space-y-2 text-sm font-medium">
          <NavLink href="/" label="Home" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/saas" label="SaaS" />
          <NavLink href="/inspections" label="Inspections" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-gray-200 hover:text-white hover:underline underline-offset-4 transition"
    >
      {label}
    </Link>
  );
}
