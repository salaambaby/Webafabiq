import React from 'react';

const TransactionSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Background Light Streaks */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-[#9F73FE] to-transparent blur-sm opacity-20"></div>
        <div className="absolute top-40 right-20 w-28 h-1 bg-gradient-to-r from-transparent via-[#68D3FF] to-transparent blur-sm opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-[#9F73FE] to-transparent blur-sm opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-20">
        {/* Header Section - Exactly like Bankai */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Game-Changing{' '}
              <span className="bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] bg-clip-text text-transparent">
                Powerups
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Master the game with strategic powerups! From time extensions to word hints, these abilities will give you the competitive edge against players worldwide.
            </p>
          </div>
        </div>

        {/* Three Feature Cards - Exactly like Bankai */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1: Time Extension Powerup */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Time Extension
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Add precious seconds to your timer when you&apos;re running out of time. 
                Perfect for those last-minute word completions!
              </p>
              
              {/* Mobile Phone Mockup */}
              <div className="relative">
                <div className="w-full max-w-xs mx-auto">
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Phone Header */}
                      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                        <span>ALPHABIQ</span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-6 h-1.5 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gray-300 rounded"></div>
                          <span className="font-semibold text-gray-900">Timer</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-[#EF4444] mb-2">15s</div>
                            <div className="text-sm text-gray-600">Time Remaining</div>
                          </div>
                          
                          <div className="bg-[#68D3FF]/10 rounded-lg p-3">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-[#68D3FF] mb-1">+15s</div>
                              <div className="text-sm text-gray-600">Extension</div>
                            </div>
                          </div>
                          
                          <button className="w-full bg-[#68D3FF] text-white font-bold py-2 rounded-lg hover:bg-[#60A5FA] transition-all duration-300">
                            ACTIVATE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Word Hint Powerup */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Word Hint System
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get a helpful hint when you&apos;re stuck on a category. 
                Reveals the first letter of a valid word to get you back on track.
              </p>
              
              {/* Mobile Phone Mockup */}
              <div className="relative">
                <div className="w-full max-w-xs mx-auto">
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Phone Header */}
                      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                        <span>ALPHABIQ</span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-6 h-1.5 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gray-300 rounded"></div>
                          <span className="font-semibold text-gray-900">History</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm text-gray-600 mb-2">Current Progress</div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-[#10B981] h-2 rounded-full w-3/4"></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">3/5 Categories</div>
                          </div>
                          
                          <div className="bg-[#10B981]/10 rounded-lg p-3 border-l-4 border-[#10B981]">
                            <div className="text-sm text-[#10B981] font-semibold">💡 Hint Available</div>
                            <div className="text-xs text-gray-600">Tap to reveal</div>
                          </div>
                          
                          <button className="w-full bg-[#10B981] text-white font-bold py-2 rounded-lg hover:bg-[#059669] transition-all duration-300">
                            GET HINT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Score Multiplier Powerup */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Score Multiplier
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Double your points for the next round! Use this powerup strategically 
                to climb the leaderboards and dominate the competition.
              </p>
              
              {/* Mobile Phone Mockup */}
              <div className="relative">
                <div className="w-full max-w-xs mx-auto">
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Phone Header */}
                      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                        <span>ALPHABIQ</span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-6 h-1.5 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gray-300 rounded"></div>
                          <span className="font-semibold text-gray-900">Activity</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600">Current Score:</span>
                              <span className="text-lg font-bold text-gray-900">1,250</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-[#9F73FE]">With Multiplier:</span>
                              <span className="text-lg font-bold text-[#9F73FE]">2,500</span>
                            </div>
                          </div>
                          
                          <div className="bg-[#F59E0B]/10 rounded-lg p-2 text-center">
                            <div className="text-xs text-[#F59E0B] font-semibold">⚡ 2× Multiplier</div>
                            <div className="text-xs text-gray-500">Next Round Only</div>
                          </div>
                          
                          <button className="w-full bg-[#9F73FE] text-white font-bold py-2 rounded-lg hover:bg-[#8B5CF6] transition-all duration-300">
                            ACTIVATE 2×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionSection; 