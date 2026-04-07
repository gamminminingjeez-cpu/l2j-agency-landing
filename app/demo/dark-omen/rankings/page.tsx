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
          <p className="text-[#C4A0A0]">Los mejores jugadores y clanes del servidor</p>
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
                  ? 'bg-[#E74C3C] text-[#0A0A0A]'
                  : 'bg-[#1A0A0A]/50 text-[#C4A0A0] hover:bg-[#1A0A0A]'
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
          className="rounded-2xl overflow-hidden border border-[#E74C3C]/20"
        >
          {activeTab === 'pvp' && (
            <table className="w-full">
              <thead className="bg-[#1A0A0A]">
                <tr>
                  {['Rank', 'Nombre', 'Clase', 'Kills', 'Deaths', 'Ratio'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#C4A0A0]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E74C3C]/10">
                {mockRankings.pvp.map((player) => (
                  <tr key={player.rank} className="bg-[#0A0A0A]/50 hover:bg-[#1A0A0A]/50">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold ${
                        player.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                        player.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                        player.rank === 3 ? 'bg-orange-600/20 text-orange-400' :
                        'bg-[#E74C3C]/20 text-[#E74C3C]'
                      }`}>{player.rank}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{player.name}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{player.class}</td>
                    <td className="px-6 py-4 text-[#E74C3C] font-semibold">{player.kills.toLocaleString()}</td>
                    <td className="px-6 py-4 text-[#E74C3C]">{player.deaths}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{player.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'pk' && (
            <table className="w-full">
              <thead className="bg-[#1A0A0A]">
                <tr>
                  {['Rank', 'Nombre', 'Clase', 'PKs', 'Karma'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#C4A0A0]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E74C3C]/10">
                {mockRankings.pk.map((player) => (
                  <tr key={player.rank} className="bg-[#0A0A0A]/50 hover:bg-[#1A0A0A]/50">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold bg-[#E74C3C]/20 text-[#E74C3C]">{player.rank}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{player.name}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{player.class}</td>
                    <td className="px-6 py-4 text-[#E74C3C] font-semibold">{player.kills}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{player.karma.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'castles' && (
            <table className="w-full">
              <thead className="bg-[#1A0A0A]">
                <tr>
                  {['Castillo', 'Dueño', 'Líder', 'Próximo Siege', 'Tax'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#C4A0A0]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E74C3C]/10">
                {mockRankings.castles.map((castle) => (
                  <tr key={castle.name} className="bg-[#0A0A0A]/50 hover:bg-[#1A0A0A]/50">
                    <td className="px-6 py-4 font-medium text-[#C9A962]">{castle.name}</td>
                    <td className="px-6 py-4 text-white">{castle.owner}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{castle.leader}</td>
                    <td className="px-6 py-4 text-[#E74C3C]">{castle.siegeDate}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{castle.tax}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'raidBosses' && (
            <table className="w-full">
              <thead className="bg-[#1A0A0A]">
                <tr>
                  {['Boss', 'Nivel', 'Estado', 'Respawn', 'Ubicación'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-[#C4A0A0]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E74C3C]/10">
                {mockRankings.raidBosses.map((boss) => (
                  <tr key={boss.name} className="bg-[#0A0A0A]/50 hover:bg-[#1A0A0A]/50">
                    <td className="px-6 py-4 font-medium text-white">{boss.name}</td>
                    <td className="px-6 py-4 text-[#C9A962]">{boss.level}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        boss.status === 'Alive' 
                          ? 'bg-[#E74C3C]/20 text-[#E74C3C]' 
                          : 'bg-[#E74C3C]/20 text-[#E74C3C]'
                      }`}>
                        {boss.status === 'Alive' ? 'Vivo' : 'Muerto'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{boss.respawn}</td>
                    <td className="px-6 py-4 text-[#C4A0A0]">{boss.location}</td>
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


