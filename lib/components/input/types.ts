import { NuitralInputProps as InputProps } from '@nuitral/types'
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

/**
 * Extends the standard `NuitralInputProps` with additional properties specific to the nuitral library vue-ui-suite.
 *
 * Properties:
 * * - `value`: Represents the current value of the input component. It can be either a string or a number, depending on the input type.
 *  * - `onChange`: A function that handles changes to the input's value. It receives the new input value as an argument, which can be either a string or a number.
 * * - `icon` (optional): Represents the identifier for an icon from the nuitral icon set.
 *   Can be a valid `NuitralIconsId` or `null`.
 */
export interface NuitralInputProps extends InputProps {
	value: string | number
	onChange: (value: string | number) => void
	icon?: NuitralIconsId | null
}
