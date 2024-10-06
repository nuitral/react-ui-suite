import React, { useMemo } from 'react'
import useAttrs from '../../hooks/attributes'
import useColorsAttributesValidator from '../../hooks/colorsAttributesValidator'
import { NuitralButtonProps } from './types'
import Icon from '../icon/Icon'

const Button: React.FC<NuitralButtonProps> = ({
	classes = '',
	type = 'button',
	disabled = false,
	icon,
	iconPosition = 'left',
	children,
	leftSide,
	rightSide,
	...attrs
}) => {
	const attributes = useAttrs(attrs)
	const { isValidAttribute } = useColorsAttributesValidator()

	const backgroundColorClasses = useMemo(() => {
		const filteredAttrs: Record<string, any> = {}
		for (const key in attributes) {
			if (isValidAttribute(key)) {
				filteredAttrs[key] = attributes[key]
			}
		}
		return Object.keys(filteredAttrs).map(
			key => `nuitral-button-background-${key}`
		)
	}, [attributes])

	return (
		<button
			className={`nuitral-button ${classes} ${backgroundColorClasses} ${disabled ? 'disabled' : ''}`}
			type={type}
			disabled={disabled}
			{...attributes}
		>
			{leftSide && <div className="left-side">{leftSide}</div>}

			{icon && iconPosition === 'left' && <Icon icon={icon} />}

			{children}

			{icon && iconPosition === 'right' && <Icon icon={icon} />}

			{rightSide && <div className="right-side">{rightSide}</div>}
		</button>
	)
}
export default Button
