import React from 'react'
import Icon from '../icon'
import { NuitralInputProps } from './types'
import "@nuitral/core/input"

const Input: React.FC<NuitralInputProps> = ({
	type = 'text',
	placeholder = '',
	icon,
	iconPosition = 'left',
	disabled = false,
	classes = '',
	value,
	onChange,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = type === 'number' ? Number(e.target.value) : e.target.value
		onChange(newValue)
	}
	return (
		<div>
			<nuitral-core-input></nuitral-core-input>

		<div
			className={`nuitral-input nuitral-input-text-color ${classes}  ${disabled ? 'disabled' : ''}`}
		>

			{icon && iconPosition === 'left' && <Icon icon={icon} />}
			<input
				type={type}
				disabled={disabled}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
			{icon && iconPosition === 'right' && <Icon icon={icon} />}
		</div></div>
	)
}

export default Input
