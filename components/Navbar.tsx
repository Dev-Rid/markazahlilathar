"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Teachers", href: "/teachers" },
  { name: "Donate", href: "/donations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0B2545] border-b border-[#C8A44A]/20 shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-[22px] font-bold text-white tracking-wide">
          <span className="text-[#C8A44A]">Markaz</span> Ahlil Athar
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative group text-white/80 hover:text-[#C8A44A] text-[18px] px-3 py-2 rounded-sm transition-colors duration-200 hover:bg-[#C8A44A]/10 block"
              >
                {link.name}
                <span className="absolute left-3 -bottom-0.5 w-0 h-[2px] bg-[#C8A44A] transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white border border-white/30 rounded-sm p-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#163E7C] px-6 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/85 hover:text-[#C8A44A] text-[15px] py-2.5 border-b border-white/10 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}