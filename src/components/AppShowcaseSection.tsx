import React from 'react';

const AppShowcaseSection = () => {
  return (
    <section className="bg-white dark:bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden h-full relative">
                  {/* Phone Header */}
                  <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                      <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                      <div className="w-6 h-1.5 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Transaction History Header */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">$24.320.00</div>
                      <div className="text-sm text-gray-600">Transaction History</div>
                    </div>

                    {/* Bar Chart */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">$34.300.00</span>
                        <div className="w-20 h-10 bg-[#9F73FE] rounded"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">$24.320.00</span>
                        <div className="w-16 h-8 bg-[#68D3FF] rounded"></div>
                      </div>
                    </div>

                    {/* Transaction List */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">N</div>
                          <span className="text-gray-900">Netflix</span>
                        </div>
                        <span className="text-red-500 font-semibold">-$73</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">D</div>
                          <span className="text-gray-900">Dribbble</span>
                        </div>
                        <span className="text-red-500 font-semibold">-$230</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-around bg-gray-100 rounded-lg p-2">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#9F73FE] rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#68D3FF] rounded-full opacity-60 animate-bounce delay-1000"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-800 leading-tight">
                Download Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9F73FE] to-[#68D3FF]">
                  App Now
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-700 leading-relaxed">
                Please feel free to download our app on the app store or google play store to evaluate our product.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-75">GET IT ON</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#9F73FE]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#9F73FE] text-lg">⚡</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-gray-800 text-sm">Fast & Secure</div>
                  <div className="text-xs text-gray-600 dark:text-gray-700">Instant transactions</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#68D3FF]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#68D3FF] text-lg">🔒</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-gray-800 text-sm">Safe & Reliable</div>
                  <div className="text-xs text-gray-600 dark:text-gray-700">Bank-level security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection; 