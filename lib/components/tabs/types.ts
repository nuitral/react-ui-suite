import { NuitralTabsProps as TabProps } from '@nuitral/types'
import { NuitralTabProps } from '../tab/types'
import { ReactElement } from 'react'

export interface NuitralTabsProp extends TabProps {
	items: Partial<NuitralTabProps>[]
	children: ReactElement<Partial<NuitralTabProps>>[]
	onSelection: (value: { item: NuitralTabProps; index: number }) => void
	[key: string]: any
}
