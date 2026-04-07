'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Crown, Sword, Shield, LogOut, Calendar, DollarSign } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export default function ProfilePage() {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <User className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">No has iniciado sesión</h1>
          <Link
            href="/demo/elven/user/login"
            className="inline-block px-6 py-3 rounded-xl font-semibold text-[#0F2918] bg-[#27AE60] hover:bg-[#2ECC71]"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/demo/elven');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="p-8 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20 mb-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-[#27AE60]/20 border border-[#27AE60]/30 flex items-center justify-center"
                >
                  <Crown className="w-10 h-10 text-[#27AE60]" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">{user?.username}</h1>
                  <p className="text-[#A0C4B0]">{user?.email}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-[#A0C4B0]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Miembro desde {user?.joinedDate}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#E74C3C] hover:bg-[#E74C3C]/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Cerrar Sesión
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20"
            >
              <Sword className="w-8 h-8 text-[#27AE60] mb-4" />
              <div className="text-3xl font-bold text-white mb-1">{user?.characters.length}</div>
              <div className="text-[#A0C4B0]">Personajes</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20"
            >
              <DollarSign className="w-8 h-8 text-[#C9A962] mb-4" />
              <div className="text-3xl font-bold text-white mb-1">${user?.donations}</div>
              <div className="text-[#A0C4B0]">Donado</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20"
            >
              <Shield className="w-8 h-8 text-[#9B59B6] mb-4" />
              <div className="text-3xl font-bold text-white mb-1">Activo</div>
              <div className="text-[#A0C4B0]">Estado</div>
            </div>
          </div>

          {/* Characters */}
          <div className="mt-6 p-6 rounded-2xl bg-[#1A3A2A]/50 border border-[#27AE60]/20"
          >
            <h2 className="text-xl font-bold text-white mb-6">Tus Personajes</h2>
            
            {user?.characters.length === 0 ? (
              <div className="text-center py-8 text-[#A0C4B0]">
                No tienes personajes creados aún.
              </div>
            ) : (
              <div className="grid gap-4">
                {user?.characters.map((char, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#0F2918]/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#27AE60]/20 flex items-center justify-center"
                      >
                        <Sword className="w-6 h-6 text-[#27AE60]" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{char.name}</div>
                        <div className="text-sm text-[#A0C4B0]">{char.class}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-[#C9A962] font-semibold">Lvl {char.level}</div>
                        <div className="text-[#A0C4B0]">Nivel</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#27AE60] font-semibold">{char.pvp}</div>
                        <div className="text-[#A0C4B0]">PvP</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#E74C3C] font-semibold">{char.pk}</div>
                        <div className="text-[#A0C4B0]">PK</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
