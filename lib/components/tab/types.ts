import { NuitralTabProps as TabProps } from '@nuitral/types'
import { NuitralIconsId } from '@nuitral/icons'
import React, { ReactNode } from 'react'

export interface NuitralTabProps extends TabProps {
	icon: NuitralIconsId | null
	children: React.ReactNode | React.ReactElement<Partial<NuitralTabProps>>[]
	leftSide: ReactNode
	rightSide: ReactNode
}
