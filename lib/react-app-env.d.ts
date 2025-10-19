import React from 'react'
import { NuitralClass, NuitralInputType } from '@nuitral/types'
import { NuitralIconsId } from '@nuitral/icons'

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'nuitral-core-input': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			> & {
				value?: string | number
				type?: NuitralInputType
				icon?: NuitralIconsId | null
				iconPosition?: NuitralIconPosition
				placeholder?: string
				disabled?: boolean
				classes?: NuitralClass
				onValueChange?: (event: CustomEvent<{ value: string }>) => void
			},
			'nuitral-core-icon': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			> & {
				icon?: NuitralIconsId | null
			}
		}
	}
}
