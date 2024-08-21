import React from 'react'
import ReactDOM from 'react-dom/client'
import { NuitralButton } from '../lib'
import Navbar from './widgets/navbar'
import '@nuitral/icons/dist/nuitral-icons.scss'
import './style.scss'
import Wrapper from './components/Wrapper'

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Wrapper>
				<h1>Nuitral React UI Suite</h1>

				<NuitralButton primary icon="user">
					Button
				</NuitralButton>
				<NuitralButton primary icon="user"></NuitralButton>
				<NuitralButton
					primary
					icon="user"
					iconPosition="right"
					disabled
					leftSide={<div>Left Side</div>}
				></NuitralButton>
				<NuitralButton
					primary
					icon="user"
					iconPosition="right"
					disabled
					rightSide={<div>Right Side</div>}
				></NuitralButton>
			</Wrapper>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
