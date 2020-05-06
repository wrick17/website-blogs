import React, { useEffect } from 'react';

import '@css/theme-switch.css';

const ThemeSwitch = () => {
  const toggleSwitch =
    typeof window !== 'undefined'
      ? document.querySelector('.theme-switch input[type="checkbox"]')
      : null;
  const theme =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const toggleSwitch =
        typeof window !== 'undefined'
          ? document.querySelector('.theme-switch input[type="checkbox"]')
          : null;
      const currentTheme = localStorage.getItem('theme')
        ? localStorage.getItem('theme')
        : null;

      if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark' && toggleSwitch) {
          toggleSwitch.checked = true;
        }
      }
      else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          localStorage.setItem('theme', 'dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          toggleSwitch.checked = true;
        }
        else {
          localStorage.setItem('theme', 'light');
          document.documentElement.setAttribute('data-theme', 'light');
          toggleSwitch.checked = false;
        }
      }
    }
  }, []);

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={switchTheme}
          defaultChecked={theme === 'dark'}
        />
        <div className="slider round" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
