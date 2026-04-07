'use client';

import { createContext, useContext, ReactNode } from 'react';
import { themes, ThemeKey, ThemeConfig } from '@/lib/themes';

const ThemeContext = createContext<ThemeConfig>(themes.elven);

export function ThemeProvider({ 
  themeKey, 
  children 
}: { 
  themeKey: ThemeKey; 
  children: ReactNode;
}) {
  const theme = themes[themeKey];
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
