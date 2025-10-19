import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
	NuitralBox,
	NuitralButton,
	NuitralIcon,
	NuitralInput,
	NuitralTab,
	NuitralTabs,
	NuitralCard,
} from '../lib'
import Navbar from './widgets/navbar'
import '@nuitral/icons/dist/nuitral-icons.scss'
import './style.scss'
import Wrapper from './components/Wrapper'
import { NuitralTabProps } from '../lib/components/tab/types'
import DemoComponentOne from './demoComponents/DemoComponentOne'
import DemoComponentTwo from './demoComponents/DemoComponentTwo'

function App() {
	const [inputValue, setInputValue] = useState<string | number>('Input test')

	const [tabItems, setTabItems] = useState<Partial<NuitralTabProps>[]>([
		{
			label: 'A',
			icon: 'user',
			component: DemoComponentOne,
		},
		{ label: 'B', icon: 'basket', component: DemoComponentTwo },
		{ label: 'C', icon: 'basket', component: null, disabled: true },
	])

	const tabsArray: any = [1, 2, 3, 4, 5]

	const testButton = () => {
		setTabItems(prevItems => {
			const updatedItems = [...prevItems]
			updatedItems[1] = {
				...updatedItems[1],
				component: DemoComponentOne,
				label: 'Test useState Tab',
			}
			return updatedItems
		})
	}

	return (
		<Wrapper>
			<Navbar></Navbar>
			<h1>nuitral React UI Suite</h1>

			<div className='pb-2'></div>

			<div className='nuitral-color-primary-300'>
				Primary 400
			</div>

			<div className='pb-2'></div>

			<NuitralCard background-400 border-accent
				header={<div>Header</div>}
				footer={<div>Footer</div>}
			>
				Body
			</NuitralCard>

			<NuitralCard background-100 hasShadow
				header={<div>Header</div>}
				footer={<div>Footer</div>}>
				Body
			</NuitralCard>

			<br />

			<NuitralCard
				hasShadow
				header={<div>Header</div>}
				footer={<div>Footer</div>}
			>
				Body
			</NuitralCard>

			<div className='pb-3'></div>
			<button onClick={testButton}>test</button>
			<NuitralTabs
				onSelection={e => console.log(e)}
				primary
				selected={0}
				items={tabItems}
			></NuitralTabs>
			<NuitralTabs accent onSelection={e => console.log(e)}>
				<NuitralTab
					label="Tab A"
					icon="user"
					leftSide={<div>L</div>}
					rightSide={<div>R</div>}
				>
					Content of A
				</NuitralTab>
				<NuitralTab
					label="Tab B"
					iconPosition={'right'}
					icon="basket"
					disabled={true}
				>
					Content of B
				</NuitralTab>
				<NuitralTab label="Tab C" iconPosition={'right'}>
					Content of B
				</NuitralTab>

				{tabsArray.map((_: number, index: number) => {
					const num = index + 1
					return (
						<NuitralTab
							key={index}
							label={`Tab ${num}`}
							leftSide={`Left ${num}`}
							rightSide={`Right ${num}`}
						>
							Content of {num}
						</NuitralTab>
					)
				})}
				<NuitralTab label="Component Two">
					<DemoComponentTwo />{' '}
				</NuitralTab>
			</NuitralTabs>

			<div className='pb-3'></div>

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

			<div className='pb-3'></div>

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

			<div className='pb-3'></div>

			<NuitralBox
				title={'Title'}
				description={'Description'}
				primary
			></NuitralBox>

			<div className='pb-3'></div>
			<NuitralIcon icon={'user'}></NuitralIcon>
		</Wrapper>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
