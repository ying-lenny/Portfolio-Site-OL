import React, { useState, useEffect } from "react";

function NightmodeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default NightmodeToggle