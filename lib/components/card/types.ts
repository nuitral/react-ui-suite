import { NuitralCardProps as CardProps } from '@nuitral/types'
/**
 * Imports the `NuitralCardProps` interface from the '@nuitral/types' library
 * and renames it locally as `CardProps`.
 * This allows the local interface to extend the properties defined
 * in the base `NuitralCardProps` without causing conflicts.
 */

import { ReactNode } from 'react'

/**
 * Imports the `ReactNode` type from the React library.
 * `ReactNode` is used to define the type of children elements that can be passed to a React component.
 */
export interface NuitralCardProps extends CardProps {
	children?: ReactNode
	header?: ReactNode
	footer?: ReactNode
}
