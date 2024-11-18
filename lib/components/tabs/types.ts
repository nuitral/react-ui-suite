import { NuitralTabsProps as TabProps } from '@nuitral/types'
/**
 * Imports the `NuitralTabsProps` interface from the '@nuitral/types' library
 * and renames it locally as `TabProps`.
 * This allows the local interface to extend the properties defined
 * in the base `NuitralTabsProps` without causing conflicts.
 */

import { NuitralTabProps } from '../tab/types'
/**
 * Imports the `NuitralTabProps` interface from the '../tab/types' module.
 * This interface defines the structure of individual tab items
 * within the tab group.
 */

import { ReactElement } from 'react'
/**
 * Imports the `ReactElement` type from React.
 * This is used to specify the structure of children components
 * that can be passed to the tabs.
 */

/**
 * Defines the `NuitralTabsProp` interface, which extends the standard `NuitralTabsProps`.
 *
 * Properties:
 * - `items`: An array of `Partial<NuitralTabProps>` objects that represent the individual tabs.
 *   Each item can define any subset of properties from the `NuitralTabProps` interface.
 *
 * - `children`: An array of `ReactElement` elements, each representing a tab component.
 *
 * - `onSelection`: A callback function triggered when a tab is selected.
 *   Receives an object containing:
 *     - `item`: The selected tab, conforming to the `NuitralTabProps` interface.
 *     - `index`: The index of the selected tab in the `items` array.
 *
 * - `[key: string]: any`: Allows any additional custom attributes or properties to be passed.
 */
export interface NuitralTabsProp extends TabProps {
	items: Partial<NuitralTabProps>[]
	children: ReactElement<Partial<NuitralTabProps>>[]
	onSelection: (value: { item: NuitralTabProps; index: number }) => void
	[key: string]: any
}
