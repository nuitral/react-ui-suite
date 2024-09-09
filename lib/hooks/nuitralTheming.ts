import { useState, useRef, useEffect } from 'react'

const useNuitralTheming = ({
	theme = 'nuitral',
	darkMode = false,
	lightModeName = 'nuitral-light-mode',
	darkModeName = 'nuitral-dark-mode',
	id = 'app',
}) => {
	const [isDarkMode, setHasDarkTheme] = useState(darkMode)
	const [themeName, setThemeName] = useState(theme)
	const appRef = useRef<HTMLElement | null>(document.getElementById(id))

	const applyModeAndTheme = (mode: string) => {
		if (appRef.current) {
			appRef.current.setAttribute('nuitral-theme', themeName)
			appRef.current.classList.add(mode)
			appRef.current.classList.remove(
				mode === darkModeName ? lightModeName : darkModeName
			)
		}
	}

	const toggleMode = () => {
		setHasDarkTheme(prevMode => !prevMode)
	}

	const manageDarkMode = () => {
		toggleMode()
	}

	const manageTheme = (t: string) => {
		setThemeName(t)
	}

	useEffect(() => {
		if (appRef.current) {
			applyModeAndTheme(isDarkMode ? darkModeName : lightModeName)
		}
	}, [isDarkMode, themeName])

	return { manageDarkMode, isDarkMode, manageTheme }
}

export default useNuitralTheming
