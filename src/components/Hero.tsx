"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-100 relative overflow-hidden flex items-center justify-center py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              The Next Big Thing In Word Gaming.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
              With strategic powerups and instant multiplayer challenges, word gaming is now brilliant on the Alphabiq Mobile App.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
              <button className="flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 lg:px-10 lg:py-5 bg-black text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl text-sm sm:text-base lg:text-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm lg:text-lg">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm lg:text-base opacity-75">Download on the</div>
                  <div className="font-semibold text-sm sm:text-base lg:text-lg">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 lg:px-10 lg:py-5 bg-black text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl text-sm sm:text-base lg:text-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm lg:text-lg">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm lg:text-base opacity-75">GET IT ON</div>
                  <div className="font-semibold text-sm sm:text-base lg:text-lg">Google Play</div>
                </div>
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">4.8</span>
              <div className="flex space-x-1">
                <span className="text-yellow-400 text-xl sm:text-2xl lg:text-3xl">★★★★★</span>
              </div>
              <span className="text-sm sm:text-base lg:text-lg text-gray-600">990+ Reviews</span>
            </div>
          </div>

          {/* High-Definition Alphabiq Image */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] 2xl:h-[44rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9F73FE] via-[#8B5CF6] to-[#68D3FF]"></div>
              
              {/* Floating Letters */}
              <div className="absolute inset-0">
                <div className="absolute top-4 sm:top-6 lg:top-10 left-4 sm:left-6 lg:left-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-3xl font-bold text-white animate-float">A</div>
                <div className="absolute top-8 sm:top-12 lg:top-20 right-8 sm:right-12 lg:right-16 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg lg:text-2xl font-bold text-white animate-float-delay">B</div>
                <div className="absolute top-16 sm:top-20 lg:top-32 left-1/4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-xs sm:text-sm lg:text-xl font-bold text-white animate-float-delay-2">C</div>
                <div className="absolute top-24 sm:top-28 lg:top-40 right-1/4 w-10 h-10 sm:w-12 sm:h-12 lg:w-18 lg:h-18 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-4xl font-bold text-white animate-float">D</div>
                <div className="absolute top-32 sm:top-40 lg:top-60 left-1/3 w-8 h-8 sm:w-10 sm:h-10 lg:w-15 lg:h-15 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg lg:text-2xl font-bold text-white animate-float-delay">E</div>
                <div className="absolute top-40 sm:top-48 lg:top-80 right-1/4 w-7 h-7 sm:w-9 sm:h-9 lg:w-13 lg:h-13 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-xs sm:text-sm lg:text-xl font-bold text-white animate-float-delay-2">F</div>
              </div>

              {/* Game Categories */}
              <div className="absolute bottom-8 sm:bottom-12 lg:bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                    <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">🎯</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">Name</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                    <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">🌍</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">Place</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                    <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">🦁</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">Animal</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                    <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">🍕</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">Food</div>
                  </div>
                </div>
              </div>

              {/* Central Gaming Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Roulette Wheel */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full border-4 sm:border-6 lg:border-8 border-white shadow-xl sm:shadow-2xl animate-spin-slow flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9F73FE]">A</span>
                    </div>
                  </div>
                  
                  {/* Powerup Icons */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">⚡</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-bounce-delay">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">💡</span>
                  </div>
                  <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 lg:-top-4 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg animate-bounce-delay-2">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">⏰</span>
                  </div>
                </div>
              </div>

              {/* Timer Display */}
              <div className="absolute top-1/4 right-4 sm:right-6 lg:right-1/4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">02:45</div>
                  <div className="text-xs sm:text-sm text-gray-600">Time Remaining</div>
                </div>
              </div>

              {/* Score Display */}
              <div className="absolute bottom-1/4 left-4 sm:left-6 lg:left-1/4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-lg">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#9F73FE]">1,320</div>
                  <div className="text-xs sm:text-sm text-gray-600">Total Score</div>
                </div>
              </div>

              {/* Light Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute top-1/2 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-1/2 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes bounce-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 3s ease-in-out infinite 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-delay {
          animation: bounce-delay 2s ease-in-out infinite 0.5s;
        }
        .animate-bounce-delay-2 {
          animation: bounce-delay-2 2s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero; 