import React from 'react';

const HowToPlaySection = () => {
  return (
    <section className="bg-white dark:bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Visual Element - Game Interface */}
          <div className="relative">
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-gradient-to-br from-[#9F73FE] to-[#68D3FF] rounded-2xl p-3 shadow-xl transform rotate-3">
                <div className="bg-white rounded-xl overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                    <span>ALPHABIQ</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-1 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-1 bg-gray-400 rounded-sm"></div>
                      <div className="w-4 h-1 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Game Content */}
                  <div className="p-3 space-y-3">
                    {/* Roulette Result */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold text-white">B</span>
                      </div>
                      <div className="text-xs text-gray-600">Letter Selected</div>
                    </div>
                    
                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-[#9F73FE]/10 p-1.5 rounded text-center border border-[#9F73FE]/20">
                        <div className="text-xs text-[#9F73FE] font-semibold">NAME</div>
                        <div className="font-bold text-[#9F73FE] text-sm">Bob</div>
                      </div>
                      <div className="bg-[#68D3FF]/10 p-1.5 rounded text-center border border-[#68D3FF]/20">
                        <div className="text-xs text-[#68D3FF] font-semibold">PLACE</div>
                        <div className="font-bold text-[#68D3FF] text-sm">Berlin</div>
                      </div>
                      <div className="bg-[#10B981]/10 p-1.5 rounded text-center border border-[#10B981]/20">
                        <div className="text-xs text-[#10B981] font-semibold">ANIMAL</div>
                        <div className="font-bold text-[#10B981] text-sm">Bear</div>
                      </div>
                      <div className="bg-[#F59E0B]/10 p-1.5 rounded text-center border border-[#F59E0B]/20">
                        <div className="text-xs text-[#F59E0B] font-semibold">FOOD</div>
                        <div className="font-bold text-[#F59E0B] text-sm">Burger</div>
                      </div>
                      <div className="bg-[#EF4444]/10 p-1.5 rounded text-center border border-[#EF4444]/20 col-span-2">
                        <div className="text-xs text-[#EF4444] font-semibold">THING</div>
                        <div className="font-bold text-[#EF4444] text-sm">Bridge</div>
                      </div>
                    </div>
                    
                    {/* Timer */}
                    <div className="text-center">
                      <div className="w-10 h-10 bg-[#EF4444] rounded-full flex items-center justify-center mx-auto">
                        <span className="text-sm font-bold text-white">15</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Seconds Left</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#9F73FE] rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-[#68D3FF] rounded-full opacity-60 animate-bounce delay-1000"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-800">
                4 Quick Steps To
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9F73FE] to-[#68D3FF]">
                  Play Alphabiq
                </span>
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-700">
                Get started with the ultimate word challenge in just 4 simple steps!
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800 mb-1">
                    Download & Join
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-700">
                    Download Alphabiq from the App Store or Google Play. Create your account and join the global community of word masters!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800 mb-1">
                    Spin the Roulette
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-700">
                    Watch the roulette spin and land on a random letter (A-Z). This letter will be the starting point for all your word answers!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800 mb-1">
                    Fill Categories Fast
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-700">
                    Race against time to fill all 5 categories: Name, Place, Animal, Food, and Thing. All words must start with the chosen letter!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800 mb-1">
                    Use Powerups & Win
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-700">
                    Strategically use powerups like time extensions, word hints, and score multipliers to gain the edge and climb the leaderboards!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] text-white font-bold rounded-lg hover:from-[#8B5CF6] hover:to-[#60A5FA] transition-all duration-300 transform hover:scale-105 shadow-lg">
                🎮 Start Playing Now
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                📖 Read Full Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection; 