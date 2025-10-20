import React, { useMemo } from 'react'
import useAttrs from '../../hooks/attributes'
import useColorsAttributesValidator from '../../hooks/colorsAttributesValidator'
import { NuitralCardProps } from './types'

const Card: React.FC<NuitralCardProps> = ({
	classes = '',
	children,
	header,
	footer,
	hasShadow= false,
	...attrs
}) => {
	const attributes = useAttrs(attrs)
	const { isValidAttribute } = useColorsAttributesValidator()

	const backgroundColorClasses = useMemo(() => {
		const filteredAttrs: Record<string, any> = {}
		for (const key in attributes) {
			if (isValidAttribute(key) && !key.startsWith('border-')) {
				filteredAttrs[key] = attributes[key]
			}
		}
		if (!Object.keys(filteredAttrs).length)
			return 'nuitral-card-background'
		return Object.keys(filteredAttrs).map(
			key => `nuitral-card-${key}`
		)
	}, [attributes])

	const borderColor = useMemo(() => {
		const filteredAttrs: Record<string, any> = {}
		for (const key in attributes) {
			if (isValidAttribute(key) && key.startsWith('border-')) {
				filteredAttrs[key] = attributes[key]
			}
		}
		if (!Object.keys(filteredAttrs).length) return 'nuitral-card-border-primary'
		return Object.keys(filteredAttrs).map(key => `nuitral-card-${key}`)
	}, [attributes])

	return (
		<>
			<div>{backgroundColorClasses}</div>
			<div
				{...attributes}
				className={`nuitral-card ${classes} ${backgroundColorClasses} ${hasShadow ? 'nuitral-card-shadow' : borderColor}`}
			>
				{header && <div className="nuitral-card-header">{header}</div>}
				{children}
				{footer && <div className="nuitral-card-footer">{footer}</div>}
			</div>
		</>
	)
}
export default Card
