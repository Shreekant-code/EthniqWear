import { createContext, useState, useContext,useEffect } from "react";

// 1. Create context
const ThemeContext = createContext();

// 2. Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); 
    useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook for easier usage
export const useTheme = () => useContext(ThemeContext);
