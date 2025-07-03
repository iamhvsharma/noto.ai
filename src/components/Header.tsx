"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Image src="/logo.png" alt="logo" width={40} height={40} /> */}
          <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white px-2 py-1 rounded-md">
            Noto.ai
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {/* Add more nav links here if needed */}
          <Button variant="outline">Sign in</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          {/* Add more nav items here if needed */}
          <Button variant="outline" className="w-full">
            Sign in
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
