import React from 'react'
import Icon from '../icon'
import { NuitralInputProps } from './types';

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
		</div>
	)
}

export default Input
