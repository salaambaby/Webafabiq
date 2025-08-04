import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          {/* Left Side - Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">Alphabiq</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fully featured word game app that can easily be customized to reflect your own gaming experience with friends and family.
            </p>
            <p className="text-gray-400 text-xs">
              Copyright © 2024 - 2025 Alphabiq. All rights reserved.
            </p>
          </div>

          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Project</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Track Record</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Professional Team</a></li>
            </ul>
          </div>

          {/* Game Features Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-3">Game Features</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">About Game</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Powerups</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Multiplayer</a></li>
              <li><a href="#" className="hover:text-[#68D3FF] transition-colors">Leaderboards</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-[#9F73FE]">📞</span>
                <span>(077) 092 5353</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#68D3FF]">📧</span>
                <span>support@alphabiq.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#9F73FE]">🌐</span>
                <span>www.alphabiq.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-xs">
            By using this website, you understand the information being presented is provided for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 