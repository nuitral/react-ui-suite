import React, { useMemo } from 'react'
import useAttrs from '../../hooks/attributes'
import useColorsAttributesValidator from '../../hooks/colorsAttributesValidator'
import { NuitralChipProps } from './types'

const Card: React.FC<NuitralChipProps> = ({
	classes = '',
	icon = null,
	iconPosition = 'left',
	children,
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
			key => `nuitral-chip-${key}`
		)
	}, [attributes])

	const computedClasses =
		`${classes} ${backgroundColorClasses}`.trim()

	return (
		<>
			<nuitral-core-chip
				{...attributes}
				icon={icon}
				iconPosition={iconPosition}
				classes={computedClasses}
			>
				<div slot="default">{children}</div>
			</nuitral-core-chip>
		</>
	)
}
export default Card
