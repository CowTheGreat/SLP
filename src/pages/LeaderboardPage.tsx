import { Star, Zap } from 'lucide-react';
import { leaderboardData } from '../types/leaderboard';

export function LeaderboardPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7ed957] to-[#5fa847] animate-fade-in-up">
              Contributor Leaderboard
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in-up delay-100">
              Celebrating our top open source champions
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7ed957] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#7ed957] animate-pulse delay-100"></div>
              <div className="w-3 h-3 rounded-full bg-[#7ed957] animate-pulse delay-200"></div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl border border-[#7ed957]/20 shadow-2xl shadow-[#7ed957]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#242424] border-b border-[#7ed957]/20">
                    <th className="px-8 py-6 text-left text-gray-300 font-semibold">Rank</th>
                    <th className="px-8 py-6 text-left text-gray-300 font-semibold">Contributor</th>
                    <th className="px-8 py-6 text-right text-gray-300 font-semibold">Points</th>
                    <th className="px-8 py-6 text-right text-gray-300 font-semibold">Contributions</th>
                    <th className="px-8 py-6 text-right text-gray-300 font-semibold">Active Projects</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((entry, index) => (
                    <tr
                      key={entry.rank}
                      className={`border-b border-[#7ed957]/10 last:border-0 group hover:bg-[#242424]/50 transition-all ${
                        index % 2 === 0 ? 'bg-[#1a1a1a]/30' : 'bg-[#1a1a1a]'
                      }`}
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          {entry.rank <= 3 ? (
                            <div className="relative">
                              <div className="absolute inset-0 bg-[#7ed957] rounded-full blur-sm opacity-30"></div>
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7ed957] to-[#5fa847] flex items-center justify-center">
                                <span className="font-bold text-black">{entry.rank}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center">
                              <span className="text-gray-400">#{entry.rank}</span>
                            </div>
                          )}
                          {entry.rank === 1 && <Zap className="w-5 h-5 text-[#7ed957] animate-pulse" />}
                        </div>
                      </td>
                      <td className="px-8 py-5 font-medium">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center">
                            <Star className="w-5 h-5 text-[#7ed957]" />
                          </div>
                          <div>
                            <p className="text-lg font-semibold">{entry.name}</p>
                            <p className="text-sm text-gray-400">@{entry.username}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end items-center gap-2">
                          <span className="text-[#7ed957] font-bold text-xl">{entry.points}</span>
                          <div className="w-2 h-2 rounded-full bg-[#7ed957] animate-ping"></div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right text-lg">{entry.contributions}</td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          {entry.projects.map((project, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-1 rounded-full bg-[#242424] text-sm border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-colors"
                            >
                              {project}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Current User Banner */}
            <div className="bg-gradient-to-r from-[#7ed957]/20 to-[#5fa847]/10 border-t border-[#7ed957]/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#7ed957]" />
                  </div>
                  <div>
                    <p className="font-semibold">Your Position</p>
                    <p className="text-gray-400 text-sm">Climbing the ranks!</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Current Rank</p>
                    <p className="font-bold text-xl">#42</p>
                  </div>
                  <div className="h-8 w-px bg-[#7ed957]/20"></div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Your Points</p>
                    <p className="font-bold text-xl text-[#7ed957]">1,240</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}