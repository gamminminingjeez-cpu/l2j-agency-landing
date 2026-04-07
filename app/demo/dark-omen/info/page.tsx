'use client';

import { motion } from 'framer-motion';
import { Server, Zap, Shield, Users, Book, AlertTriangle } from 'lucide-react';
import { mockServerInfo } from '@/lib/mock-data';

export default function InfoPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Información del Servidor</h1>
          <p className="text-[#C4A0A0]">Todo lo que necesitas saber sobre L2DarkOmen</p>
        </div>

        {/* Server Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-[#E74C3C]/20 flex items-center justify-center">
              <Server className="w-8 h-8 text-[#E74C3C]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{mockServerInfo.name}</h2>
              <p className="text-[#C4A0A0]">Crónica: {mockServerInfo.chronicle}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(mockServerInfo.rates).map(([key, value]) => (
              <div key={key} className="p-4 rounded-xl bg-[#0A0A0A]/50 text-center">
                <div className="text-2xl font-bold text-[#E74C3C]">{value}</div>
                <div className="text-sm text-[#C4A0A0] capitalize">{key}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-[#E74C3C]" />
            <h2 className="text-2xl font-bold text-white">Características</h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            {mockServerInfo.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-[#C4A0A0]">
                <div className="w-2 h-2 rounded-full bg-[#E74C3C]" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-[#E74C3C]" />
            <h2 className="text-2xl font-bold text-white">Reglas del Servidor</h2>
          </div>

          <ul className="space-y-3">
            {mockServerInfo.rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3 text-[#C4A0A0]">
                <span className="text-[#E74C3C] font-bold">{index + 1}.</span>
                {rule}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}


