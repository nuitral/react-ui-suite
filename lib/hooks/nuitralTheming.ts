import { useState, useRef, useEffect } from 'react'
import { NuitralThemingOptions } from '@nuitral/types'

/**
 * Hook that handles theming and dark mode.
 *
 * It applies the selected theme and mode ( light/dark ) to the root element ( rootId ) of the application.
 * Optionally, it can persist settings to localStorage if the `saveSettings` option is enabled.
 *
 */
const useNuitralTheming = ({
	theme = 'nuitral',
	darkMode = false,
	lightModeName = 'nuitral-light-mode',
	darkModeName = 'nuitral-dark-mode',
	rootId = 'nuitral-app',
	saveSettings = false,
}: NuitralThemingOptions) => {
	const getStoredData = () => {
		if (!saveSettings) return { theme, darkMode }
		const storedData = localStorage.getItem('nuitral')
		return storedData ? JSON.parse(storedData) : { theme, darkMode }
	}

	const saveToStorage = (darkMode: boolean, theme: string) => {
		if (saveSettings) {
			localStorage.setItem('nuitral', JSON.stringify({ darkMode, theme }))
		}
	}

	const { theme: initialTheme, darkMode: initialDarkMode } = getStoredData()

	const [isDarkMode, setHasDarkMode] = useState(initialDarkMode)
	const [themeName, setThemeName] = useState(initialTheme)

	const appRef = useRef<HTMLElement | null>(null)

	const applyModeAndTheme = () => {
		if (appRef.current) {
			const modeClass = isDarkMode ? darkModeName : lightModeName
			appRef.current.setAttribute('nuitral-theme', themeName)
			appRef.current.classList.add(modeClass)
			appRef.current.classList.remove(isDarkMode ? lightModeName : darkModeName)
		}
	}

	const toggleMode = () => {
		setHasDarkMode((prevMode: boolean) => {
			const newMode = !prevMode
			saveToStorage(newMode, themeName)
			return newMode
		})
	}

	const manageTheme = (newTheme: string) => {
		setThemeName(newTheme)
		saveToStorage(isDarkMode, newTheme)
	}

	useEffect(() => {
		appRef.current = document.getElementById(rootId)
		applyModeAndTheme()
	}, [rootId])

	useEffect(() => {
		applyModeAndTheme()
	}, [isDarkMode, themeName])

	return { manageDarkMode: toggleMode, isDarkMode, manageTheme }
}

export default useNuitralTheming
