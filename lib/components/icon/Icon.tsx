import React, { useMemo } from 'react'
import { NuitralIconsId } from '@nuitral/icons'

interface IconProps {
	icon?: NuitralIconsId
}

const Icon: React.FC<IconProps> = ({ icon = '' }) => {
	const iconClass = useMemo(() => `nuitral-icon-${icon}`, [icon])

	return <div className={`nuitral-icon ${iconClass}`}></div>
}

export default Icon
