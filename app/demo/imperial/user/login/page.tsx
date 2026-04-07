'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = login(username, password);
    
    if (success) {
      router.push('/demo/imperial/user/profile');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="p-8 rounded-2xl bg-[#2A2520]/50 border border-[#C9A962]/20"
        >
          <div className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">Iniciar Sesión</h1>
            <p className="text-[#D4C4A8]">Accede a tu cuenta de L2Imperial</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-[#E74C3C]/20 border border-[#E74C3C]/30 text-[#E74C3C] text-sm"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-[#D4C4A8] mb-2">
                Usuario
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A962]" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1714] border border-[#C9A962]/30 text-white placeholder-[#D4C4A8]/50 focus:outline-none focus:border-[#C9A962]"
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#D4C4A8] mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A962]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-[#1A1714] border border-[#C9A962]/30 text-white placeholder-[#D4C4A8]/50 focus:outline-none focus:border-[#C9A962]"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4C4A8] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm"
            >
              <label className="flex items-center gap-2 text-[#D4C4A8]">
                <input type="checkbox" className="rounded border-[#C9A962]/30 bg-[#1A1714] text-[#C9A962]" />
                Recordarme
              </label>
              <Link href="#" className="text-[#C9A962] hover:text-[#E5D4A1]">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-[#1A1714] bg-[#C9A962] hover:bg-[#E5D4A1] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-6 text-center"
          >
            <p className="text-[#D4C4A8]">
              ¿No tienes cuenta?{' '}
              <Link href="/demo/imperial/user/register" className="text-[#C9A962] hover:text-[#E5D4A1] font-medium">
                Regístrate
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-[#C9A962]/10 border border-[#C9A962]/20"
          >
            <p className="text-sm text-[#D4C4A8] text-center">
              Demo: Usa cualquier usuario/contraseña o{' '}
              <span className="text-[#C9A962] font-medium">demo/demo</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


