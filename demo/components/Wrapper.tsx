import React, { ReactNode } from 'react'

interface WrapperProps {
	children?: ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div style={{ padding: '1rem', boxSizing: 'border-box' }}>{children}</div>
	)
}

export default Wrapper
