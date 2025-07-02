import React, { useState, createContext } from "react";

const ThemeContext = createContext();
function ThemeProvider({children}) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
export { ThemeContext, ThemeProvider };
