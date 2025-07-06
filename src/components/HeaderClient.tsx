// src/components/HeaderClient.tsx
"use client";

import React, { useState } from "react";
import { ModeToggle } from "./DarkMode";
import { Menu, X } from "lucide-react";
import LogoutButton from "./Auth/LogoutButton";
import LoginButton from "./Auth/LoginButton";
import SignupButton from "./Auth/SignupButton";

interface HeaderClientProps {
  user: unknown;
}

const HeaderClient: React.FC<HeaderClientProps> = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 border-b border-zinc-200 dark:border-white/10 backdrop-blur-sm bg-white/70 dark:bg-black/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">Noto.ai</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <SignupButton />
          {user ? <LogoutButton /> : <LoginButton />}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-muted"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex items-center flex-col justify-around gap-3 px-6">
          <SignupButton />
          {user ? <LogoutButton /> : <LoginButton />}
        </div>
      )}
    </header>
  );
};

export default HeaderClient;
