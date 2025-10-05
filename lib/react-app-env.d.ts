import React from 'react'

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'nuitral-example': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>
			'nuitral-core-input': React.DetailedHTMLProps<
				React.InputHTMLAttributes<HTMLInputElement>,
				HTMLInputElement
			>
		}
	}
}
