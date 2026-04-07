'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, User, ChevronRight } from 'lucide-react';
import { mockNews } from '@/lib/mock-data';

const categories = {
  updates: { label: 'Actualizaciones', color: '#C9A962' },
  events: { label: 'Eventos', color: '#C9A962' },
  maintenance: { label: 'Mantenimiento', color: '#E74C3C' },
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredNews = selectedCategory
    ? mockNews.filter((news) => news.category === selectedCategory)
    : mockNews;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Newspaper className="w-16 h-16 text-[#C9A962] mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Noticias</h1>
          <p className="text-[#D4C4A8]">Mantente informado sobre las últimas novedades</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-[#C9A962] text-[#1A1714]'
                : 'bg-[#2A2520]/50 text-[#D4C4A8] hover:bg-[#2A2520]'
            }`}
          >
            Todas
          </button>
          {Object.entries(categories).map(([key, { label, color }]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === key
                  ? 'text-[#1A1714]'
                  : 'bg-[#2A2520]/50 text-[#D4C4A8] hover:bg-[#2A2520]'
              }`}
              style={{
                backgroundColor: selectedCategory === key ? color : undefined,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-6">
          {filteredNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#2A2520]/50 border border-[#C9A962]/20 hover:border-[#C9A962]/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${categories[news.category as keyof typeof categories].color}20`,
                    color: categories[news.category as keyof typeof categories].color,
                  }}
                >
                  {categories[news.category as keyof typeof categories].label}
                </span>
                <span className="flex items-center gap-1 text-sm text-[#D4C4A8]">
                  <Calendar className="w-4 h-4" />
                  {news.date}
                </span>
                <span className="flex items-center gap-1 text-sm text-[#D4C4A8]">
                  <User className="w-4 h-4" />
                  {news.author}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3">{news.title}</h2>
              <p className="text-[#D4C4A8] mb-4">{news.excerpt}</p>

              <button className="flex items-center gap-1 text-[#C9A962] hover:text-[#E5D4A1] font-medium">
                Leer más <ChevronRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}


