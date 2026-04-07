'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Bitcoin, Wallet } from 'lucide-react';
import { mockShopItems } from '@/lib/mock-data';
import { useAuth } from '@/lib/auth-context';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'enchant', label: 'Enchant' },
  { id: 'premium', label: 'Premium' },
  { id: 'pack', label: 'Packs' },
  { id: 'special', label: 'Especiales' },
  { id: 'utility', label: 'Utilidad' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<typeof mockShopItems>([]);
  const { isLoggedIn } = useAuth();

  const filteredItems = activeCategory === 'all' 
    ? mockShopItems 
    : mockShopItems.filter(item => item.category === activeCategory);

  const addToCart = (item: typeof mockShopItems[0]) => {
    setCart([...cart, item]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Tienda</h1>
          <p className="text-[#C4A0A0]">Mejora tu experiencia con items exclusivos</p>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-6 h-6 text-[#E74C3C]" />
                <span className="text-white">{cart.length} items en el carrito</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-white">Total: ${cartTotal}</span>
                <button className="px-6 py-2 rounded-lg font-semibold text-[#0A0A0A] bg-[#E74C3C] hover:bg-[#FF4444]">
                  Checkout
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#E74C3C] text-[#0A0A0A]'
                  : 'bg-[#1A0A0A]/50 text-[#C4A0A0] hover:bg-[#1A0A0A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20 hover:border-[#E74C3C]/40 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-[#E74C3C]/20 flex items-center justify-center mb-4 mx-auto"
              >
                <ShoppingCart className="w-8 h-8 text-[#E74C3C]" />
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">{item.name}</h3>
              <p className="text-sm text-[#C4A0A0] text-center mb-4">{item.description}</p>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-[#C9A962]">${item.price}</span>
                <span className="text-[#C4A0A0]"> USD</span>
              </div>
              <button
                onClick={() => addToCart(item)}
                disabled={!isLoggedIn}
                className="w-full py-2 rounded-lg font-medium text-[#0A0A0A] bg-[#E74C3C] hover:bg-[#FF4444] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoggedIn ? 'Agregar al Carrito' : 'Login Requerido'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Métodos de Pago</h2>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2 text-[#C4A0A0]">
              <CreditCard className="w-6 h-6" />
              <span>PayPal</span>
            </div>
            <div className="flex items-center gap-2 text-[#C4A0A0]">
              <Bitcoin className="w-6 h-6" />
              <span>Crypto</span>
            </div>
            <div className="flex items-center gap-2 text-[#C4A0A0]">
              <Wallet className="w-6 h-6" />
              <span>MercadoPago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


