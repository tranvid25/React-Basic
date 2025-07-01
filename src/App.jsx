import React, { useState, createContext } from 'react';
import Content from './components/Content';
import './App.css'

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
