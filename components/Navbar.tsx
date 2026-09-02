"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 8) {
        setVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY - 8) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f7f5] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide"
        >
          SAHIB TAJ SINGH
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#home"
            className="transition-colors hover:text-slate-500"
          >
            Home
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-slate-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-slate-500"
          >
            About
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-slate-500"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-slate-500"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-black transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-full bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-black/10 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-lg"
          >
            Home
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-lg"
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-lg"
          >
            About
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
            className="border-b border-black/10 py-4 text-lg"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="py-4 text-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}