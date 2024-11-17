import React, { useMemo, useState } from 'react'
import { NuitralTabsProp } from './types'
import { NuitralTabProps } from '../tab/types'
import { NuitralIcon } from '../index'
import useAttrs from '../../hooks/attributes'
import useColorsAttributesValidator from '../../hooks/colorsAttributesValidator'

const NuitralTabs: React.FC<Partial<NuitralTabsProp>> = ({
	items = [],
	children = [],
	classes = '',
	selected = 0,
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
		return Object.keys(filteredAttrs).map(key => `nuitral-tab-${key}`)
	}, [attributes])

	const handleTabClick = (index: number) => {
		setActiveTab(index)
	}

	const getDefaultValues = (
		propDefinitions: Partial<NuitralTabProps>
	): Partial<NuitralTabProps> => {
		return {
			label: '',
			iconPosition: 'left',
			classes: '',
			disabled: false,
			...propDefinitions,
		} as NuitralTabProps
	}
	return (
		<>
			<div className={`nuitral-tabs ${borderColor} ${classes}`}>
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement<Partial<NuitralTabProps>>(child)) {
						const mergedProps = {
							...getDefaultValues(child.props),
							...child.props,
						}
						const newChild = React.cloneElement(child, mergedProps)
						return (
							<div
								className={`nuitral-tab ${index === activeTab && 'nuitral-tab-active'} ${newChild.props.disabled && 'disabled'}`}
								onClick={() => handleTabClick(index)}
							>
								{newChild.props.leftSide && (
									<div className="left-side">{newChild.props.leftSide}</div>
								)}
								{newChild.props.icon &&
									newChild.props.iconPosition === 'left' && (
										<NuitralIcon icon={newChild.props.icon} />
									)}
								{newChild.props.label}
								{newChild.props.icon &&
									newChild.props.iconPosition === 'right' && (
										<NuitralIcon icon={newChild.props.icon} />
									)}
								{newChild.props.rightSide && (
									<div className="right-side">{newChild.props.rightSide}</div>
								)}
							</div>
						)
					}
					return null
				})}
			</div>
			<div className="nuitral-tab-content">
				{React.Children.map(children, (child, index) => {
					if (index === activeTab && React.isValidElement(child)) {
						return <div>{child.props.children}</div>
					}
					return null
				})}
			</div>
		</>
	)
}

export default NuitralTabs
