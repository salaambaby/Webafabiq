'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-28 h-28 lg:w-32 lg:h-32 relative flex items-center justify-center">
              <Image
                src="/alphabiq logo.png"
                alt="Alphabiq Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-lg">
              Home
            </a>
            <a href="#how-to-play" className="text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-lg">
              How to Play
            </a>
            <a href="#powerups" className="text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-lg">
              Powerups
            </a>
            <a href="#leaderboard" className="text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-lg">
              Leaderboard
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-lg">
              About
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-lg">
              Sign In
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] text-white font-bold rounded-lg hover:from-[#8B5CF6] hover:to-[#60A5FA] transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-2">
              <span>🎮</span>
              <span>Play Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-[#68D3FF] focus:outline-none focus:text-[#68D3FF]"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black dark:bg-slate-900 border-t border-white/20">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#how-to-play" className="block px-3 py-2 text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200">
                How to Play
              </a>
              <a href="#powerups" className="block px-3 py-2 text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200">
                Powerups
              </a>
              <a href="#leaderboard" className="block px-3 py-2 text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200">
                Leaderboard
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200">
                About
              </a>
              <div className="pt-4 pb-3 border-t border-white/20">
                <div className="flex flex-col space-y-2">
                  <button className="px-3 py-2 text-gray-300 hover:text-[#68D3FF] font-medium transition-colors duration-200 text-left">
                    Sign In
                  </button>
                  <button className="px-3 py-2 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] text-white font-bold rounded-lg hover:from-[#8B5CF6] hover:to-[#60A5FA] transition-all duration-300">
                    🎮 Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 