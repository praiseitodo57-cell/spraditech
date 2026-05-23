'use client';
import { BookOpen, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  className?: string;
  showGetStarted?: boolean;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Courses", label: "Courses" },
  { href: "/Blog", label: "Blog" },
  { href: "/Contact", label: "Contact" },
  { href: "/Privacy", label: "Privacy" },
  { href: "/Terms", label: "Terms" },
];

const Navbar = ({ className = "", showGetStarted = true }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-gray-700">Spraditech</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {showGetStarted && (
            <button className="hidden sm:block bg-blue-900 px-5 py-2 rounded-lg text-white text-sm font-bold hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          )}
          {/* Hamburger — visible on mobile & tablet */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 pb-5 pt-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors rounded-lg px-3 py-2 font-medium text-sm"
            >
              {label}
            </Link>
          ))}
          {showGetStarted && (
            <button className="mt-3 w-full bg-blue-900 py-2.5 rounded-lg text-white text-sm font-bold hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;