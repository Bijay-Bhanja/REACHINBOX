
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600"
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
