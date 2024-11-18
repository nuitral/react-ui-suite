import { NuitralTabProps as TabProps } from '@nuitral/types'
/**
 * Imports the `NuitralTabProps` interface from the '@nuitral/types' library
 * and renames it locally as `TabProps`.
 * This allows the local interface to extend the properties defined
 * in the base `NuitralTabProps` without causing conflicts.
 */

import { NuitralIconsId } from '@nuitral/icons'
/**
 * Imports the type definition for `NuitralIconsId` from the '@nuitral/icons' library.
 * This type is used to specify the icon identifier from the nuitral icon set.
 */

import React, { ReactNode } from 'react'
/**
 * Imports `ReactNode` and other essential types from React.
 * These are used to define the structure of components
 * and children properties within the interface.
 */

/**
 * Extends the standard `NuitralTabProps` with additional properties
 * specific to the nuitral library's tab component.
 *
 * Properties:
 * - `icon` (optional): Represents the identifier for an icon from the nuitral icon set.
 *   Can be a valid `NuitralIconsId` or `null`.
 * - `component` (optional): A React component to be rendered inside the tab.
 *   Can be a `React.ComponentType` or `null`.
 * - `children`: Contains the nested elements or components of the tab.
 *   Accepts an array of `ReactNode` or `ReactElement` with partial tab properties.
 * - `leftSide`: Represents content displayed on the left side of the tab.
 *   Accepts any valid `ReactNode`.
 * - `rightSide`: Represents content displayed on the right side of the tab.
 *   Accepts any valid `ReactNode`.
 */
export interface NuitralTabProps extends TabProps {
	icon: NuitralIconsId | null
	component: React.ComponentType | null
	children: React.ReactNode | React.ReactElement<Partial<NuitralTabProps>>[]
	leftSide: ReactNode
	rightSide: ReactNode
}