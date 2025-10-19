import React, { useEffect, useRef } from 'react'
import { NuitralInputProps } from './types'

const Input: React.FC<NuitralInputProps> = ({
	type = 'text',
	placeholder = '',
	disabled = false,
	icon = null,
	iconPosition = 'left',
	classes = '',
	value = '',
	onChange,
}) => {
	const inputRef = useRef<any>(null)

	const computedClasses = `${classes} ${disabled ? 'disabled' : ''}`.trim()

	useEffect(() => {
		const current = inputRef.current

		if (!current) return

		const handleValueChange = (e: CustomEvent) => {
			onChange?.(e.detail.value)
		}

		current.addEventListener('value-change', handleValueChange)

		return () => {
			current.removeEventListener('value-change', handleValueChange)
		}
	}, [onChange])

	useEffect(() => {
		if (inputRef.current && inputRef.current.value !== value) {
			inputRef.current.value = value
		}
	}, [value])

	return (
		<nuitral-core-input
			ref={inputRef}
			value={value}
			type={type}
			icon={icon}
			iconPosition={iconPosition}
			placeholder={placeholder}
			disabled={disabled}
			classes={computedClasses}
		></nuitral-core-input>
	)
}

export default Input
