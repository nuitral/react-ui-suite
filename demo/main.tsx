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
	NuitralChip,
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
			<br />
			<div className="flex gap-2">
				<NuitralChip primary icon="basket">
					Chip Primary
				</NuitralChip>
				<NuitralChip secondary icon="basket" icon-position="right">
					Chip Secondary
				</NuitralChip>
				<NuitralChip accent>Chip accent</NuitralChip>
				<NuitralChip error>Chip error</NuitralChip>
				<NuitralChip success>Chip Success</NuitralChip>
				<NuitralChip warning>Chip warning</NuitralChip>
				<NuitralChip info>Chip info</NuitralChip>
				<NuitralChip neutral>Chip neutral</NuitralChip>
				<NuitralChip background>Chip background</NuitralChip>
				<NuitralChip surface>Chip surface</NuitralChip>
			</div>
			<div className="mb-2"></div>
			<div className="flex">
				<NuitralChip primary-gloss icon="basket">
					Chip Primary
				</NuitralChip>
				<NuitralChip secondary-gloss icon="basket" icon-position="right">
					Chip Secondary
				</NuitralChip>
				<NuitralChip accent-gloss>Chip accent</NuitralChip>
				<NuitralChip error-gloss>Chip error</NuitralChip>
				<NuitralChip success-gloss>Chip Success</NuitralChip>
				<NuitralChip warning-gloss>Chip warning</NuitralChip>
				<NuitralChip info-gloss>Chip info</NuitralChip>
				<NuitralChip neutral-gloss>Chip neutral</NuitralChip>
				<NuitralChip background-gloss>Chip background</NuitralChip>
				<NuitralChip surface-gloss>Chip surface</NuitralChip>
			</div>
			<div className="mb-2"></div>
			<div className="flex">
				<NuitralChip primary-outline icon="basket">
					Chip Primary
				</NuitralChip>
				<NuitralChip secondary-outline icon="basket" icon-position="right">
					Chip Secondary
				</NuitralChip>
				<NuitralChip accent-outline>Chip accent</NuitralChip>
				<NuitralChip error-outline>Chip error</NuitralChip>
				<NuitralChip success-outline>Chip Success</NuitralChip>
				<NuitralChip warning-outline>Chip warning</NuitralChip>
				<NuitralChip info-outline>Chip info</NuitralChip>
				<NuitralChip neutral-outline>Chip neutral</NuitralChip>
				<NuitralChip background-outline>Chip background</NuitralChip>
				<NuitralChip surface-outline>Chip surface</NuitralChip>
			</div>
			<div className="mb-2"></div>
			layout
			<div className="layout-flex mb-4">
				<div className="col-1 nuitral-background-primary-300">1</div>
				<div className="col-2 nuitral-background-primary-400">2</div>
				<div className="col-3 nuitral-background-primary-500">3</div>
				<div className="col-6 nuitral-background-primary-600">6</div>
			</div>
			<div className="layout-flex mb-4">
				<div className="col nuitral-background-secondary-300">col</div>
				<div className="col nuitral-background-secondary-400">col</div>
				<div className="col-auto nuitral-background-secondary-500">
					col-auto
				</div>
			</div>
			<div className="layout-flex mb-4">
				<div className="col-auto nuitral-background-secondary-300">
					col-auto
				</div>
				<div className="col-auto nuitral-background-secondary-500">
					col-auto
				</div>
			</div>
			<div className="layout-flex mb-4">
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-300">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-400">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-500">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-600">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
			</div>
			<div className="layout-flex mb-4">
				<div className="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-300">
					xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
				</div>
				<div className="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-500">
					xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
				</div>
				<div className="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-700">
					xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
				</div>
				<div className="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-900">
					xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
				</div>
				<div className="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-900">
					xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
				</div>
				<div className="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-900">
					xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
				</div>
			</div>
			<div className="pb-2"></div>
			<div className="nuitral-color-primary-300">Primary 400</div>
			<div className="pb-2"></div>
			<NuitralCard
				background-400
				border-accent
				header={<div>Header</div>}
				footer={<div>Footer</div>}
			>
				Body
			</NuitralCard>
			<NuitralCard
				background-100
				hasShadow
				header={<div>Header</div>}
				footer={<div>Footer</div>}
			>
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
			<div className="pb-3"></div>
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
			<div className="pb-3"></div>
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
			<div className="pb-3"></div>
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
			<div className="pb-3"></div>
			<NuitralBox
				title={'Title'}
				description={'Description'}
				primary
			></NuitralBox>
			<div className="pb-3"></div>
			<NuitralIcon icon={'user'}></NuitralIcon>
		</Wrapper>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
