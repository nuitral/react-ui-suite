import { NuitralChipProps as ChipProps } from '@nuitral/types'
/**
 * Imports the `NuitralChipProps` interface from the '@nuitral/types' library
 * and renames it locally as `ChipProps`.
 * This allows the local interface to extend the properties defined
 * in the base `NuitralChipProps` without causing conflicts.
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
 * Extends the standard `NuitralChipProps` with additional properties specific to the nuitral library vue-ui-suite.
 *
 * Properties:
 * - `children` (optional): Defines the content to be rendered inside the chip.
 *   It uses the `ReactNode` type, which allows for a variety of child elements
 * - `icon` (optional): Represents the identifier for an icon from the nuitral icon set.
 *   Can be a valid `NuitralIconsId` or `null`.
 */
export interface NuitralChipProps extends ChipProps {
	children?: ReactNode,
	icon?: NuitralIconsId | null
}
