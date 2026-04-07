'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, Clock, Gamepad2 } from 'lucide-react';
import { mockStats, mockServerInfo } from '@/lib/mock-data';

export default function StatsPage() {
  const maxOnline = Math.max(...mockStats.onlineHistory.map((h) => h.players));

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <BarChart3 className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Estadísticas</h1>
          <p className="text-[#A0C4B0]">Estadísticas en tiempo real del servidor</p>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, label: 'Jugadores Online', value: mockServerInfo.online.toLocaleString() },
            { icon: Gamepad2, label: 'Cuentas Totales', value: mockServerInfo.accounts.toLocaleString() },
            { icon: Clock, label: 'Uptime', value: mockServerInfo.uptime },
            { icon: Users, label: 'Record Online', value: mockServerInfo.maxOnline.toLocaleString() },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20 text-center"
            >
              <stat.icon className="w-8 h-8 text-[#27AE60] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#A0C4B0]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Online History Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-6">Historial de Jugadores Online (24h)</h2>
          
          <div className="h-64 flex items-end gap-2">
            {mockStats.onlineHistory.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-[#27AE60]/50 rounded-t-lg transition-all hover:bg-[#27AE60]"
                  style={{ height: `${(data.players / maxOnline) * 200}px` }}
                />
                <span className="text-xs text-[#A0C4B0]">{data.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Class Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-6">Distribución de Clases</h2>
          
          <div className="space-y-4">
            {mockStats.classDistribution.map((cls) => (
              <div key={cls.class}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white">{cls.class}</span>
                  <span className="text-[#A0C4B0]">{cls.count} ({cls.percentage}%)</span>
                </div>
                <div className="h-3 bg-[#0F2918] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#27AE60] rounded-full"
                    style={{ width: `${cls.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Level Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20"
        >
          <h2 className="text-xl font-bold text-white mb-6">Distribución de Niveles</h2>
          
          <div className="grid grid-cols-5 gap-4">
            {mockStats.levelDistribution.map((level) => (
              <div key={level.range} className="text-center p-4 rounded-xl bg-[#0F2918]/50">
                <div className="text-2xl font-bold text-[#27AE60] mb-1">{level.count}</div>
                <div className="text-sm text-[#A0C4B0]">Nivel {level.range}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
