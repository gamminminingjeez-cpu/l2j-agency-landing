'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Users, Trophy, Sparkles, ChevronRight } from 'lucide-react';
import { mockRankings, mockNews, mockServerInfo } from '@/lib/mock-data';

export default function ElvenHome() {
  const topPvp = mockRankings.pvp.slice(0, 5);
  const latestNews = mockNews.slice(0, 3);

  return (
    <div className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A2A] via-[#0F2918] to-[#1A3A2A]" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #27AE60 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27AE60]/20 border border-[#27AE60]/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#27AE60]" />
              <span className="text-sm text-[#A0C4B0]">Crónica Interlude - Rates x50</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Bienvenido a
              <span className="block text-[#27AE60]">L2Elven</span>
            </h1>

            <p className="text-xl text-[#A0C4B0] max-w-2xl mx-auto mb-10"
            >
              Un mundo de fantasía épica te espera. Únete a miles de jugadores
              en la aventura definitiva de Lineage 2.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/demo/elven/user/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#0F2918] bg-[#27AE60] hover:bg-[#2ECC71] transition-colors"
              >
                <Crown className="w-5 h-5" />
                Crear Cuenta
              </Link>
              <Link
                href="/demo/elven/downloads"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-[#27AE60]/50 hover:bg-[#27AE60]/10 transition-colors"
              >
                Descargar Cliente
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, value: mockServerInfo.online.toLocaleString(), label: 'Jugadores Online' },
              { icon: Trophy, value: mockServerInfo.accounts.toLocaleString(), label: 'Cuentas' },
              { icon: Crown, value: mockServerInfo.uptime, label: 'Uptime' },
              { icon: Sparkles, value: 'x50', label: 'Rates EXP' },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20"
              >
                <stat.icon className="w-8 h-8 text-[#27AE60] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-[#A0C4B0]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top PvP Section */}
      <section className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-white">Top PvP</h2>
            <Link 
              href="/demo/elven/rankings"
              className="text-[#27AE60] hover:text-[#2ECC71] flex items-center gap-1"
            >
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#27AE60]/20"
          >
            <table className="w-full">
              <thead className="bg-[#1A3A2A]">
                <tr>
                  {['Rank', 'Nombre', 'Clase', 'Kills', 'Ratio'].map((header) => (
                    <th key={header} className="px-6 py-4 text-left text-sm font-semibold text-[#A0C4B0]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27AE60]/10">
                {topPvp.map((player, index) => (
                  <tr key={index} className="bg-[#0F2918]/50 hover:bg-[#1A3A2A]/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold ${
                        index === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                        index === 1 ? 'bg-gray-400/20 text-gray-300' :
                        index === 2 ? 'bg-orange-600/20 text-orange-400' :
                        'bg-[#27AE60]/20 text-[#27AE60]'
                      }`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{player.name}</td>
                    <td className="px-6 py-4 text-[#A0C4B0]">{player.class}</td>
                    <td className="px-6 py-4 text-[#27AE60] font-semibold">{player.kills.toLocaleString()}</td>
                    <td className="px-6 py-4 text-[#A0C4B0]">{player.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 bg-[#0F2918]"
      >
        <div className="max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-white">Últimas Noticias</h2>
            <Link 
              href="/demo/elven/news"
              className="text-[#27AE60] hover:text-[#2ECC71] flex items-center gap-1"
            >
              Ver todas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6"
          >
            {latestNews.map((news) => (
              <Link
                key={news.id}
                href="/demo/elven/news"
                className="group p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20 hover:border-[#27AE60]/40 transition-all"
              >
                <div className="text-sm text-[#27AE60] mb-2">{news.date}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#27AE60] transition-colors">
                  {news.title}
                </h3>
                <p className="text-[#A0C4B0] text-sm">{news.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
