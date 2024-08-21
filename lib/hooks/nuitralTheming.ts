import { useState, useRef, useEffect } from 'react';

const useNuitralTheming = ({
  theme = 'nuitral',
  darkMode = false,
  lightModeName = 'nuitral-light-mode',
  darkModeName = 'nuitral-dark-mode',
  id = 'app',
}) => {
  const [hasDarkTheme, setHasDarkTheme] = useState(darkMode);
  const [themeName, setThemeName] = useState(theme);
  const appRef = useRef(document.getElementById(id));

  const applyModeAndTheme = (mode: string) => {
    if (appRef.current) {
      appRef.current.setAttribute('nuitral-theme', themeName);
      appRef.current.classList.add(mode);
      appRef.current.classList.remove(
        mode === darkModeName ? lightModeName : darkModeName
      );
    }
  };

  const toggleMode = () => {
    setHasDarkTheme(prevMode => !prevMode);
  };

  const manageDarkMode = () => {
    toggleMode();
  };

  const manageTheme = t => {
    setThemeName(t);
  };

  useEffect(() => {
    if (appRef.current) {
      applyModeAndTheme(hasDarkTheme ? darkModeName : lightModeName);
    }
  }, [hasDarkTheme, themeName]);

  return { manageDarkMode, hasDarkTheme, manageTheme };
};

export default useNuitralTheming;
