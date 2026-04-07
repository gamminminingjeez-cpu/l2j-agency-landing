'use client';

import { motion } from 'framer-motion';
import { Download, FileArchive, Monitor, HardDrive } from 'lucide-react';
import { mockDownloads } from '@/lib/mock-data';

export default function DownloadsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Download className="w-16 h-16 text-[#E74C3C] mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Descargas</h1>
          <p className="text-[#C4A0A0]">Descarga el cliente y comienza tu aventura</p>
        </div>

        {/* Downloads */}
        <div className="space-y-6">
          {mockDownloads.map((download, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#E74C3C]/20 flex items-center justify-center"
                  >
                    <FileArchive className="w-7 h-7 text-[#E74C3C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{download.name}</h3>
                    <p className="text-[#C4A0A0]">
                      Versión: {download.version} • Tamaño: {download.size}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {download.mirrors.map((mirror) => (
                  <a
                    key={mirror.name}
                    href={mirror.url}
                    className="px-4 py-2 rounded-lg font-medium text-[#0A0A0A] bg-[#E74C3C] hover:bg-[#FF4444] transition-colors"
                  >
                    Descargar desde {mirror.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <Monitor className="w-8 h-8 text-[#E74C3C]" />
            <h2 className="text-2xl font-bold text-white">Requisitos del Sistema</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Mínimos</h3>
              <ul className="space-y-2 text-[#C4A0A0]">
                <li>• OS: Windows 7/8/10/11</li>
                <li>• CPU: Intel Pentium 4 3.0GHz</li>
                <li>• RAM: 2 GB</li>
                <li>• GPU: GeForce 6600 GT / ATI Radeon X1600</li>
                <li>• HDD: 10 GB libres</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Recomendados</h3>
              <ul className="space-y-2 text-[#C4A0A0]">
                <li>• OS: Windows 10/11 64-bit</li>
                <li>• CPU: Intel Core i3 o superior</li>
                <li>• RAM: 4 GB o más</li>
                <li>• GPU: GeForce GTX 650 / Radeon HD 7750</li>
                <li>• HDD: SSD con 10 GB libres</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


