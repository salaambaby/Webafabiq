'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How do I play Alphabiq?",
      answer: "Alphabiq is a multiplayer word game where players spin a roulette to get a random letter, then race against time to fill 5 categories (Name, Place, Animal, Food, Thing) with words starting with that letter. Use powerups strategically to gain advantages!"
    },
    {
      question: "What are the powerups and how do they work?",
      answer: "Alphabiq features three main powerups: Time Extension (+15 seconds), Word Hint (reveals a hint for stuck categories), and Score Multiplier (2x points for next round). Use them strategically to outsmart your opponents!"
    },
    {
      question: "How does the scoring system work?",
      answer: "Points are awarded based on word uniqueness, completion speed, and category difficulty. Unique words earn more points, while common answers get fewer points. Powerups can multiply your score for strategic advantages."
    },
    {
      question: "Can I play with friends?",
      answer: "Yes! Alphabiq supports both random matchmaking and private games with friends. Create a room, share the code, and challenge your friends to see who's the ultimate word master!"
    },
    {
                    question: "What happens if I can&apos;t complete all categories?",
      answer: "Don't worry! You can still score points for completed categories. The game rewards partial completion, and you can use powerups to help fill difficult categories. Every word counts!"
    },
    {
      question: "How do I climb the leaderboards?",
      answer: "Focus on unique words, use powerups strategically, and practice regularly. The leaderboards update in real-time, and you can compete in daily, weekly, and all-time rankings!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="bg-white dark:bg-gray-100 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-800">
                Have Questions About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9F73FE] to-[#68D3FF]">
                  Alphabiq?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-700">
                Get answers to the most common questions about gameplay, powerups, and strategies.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900 dark:text-gray-800">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-gray-500 dark:text-gray-600">
                      {openFAQ === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white dark:bg-white">
                      <p className="text-gray-600 dark:text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="bg-gradient-to-r from-[#9F73FE]/10 to-[#68D3FF]/10 rounded-lg p-6 border border-[#9F73FE]/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-800 mb-2">
                Still Need Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-700 mb-4">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help!
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-[#9F73FE] to-[#68D3FF] text-white font-semibold rounded-lg hover:from-[#8B5CF6] hover:to-[#60A5FA] transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>

          {/* Visual Element - Game Interface */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-[#9F73FE] to-[#68D3FF] rounded-3xl p-4 shadow-2xl">
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
                  
                  {/* Game Content */}
                  <div className="p-4 space-y-4">
                    {/* Leaderboard */}
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-gray-900 mb-2">🏆 Leaderboard</h3>
                      <div className="text-sm text-gray-600">Today's Top Players</div>
                    </div>
                    
                    {/* Player Rankings */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-[#F59E0B]/10 rounded-lg border border-[#F59E0B]/20">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            1
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">WordMaster</div>
                            <div className="text-xs text-gray-500">2,450 pts</div>
                          </div>
                        </div>
                        <div className="text-[#F59E0B]">🥇</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            2
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">LexiconPro</div>
                            <div className="text-xs text-gray-500">2,180 pts</div>
                          </div>
                        </div>
                        <div className="text-gray-500">🥈</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-[#10B981]/10 rounded-lg border border-[#10B981]/20">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            3
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">VocabKing</div>
                            <div className="text-xs text-gray-500">1,920 pts</div>
                          </div>
                        </div>
                        <div className="text-[#10B981]">🥉</div>
                      </div>
                    </div>
                    
                    {/* Your Position */}
                    <div className="bg-[#68D3FF]/10 rounded-lg p-3 border-l-4 border-[#68D3FF]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#68D3FF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            15
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">You</div>
                            <div className="text-xs text-gray-500">1,250 pts</div>
                          </div>
                        </div>
                        <div className="text-[#68D3FF]">📈</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#9F73FE] rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#68D3FF] rounded-full opacity-60 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 