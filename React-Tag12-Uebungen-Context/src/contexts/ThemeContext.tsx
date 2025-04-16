import { useState, createContext, useContext } from "react";

type ThemeContext = {
  theme: "light" | "dark";
  setCount: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const themeContext = createContext<ThemeContext>(null!);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const setTheme = (themeValue: "light" | "dark") => {
    setThemeState();
  };
}
