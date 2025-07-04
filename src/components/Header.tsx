"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./DarkMode";
import { LogIn, Menu, X } from "lucide-react";
import LogoutButton from "./Auth/LogoutButton";
import LoginButton from "./Auth/LoginButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = 0;

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
          <Button variant="outline" className="text-sm">
            Watch demo
          </Button>

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
        <div className="md:hidden mt-4 flex flex-col items-start gap-3 px-6">
          <Button variant="ghost" className="w-full justify-start text-sm">
            Watch demo
          </Button>
          {user ? <LogoutButton /> : <LoginButton />}
        </div>
      )}
    </header>
  );
};

export default Header;
