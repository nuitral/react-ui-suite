import React, { useMemo } from 'react'
import { NuitralIconsId } from '@nuitral/icons'

interface IconProps {
	icon?: NuitralIconsId
}

const Icon: React.FC<IconProps> = ({ icon = null }) => {
	return <nuitral-core-icon icon={ icon }></nuitral-core-icon>
}

export default Icon
