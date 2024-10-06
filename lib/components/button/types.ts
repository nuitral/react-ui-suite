import { NuitralButtonProps as ButtonProps } from '@nuitral/types'
/**
 * Imports the `NuitralButtonProps` interface from the '@nuitral/types' library
 * and renames it locally as `ButtonProps`.
 * This allows the local interface to extend the properties defined
 * in the base `NuitralButtonProps` without causing conflicts.
 */
import { NuitralIconsId } from '@nuitral/icons'
/**
 * Imports the type definition for `NuitralIconsId` from the '@nuitral/icons' library.
 * This type is used to specify the icon identifier from the nuitral icon set.
 */
import { ReactNode } from 'react'
/**
 * Imports the `ReactNode` type from the React library.
 * `ReactNode` is used to define the type of children elements that can be passed to a React component.
 */

/**
 * Extends the standard `NuitralButtonProps` with additional properties specific to the nuitral library.
 *
 * Properties:
 * - `icon` (optional): Represents the identifier for an icon from the nuitral icon set.
 *   Can be a valid `NuitralIconsId` or `null`.
 * - `children` (optional): Defines the content to be rendered inside the button.
 *   It uses the `ReactNode` type, which allows for a variety of child elements
 *   such as strings, numbers, JSX elements, or fragments.
 * - `leftSide` (optional): Specifies additional content to be rendered on the left side of the button,
 *   such as an icon or text. This also uses the `ReactNode` type.
 * - `rightSide` (optional): Specifies additional content to be rendered on the right side of the button,
 *   such as an icon or text. This also uses the `ReactNode` type.
 */
export interface NuitralButtonProps extends ButtonProps {
	icon?: NuitralIconsId | null
	children?: ReactNode
	leftSide?: ReactNode
	rightSide?: ReactNode
}
