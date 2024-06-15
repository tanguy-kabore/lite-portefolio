import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className="theme-switch-label">
        <span className="theme-switch-inner" />
        <span className="theme-switch-switch" />
      </label>
    </div>
  );
};

export default ThemeToggle;
