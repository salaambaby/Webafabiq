import React from 'react';

const DownloadSection = () => {
  return (
    <section className="bg-white py-12 pb-20 relative overflow-hidden w-full h-96">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 w-20 h-20 bg-gray-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-16 right-16 w-16 h-16 bg-gray-100 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-gray-100 rounded-full opacity-60 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="grid grid-cols-2 gap-12 items-center h-full">
          {/* Left Side - Two Overlapping Phone Mockups */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Background Phone (Right) */}
              <div className="relative z-10 -ml-8 mt-8">
                <div className="w-40 h-60 bg-black rounded-2xl p-2 shadow-xl transform -rotate-6">
                  <div className="bg-white rounded-xl overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-2 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-4 h-1 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content - My Card & Recent Activity */}
                    <div className="p-3 space-y-3">
                      {/* Greeting */}
                      <div className="text-sm text-gray-600">Good Morning Casey</div>

                      {/* My Card Section */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-900">My Card</div>
                        <div className="space-y-1.5">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded text-white">
                            <div className="text-lg font-bold">$2.3k</div>
                            <div className="text-xs">Family</div>
                          </div>
                          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded text-white">
                            <div className="text-lg font-bold">$1.3k</div>
                            <div className="text-xs">Salary</div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="space-y-1.5">
                        <div className="text-sm font-semibold text-gray-900">Recent Activity</div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1.5">
                              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">N</div>
                              <span className="text-gray-900">Netflix</span>
                            </div>
                            <span className="text-red-500 font-semibold">-$73</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1.5">
                              <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">D</div>
                              <span className="text-gray-900">Dribbble</span>
                            </div>
                            <span className="text-red-500 font-semibold">-$230</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foreground Phone (Left) */}
              <div className="relative z-20">
                <div className="w-40 h-60 bg-black rounded-2xl p-2 shadow-xl transform rotate-6">
                  <div className="bg-white rounded-xl overflow-hidden h-full">
                    {/* Phone Header */}
                    <div className="bg-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-2 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-4 h-1 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content - Transaction */}
                    <div className="p-3 space-y-3">
                      {/* Transaction Header */}
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Transaction</div>
                        <div className="text-xl font-bold text-gray-900 mb-2">$24.3k</div>
                      </div>

                      {/* Bar Chart */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">$34.3k</span>
                          <div className="w-12 h-6 bg-[#9F73FE] rounded"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">$24.3k</span>
                          <div className="w-10 h-5 bg-[#68D3FF] rounded"></div>
                        </div>
                      </div>

                      {/* Transaction List */}
                      <div className="space-y-1.5">
                        <div className="text-sm font-semibold text-gray-900">Transaction</div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1.5">
                              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">N</div>
                              <span className="text-gray-900">Netflix</span>
                            </div>
                            <span className="text-red-500 font-semibold">-$73</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1.5">
                              <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">D</div>
                              <span className="text-gray-900">Dribbble</span>
                            </div>
                            <span className="text-red-500 font-semibold">-$230</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Download Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9F73FE] to-[#68D3FF]">
                  Game Now
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Join millions of players worldwide and start your word mastery journey today! 
                Download Alphabiq from your preferred app store.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-[#9F73FE] text-white rounded-lg hover:bg-[#8B5CF6] transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-[#9F73FE] font-bold text-sm">🍎</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-[#68D3FF] text-white rounded-lg hover:bg-[#60A5FA] transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-[#68D3FF] font-bold text-sm">▶</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection; 