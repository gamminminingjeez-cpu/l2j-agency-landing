'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Swords, Castle, Skull } from 'lucide-react';
import { mockRankings } from '@/lib/mock-data';

const tabs = [
  { id: 'pvp', label: 'PvP', icon: Trophy },
  { id: 'pk', label: 'PK', icon: Skull },
  { id: 'castles', label: 'Castillos', icon: Castle },
  { id: 'raidBosses', label: 'Raid Bosses', icon: Swords },
];

export default function RankingsPage() {
  const [activeTab, setActiveTab] = useState('pvp');

  return (
    <div className="min-h-screen py-12 px-4"
    >
      <div className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Rankings</h1>
          <p className="text-[#D4C4A8]">Los mejores jugadores y clanes del servidor</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#C9A962] text-[#1A1714]'
                  : 'bg-[#2A2520]/50 text-[#D4C4A8] hover:bg-[#2A2520]'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden border border-[#C9A962]/20"
        >
          {activeTab === 'pvp' && (
            <table className="w-full">
              <thead className="bg-[#2A2520]">
                <tr>
                  {['Rank', 'Nombre', 'Clase', 'Kills', 'Deaths', 'Ratio'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#D4C4A8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9A962]/10">
                {mockRankings.pvp.map((player) => (
                  <tr key={player.rank} className="bg-[#1A1714]/50 hover:bg-[#2A2520]/50">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold ${
                        player.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                        player.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                        player.rank === 3 ? 'bg-orange-600/20 text-orange-400' :
                        'bg-[#C9A962]/20 text-[#C9A962]'
                      }`}>{player.rank}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{player.name}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{player.class}</td>
                    <td className="px-6 py-4 text-[#C9A962] font-semibold">{player.kills.toLocaleString()}</td>
                    <td className="px-6 py-4 text-[#E74C3C]">{player.deaths}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{player.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'pk' && (
            <table className="w-full">
              <thead className="bg-[#2A2520]">
                <tr>
                  {['Rank', 'Nombre', 'Clase', 'PKs', 'Karma'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#D4C4A8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9A962]/10">
                {mockRankings.pk.map((player) => (
                  <tr key={player.rank} className="bg-[#1A1714]/50 hover:bg-[#2A2520]/50">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold bg-[#E74C3C]/20 text-[#E74C3C]">{player.rank}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{player.name}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{player.class}</td>
                    <td className="px-6 py-4 text-[#E74C3C] font-semibold">{player.kills}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{player.karma.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'castles' && (
            <table className="w-full">
              <thead className="bg-[#2A2520]">
                <tr>
                  {['Castillo', 'Dueño', 'Líder', 'Próximo Siege', 'Tax'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#D4C4A8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9A962]/10">
                {mockRankings.castles.map((castle) => (
                  <tr key={castle.name} className="bg-[#1A1714]/50 hover:bg-[#2A2520]/50">
                    <td className="px-6 py-4 font-medium text-[#C9A962]">{castle.name}</td>
                    <td className="px-6 py-4 text-white">{castle.owner}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{castle.leader}</td>
                    <td className="px-6 py-4 text-[#C9A962]">{castle.siegeDate}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{castle.tax}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'raidBosses' && (
            <table className="w-full">
              <thead className="bg-[#2A2520]">
                <tr>
                  {['Boss', 'Nivel', 'Estado', 'Respawn', 'Ubicación'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#D4C4A8]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9A962]/10">
                {mockRankings.raidBosses.map((boss) => (
                  <tr key={boss.name} className="bg-[#1A1714]/50 hover:bg-[#2A2520]/50">
                    <td className="px-6 py-4 font-medium text-white">{boss.name}</td>
                    <td className="px-6 py-4 text-[#C9A962]">{boss.level}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        boss.status === 'Alive' 
                          ? 'bg-[#C9A962]/20 text-[#C9A962]' 
                          : 'bg-[#E74C3C]/20 text-[#E74C3C]'
                      }`}>
                        {boss.status === 'Alive' ? 'Vivo' : 'Muerto'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{boss.respawn}</td>
                    <td className="px-6 py-4 text-[#D4C4A8]">{boss.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      </div>
    </div>
  );
}


