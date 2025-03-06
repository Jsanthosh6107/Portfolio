"use client";

import React, { useState } from "react";
import { JacksonLogo } from "@/components/svgs";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import SlideIn from "@/hooks/SlideIn";

const Navbar = ({ navList = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();

  // Toggles the mobile menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Closes menu on navigation
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      <nav className="flex flex-row justify-between items-center x-margin pt-8">
        {/* Left section: Logo */}
        <SlideIn flip={true}>
          <JacksonLogo fill="black" aria-label="Company Logo" classes="w-28" />
        </SlideIn>
        {/* Center section: Nav links (hidden on small screens) */}
        <SlideIn flip={true} delay={100}>
          <ul className="hidden md:flex flex-row gap-0 lg:gap-8 font-medium text-lg">
            {navList.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.url}
                  className={`pb-3 px-5 border-b-gray-500 ${
                    currentPath === nav.url
                      ? ""
                      : "hover:text-gray-500 hover:border-b-[1px] hover:transition"
                  }`}
                >
                  {nav.text}
                </a>
              </li>
            ))}
          </ul>
        </SlideIn>

        {/* Right section: Button (hidden on small screens) */}
        <SlideIn flip={true} delay={200}>
          <div className="hidden md:block">
            <Button text="Contact Us" flipColor={false} link="/contact" />
          </div>
        </SlideIn>

        {/* Hamburger icon for mobile (shown below md) */}
        <button
          onClick={handleToggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
        </button>
      </nav>

      {/* Overlay (dark background behind the drawer) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300"
          onClick={handleToggleMenu}
        />
      )}

      {/* Side drawer (slides in from the right) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/5 md:w-1/3 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside the drawer */}
        <div className="flex justify-end p-4">
          <button
            onClick={handleToggleMenu}
            className="text-black focus:outline-none"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile nav links */}
        <ul className="px-6 py-4 flex flex-col gap-6 font-medium text-lg">
          {navList.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.url}
                onClick={handleMenuItemClick}
                className={`block py-2 px-2 ${
                  currentPath === nav.url
                    ? "text-gray-500"
                    : "text-black hover:text-blue-600 transition"
                }`}
              >
                {nav.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Button at bottom of drawer */}
        <div className="px-6 mt-auto pb-8">
          <Button text="Contact Us" flipColor={false} link="/contact"/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
