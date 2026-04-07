'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = register(formData.username, formData.email, formData.password);
    
    if (success) {
      router.push('/demo/dark-omen/user/profile');
    } else {
      setError('Error al crear la cuenta');
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
        <div className="p-8 rounded-2xl bg-[#1A0A0A]/50 border border-[#E74C3C]/20"
        >
          <div className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">Crear Cuenta</h1>
            <p className="text-[#C4A0A0]">Únete a la aventura en L2DarkOmen</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-[#E74C3C]/20 border border-[#E74C3C]/30 text-[#E74C3C] text-sm"
            >{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-[#C4A0A0] mb-2">Usuario</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E74C3C]" />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#E74C3C]/30 text-white placeholder-[#C4A0A0]/50 focus:outline-none focus:border-[#E74C3C]"
                  placeholder="Elige un usuario"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#C4A0A0] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E74C3C]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#E74C3C]/30 text-white placeholder-[#C4A0A0]/50 focus:outline-none focus:border-[#E74C3C]"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#C4A0A0] mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E74C3C]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-[#0A0A0A] border border-[#E74C3C]/30 text-white placeholder-[#C4A0A0]/50 focus:outline-none focus:border-[#E74C3C]"
                  placeholder="Mínimo 6 caracteres"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C4A0A0] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#C4A0A0] mb-2">Confirmar Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E74C3C]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#E74C3C]/30 text-white placeholder-[#C4A0A0]/50 focus:outline-none focus:border-[#E74C3C]"
                  placeholder="Repite tu contraseña"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 rounded border-[#E74C3C]/30 bg-[#0A0A0A] text-[#E74C3C]" required />
              <span className="text-sm text-[#C4A0A0]">
                Acepto los{' '}
                <Link href="#" className="text-[#E74C3C] hover:underline">Términos de Servicio</Link>
                {' '}y{' '}
                <Link href="#" className="text-[#E74C3C] hover:underline">Política de Privacidad</Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-[#0A0A0A] bg-[#E74C3C] hover:bg-[#FF4444] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#C4A0A0]">
              ¿Ya tienes cuenta?{' '}
              <Link href="/demo/dark-omen/user/login" className="text-[#E74C3C] hover:text-[#FF4444] font-medium">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


