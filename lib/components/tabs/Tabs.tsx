import React, { useMemo, useState } from 'react'
import { NuitralTabsProp } from './types'
import { NuitralTabProps } from '../tab/types'
import Icon  from '../icon/index'
import useAttrs from '../../hooks/attributes'
import useColorsAttributesValidator from '../../hooks/colorsAttributesValidator'

const Tabs: React.FC<Partial<NuitralTabsProp>> = ({
	items = [],
	children = [],
	classes = '',
	selected = 0,
	onSelection,
	...attrs
}) => {
	const [activeTab, setActiveTab] = useState(selected)

	const attributes = useAttrs(attrs)
	const { isValidAttribute } = useColorsAttributesValidator()

	const borderColor = useMemo(() => {
		const filteredAttrs: Record<string, any> = {}
		for (const key in attributes) {
			if (isValidAttribute(key)) {
				filteredAttrs[key] = attributes[key]
			}
		}
		return Object.keys(filteredAttrs)
			.map(key => `nuitral-tab-${key}`)
			.join(' ')
	}, [attributes])

	const handleChange = (selection: {
		item: NuitralTabProps
		index: number
	}) => {
		if (onSelection) {
			onSelection(selection)
		}
	}

	const onTabSelection = (selection: {
		item: NuitralTabProps
		index: number
	}) => {
		setActiveTab(selection.index)
		handleChange(selection)
	}

	const alliItems = useMemo(() => {
		const defaultValues: NuitralTabProps = {
			label: '',
			children: null,
			component: null,
			icon: null,
			iconPosition: 'left',
			classes: '',
			disabled: false,
			leftSide: null,
			rightSide: null,
		}

		if (items.length > 0) {
			return items.map(item => ({
				...defaultValues,
				...item,
			}))
		}

		return (
			React.Children.map(children, child => {
				if (React.isValidElement<Partial<NuitralTabProps>>(child)) {
					return {
						...defaultValues,
						...child.props,
					}
				}
				return null
			})?.filter((tab): tab is NuitralTabProps => tab !== null) || []
		)
	}, [items, children])

	return (
		<>
			<div className={`nuitral-tabs ${borderColor} ${classes}`}>
				{alliItems.map((item, index) => (
					<div
						key={index}
						className={`nuitral-tab ${index === activeTab ? 'nuitral-tab-active' : ''} ${item.disabled ? 'disabled' : ''}`}
						onClick={() => !item.disabled && onTabSelection({ item, index })}
					>
						{item.leftSide && <div className="left-side">{item.leftSide}</div>}
						{item.icon && item.iconPosition === 'left' && (
							<Icon icon={item.icon} />
						)}
						{item.label}
						{item.icon && item.iconPosition === 'right' && (
							<Icon icon={item.icon} />
						)}
						{item.rightSide && (
							<div className="right-side">{item.rightSide}</div>
						)}
					</div>
				))}
			</div>
			<div className={`nuitral-tab-content ${alliItems[activeTab].classes}`}  >
				{alliItems[activeTab]?.component ? (
					React.createElement(
						alliItems[activeTab].component as React.ComponentType
					)
				) : alliItems[activeTab]?.children ? (
					<div>{alliItems[activeTab].children}</div>
				) : null}
			</div>
		</>
	)
}

export default Tabs
