import { useState } from "react";

const useAppHandler = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useAppHandler;
