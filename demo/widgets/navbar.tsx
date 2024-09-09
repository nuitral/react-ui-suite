import React from 'react'
import { useNuitralTheming } from '../../lib'

const Navbar = () => {
	const { manageDarkMode, isDarkMode, manageTheme } = useNuitralTheming({
		theme: 'nuitral',
		darkMode: false,
		id: 'demo-app',
	})

	return (
		<div>
			<button onClick={manageDarkMode}>
				Toggle Dark Mode (Current: {isDarkMode ? 'Dark' : 'Light'})
			</button>
			<button onClick={() => manageTheme('nuitral')}>Switch to Nuitral</button>
			<button onClick={() => manageTheme('pop')}>Switch to Pop</button>
		</div>
	)
}

export default Navbar
