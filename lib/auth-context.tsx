'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { mockUsers, User } from './mock-data';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, email: string, password: string) => boolean;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    // Simulación: acepta demo/demo o cualquier usuario/contraseña
    if (username === 'demo' && password === 'demo') {
      setUser(mockUsers[0]);
      return true;
    }
    // También acepta cualquier combinación para facilitar testing
    if (username && password) {
      setUser({
        id: Date.now(),
        username,
        email: `${username}@demo.com`,
        characters: [
          { name: `${username}Main`, class: 'Gladiator', level: 80, pvp: 100, pk: 5 },
        ],
        donations: 0,
        joinedDate: new Date().toISOString().split('T')[0],
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const register = (username: string, email: string, password: string): boolean => {
    // Simulación: siempre exitoso
    if (username && email && password) {
      setUser({
        id: Date.now(),
        username,
        email,
        characters: [],
        donations: 0,
        joinedDate: new Date().toISOString().split('T')[0],
      });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      isLoggedIn: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
