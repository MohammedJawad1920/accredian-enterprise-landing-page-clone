"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
              <Image
                src="/images/logo.webp"
                alt="Accredian Enterprise"
                width={130}
                height={38}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </Link>
            <div className="hidden xl:flex items-center gap-4">
              <Link href="#home" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Home</Link>
              <Link href="#stats" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Stats</Link>
              <Link href="#clients" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Clients</Link>
              <Link href="#edge" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Accredian Edge</Link>
              <Link href="#programs" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Why Us</Link>
              <Link href="#offerings" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Programs</Link>
              <Link href="#how-it-works" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">How It Works</Link>
              <Link href="#testimonials" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Testimonials</Link>
              <Link href="#contact" className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-3 sm:gap-4">
            <Button variant="outline" size="sm" href="#login">
              Login
            </Button>
            <Button variant="primary" size="sm" href="#contact">
              Contact Us
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="p-2 -mr-2 text-neutral-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white shadow-xl absolute w-full left-0">
          <Container>
            <div className="flex flex-col space-y-2 py-4">
              <Link href="#home" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Home</Link>
              <Link href="#stats" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Stats</Link>
              <Link href="#clients" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Clients</Link>
              <Link href="#edge" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Accredian Edge</Link>
              <Link href="#programs" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Why Us</Link>
              <Link href="#offerings" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Programs</Link>
              <Link href="#how-it-works" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>How It Works</Link>
              <Link href="#testimonials" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Testimonials</Link>
              <Link href="#contact" className="px-2 py-3 text-base font-semibold text-neutral-800 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors" onClick={closeMenu}>Contact</Link>
              <div className="pt-4 mt-2 flex flex-col gap-3 border-t border-neutral-100 px-2">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  href="#login"
                  onClick={closeMenu}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
