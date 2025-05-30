import { useEffect, useState } from 'react';

const THEME_KEY = 'app-theme';
const defaultTheme = localStorage.getItem(THEME_KEY) || 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme as 'light' | 'dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return {theme, toggleTheme}
};
