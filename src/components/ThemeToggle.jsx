import React from 'react';
import { useGlobalContext } from '../context.jsx';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
