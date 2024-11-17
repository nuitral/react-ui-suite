import { NuitralTabsProps as TabProps } from '@nuitral/types'
import { NuitralTabProps } from '../tab/types'
import { ReactElement } from 'react'

export interface NuitralTabsProp extends TabProps {
	items: Partial<NuitralTabProps>[]
	children: ReactElement<Partial<NuitralTabProps>>[]
	[key: string]: any
}
