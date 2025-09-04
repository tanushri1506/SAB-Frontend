"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#council", label: "Executive Committee" },
  { href: "/#events", label: "Events" },
  { href: "#", label: "Students" },
  { href: "/pal", label: "PAL Classes" },
  { href: "/language", label: "Language Cell" },
  { href: "/workshops", label: "Workshop Cell" },
  { href: "/lectures", label: "Lecture Series" },
  { href: "/ug-council", label: "UG Council" },
  { href: "/phd-council", label: "Phd Council" },
  { href: "/rsf", label: "RSF" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      setMenuOpen(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [path]);

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-red-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-gray-700 hover:text-red-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden text-gray-700 bg-white shadow-md border-t ">
          <div className="flex flex-col p-4 space-y-2 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-red-900 hover:underline transition "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {loading && <BarLoader width={"100%"} color="#f87171" />}
    </header>
  );
};

export default Header;
