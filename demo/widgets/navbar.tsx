import React from "react";
import { useNuitralTheming } from "../../lib";

const Navbar = () => {
  const { manageDarkMode, hasDarkTheme, manageTheme } = useNuitralTheming({
    theme: "nuitral",
    darkMode: false,
    id: 'root'
  });

  return (
    <div>
      <button onClick={manageDarkMode}>
        Toggle Dark Mode (Current: {hasDarkTheme ? "Dark" : "Light"})
      </button>
      <button onClick={() => manageTheme("another-theme")}>
        Switch to Another Theme
      </button>
    </div>
  );
};

export default Navbar;