import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { NuitralBox, NuitralButton, NuitralIcon, NuitralInput } from '../lib'
import Navbar from './widgets/navbar'
import '@nuitral/icons/dist/nuitral-icons.scss'
import './style.scss'
import Wrapper from './components/Wrapper'

function App() {
	const [inputValue, setInputValue] = useState<string | number>('Input test')
	return (
			<Wrapper>

				<Navbar></Navbar>

				<h1>nuitral React UI Suite</h1>

				<NuitralInput
					value={inputValue}
					onChange={setInputValue}
					placeholder={'placeholder'}
					icon={'user'}
				></NuitralInput>

				<NuitralInput
					value={inputValue}
					onChange={setInputValue}
					icon={'user'}
					placeholder={'placeholder'}
					iconPosition={'right'}
					type={'password'}
				></NuitralInput>
				<NuitralInput
					value={inputValue}
					onChange={setInputValue}
					placeholder={'placeholder'}
					disabled
				></NuitralInput>

				{inputValue}
				<NuitralButton accent icon="user">
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
				<NuitralBox
					title={'Title'}
					description={'Description'}
					primary
				></NuitralBox>
				<NuitralIcon icon={'user'}></NuitralIcon>
			</Wrapper>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
