import React from "react";

const themeContext = React.createContext();

const Provider = themeContext.Provider;

export { themeContext, Provider as ThemeProvider };
