import React from 'react';

const DownloadAppSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 py-6 lg:py-8 relative overflow-hidden">
      {/* Background Light Streaks */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-6 w-28 h-1 bg-gradient-to-r from-transparent via-[#9F73FE] to-transparent blur-sm opacity-30"></div>
        <div className="absolute top-16 right-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#68D3FF] to-transparent blur-sm opacity-30"></div>
        <div className="absolute bottom-16 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-[#9F73FE] to-transparent blur-sm opacity-30"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* Left Side - Phone Widgets in Row Format */}
            <div className="flex justify-start lg:justify-start lg:pl-6">
              <div className="flex space-x-4 items-end">
                {/* Phone 0 (Smallest - New Addition) */}
                <div className="w-20 h-28 bg-white rounded-lg p-2 shadow-sm transform -rotate-8 opacity-50">
                  <div className="bg-white rounded-md overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] px-2 py-1 flex justify-between items-center text-sm text-white">
                      <span>9:41</span>
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                      </div>
                    </div>
                    {/* Roulette Spin Content */}
                    <div className="p-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#9F73FE] animate-spin">🎰</div>
                        <div className="text-base font-bold text-gray-900">SPIN</div>
                        <div className="text-sm text-gray-600">Roulette</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 1 (Small) */}
                <div className="w-24 h-32 bg-white rounded-lg p-2 shadow-sm transform -rotate-6 opacity-60">
                  <div className="bg-white rounded-md overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] px-2 py-1 flex justify-between items-center text-sm text-white">
                      <span>9:41</span>
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                      </div>
                    </div>
                    {/* Categories Content */}
                    <div className="p-2">
                      <div className="text-base font-bold text-gray-900 mb-1">Categories</div>
                      <div className="space-y-0.5">
                        <div className="text-sm text-[#9F73FE] font-semibold">Name</div>
                        <div className="text-sm text-[#68D3FF] font-semibold">Place</div>
                        <div className="text-sm text-[#9F73FE] font-semibold">Animal</div>
                        <div className="text-sm text-[#68D3FF] font-semibold">Food</div>
                        <div className="text-sm text-[#9F73FE] font-semibold">Thing</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 (Medium Small) */}
                <div className="w-26 h-36 bg-white rounded-lg p-2 shadow-md transform -rotate-4 opacity-75">
                  <div className="bg-white rounded-md overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-r from-[#68D3FF] to-[#9F73FE] px-2 py-1 flex justify-between items-center text-sm text-white">
                      <span>9:41</span>
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                      </div>
                    </div>
                    {/* Powerups Content */}
                    <div className="p-2">
                      <div className="text-base font-bold text-gray-900 mb-1">Powerups</div>
                      <div className="space-y-1">
                        <div className="bg-gradient-to-r from-[#9F73FE] to-purple-600 p-1.5 rounded text-white">
                          <div className="text-base font-bold">⏰</div>
                          <div className="text-sm">Time Freeze</div>
                        </div>
                        <div className="bg-gradient-to-r from-[#68D3FF] to-blue-600 p-1.5 rounded text-white">
                          <div className="text-base font-bold">💡</div>
                          <div className="text-sm">Hint</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 3 (Medium) */}
                <div className="w-28 h-40 bg-white rounded-lg p-2 shadow-md transform -rotate-2 opacity-85">
                  <div className="bg-white rounded-md overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] px-2 py-1 flex justify-between items-center text-sm text-white">
                      <span>9:41</span>
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-0.5 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                      </div>
                    </div>
                    {/* Leaderboard Content */}
                    <div className="p-2">
                      <div className="text-base font-bold text-gray-900 mb-1">Leaderboard</div>
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-yellow-500 font-bold">🥇</span>
                          <span className="text-gray-900 font-semibold">Player1</span>
                          <span className="text-[#9F73FE] font-bold">2,450</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400 font-bold">🥈</span>
                          <span className="text-gray-900 font-semibold">Player2</span>
                          <span className="text-[#68D3FF] font-bold">2,120</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-orange-500 font-bold">🥉</span>
                          <span className="text-gray-900 font-semibold">Player3</span>
                          <span className="text-green-500 font-bold">1,890</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 font-bold">4</span>
                          <span className="text-gray-900 font-semibold">You</span>
                          <span className="text-[#9F73FE] font-bold">1,320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 4 (Large - Game Interface) */}
                <div className="w-30 h-44 bg-white rounded-lg p-3 shadow-lg transform rotate-2 opacity-90">
                  <div className="bg-white rounded-md overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-r from-[#68D3FF] to-[#9F73FE] px-3 py-2 flex justify-between items-center text-base text-white">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-2 h-0.5 bg-white/30 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content - Alphabiq Game Interface */}
                    <div className="p-3 space-y-3">
                      {/* Header */}
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#9F73FE] rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-900 text-base">Alphabiq</span>
                      </div>
                      <div className="text-base text-gray-600">Current Game</div>

                      {/* Roulette Letter */}
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#9F73FE] mb-1 animate-bounce">A</div>
                        <div className="text-base text-gray-500">Letter Selected</div>
                      </div>

                      {/* Game Categories */}
                      <div className="space-y-1">
                        <div className="text-base font-semibold text-gray-900">Categories</div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Name</span>
                            <span className="text-[#68D3FF] font-semibold">Apple</span>
                          </div>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Place</span>
                            <span className="text-[#68D3FF] font-semibold">Amsterdam</span>
                          </div>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Animal</span>
                            <span className="text-[#68D3FF] font-semibold">Antelope</span>
                          </div>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Food</span>
                            <span className="text-[#68D3FF] font-semibold">Apple Pie</span>
                          </div>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Thing</span>
                            <span className="text-[#68D3FF] font-semibold">Airplane</span>
                          </div>
                        </div>
                      </div>

                      {/* Timer */}
                      <div className="text-center">
                        <div className="text-base font-bold text-red-500">02:45</div>
                        <div className="text-base text-gray-500">Time Remaining</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 5 (Largest - Powerups & Stats) */}
                <div className="w-32 h-44 bg-white rounded-lg p-3 shadow-lg transform rotate-6">
                  <div className="bg-white rounded-md overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] px-3 py-2 flex justify-between items-center text-base text-white">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-1 h-0.5 bg-white/30 rounded-sm"></div>
                        <div className="w-2 h-0.5 bg-white/30 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content - Powerups & Stats */}
                    <div className="p-3 space-y-3">
                      {/* Greeting */}
                      <div className="text-base text-gray-600">Welcome back</div>
                      <div className="text-base font-semibold text-gray-900">Player 1</div>

                      {/* Powerups Section */}
                      <div className="space-y-2">
                        <div className="text-base font-semibold text-gray-900">Powerups</div>
                        <div className="space-y-2">
                          <div className="bg-gradient-to-r from-[#9F73FE] to-purple-600 p-2 rounded-md text-white">
                            <div className="text-base font-bold">Time Freeze</div>
                            <div className="text-sm opacity-75">+30 seconds</div>
                          </div>
                          <div className="bg-gradient-to-r from-[#68D3FF] to-blue-600 p-2 rounded-md text-white">
                            <div className="text-base font-bold">Hint</div>
                            <div className="text-sm opacity-75">Reveal answer</div>
                          </div>
                        </div>
                      </div>

                      {/* Game Stats */}
                      <div className="space-y-1">
                        <div className="text-base font-semibold text-gray-900">Stats</div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Games Won</span>
                            <span className="text-[#9F73FE] font-semibold">24</span>
                          </div>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Total Score</span>
                            <span className="text-[#68D3FF] font-semibold">1,320</span>
                          </div>
                          <div className="flex items-center justify-between text-base">
                            <span className="text-gray-600">Rank</span>
                            <span className="text-green-500 font-semibold">#3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-4 text-center lg:text-left lg:pl-6">
              <div className="space-y-3">
                <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                  Download Alphabiq Now
                </h2>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  Join millions of players worldwide! Download Alphabiq from the app store or google play store and start your word adventure today.
                </p>
              </div>

              {/* Game Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-800/50 rounded-md border border-gray-700/50">
                  <div className="text-lg mb-2">🎯</div>
                  <div className="text-base font-semibold text-white">5 Categories</div>
                  <div className="text-sm text-gray-400">Name, Place, Animal, Food, Thing</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-md border border-gray-700/50">
                  <div className="text-lg mb-2">⚡</div>
                  <div className="text-base font-semibold text-white">Powerups</div>
                  <div className="text-sm text-gray-400">Time Freeze & Hints</div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="flex items-center justify-center space-x-3 px-4 py-3 bg-gradient-to-r from-[#9F73FE] to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-[#9F73FE] transition-all duration-300 transform hover:scale-105 shadow-md">
                  <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                    <span className="text-[#9F73FE] font-bold text-sm">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-75">Download on the</div>
                    <div className="font-semibold text-base">App Store</div>
                  </div>
                </button>
                
                <button className="flex items-center justify-center space-x-3 px-4 py-3 bg-gradient-to-r from-[#68D3FF] to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-[#68D3FF] transition-all duration-300 transform hover:scale-105 shadow-md">
                  <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                    <span className="text-[#9F73FE] font-bold text-sm">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-75">GET IT ON</div>
                    <div className="font-semibold text-base">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection; 