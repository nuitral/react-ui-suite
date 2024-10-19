import { NuitralBoxProps } from '@nuitral/types'
import React, { useMemo } from 'react'
import useAttrs from '../../hooks/attributes'
import useColorsAttributesValidator from '../../hooks/colorsAttributesValidator'
const Box: React.FC<NuitralBoxProps> = ({ title, description, ...attrs }) => {
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
			key => `nuitral-box-background-${key}`
		)
	}, [attributes])

	return (
		<div className={`nuitral-box ${backgroundColorClasses}`}>
			<div className="nuitral-box-title">{title}</div>
			<div>{description}</div>
		</div>
	)
}

export default Box
