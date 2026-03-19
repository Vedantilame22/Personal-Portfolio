import React, { useState, useEffect, createContext } from 'react';
import Home from './pages/Home';

// Context to allow any component to access and toggle the theme
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    // Apply theme class to the root HTML element for Tailwind dark: modifiers
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0a0a] text-black dark:text-white selection:bg-purple-500 selection:text-white">
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;